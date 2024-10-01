import {React,useCallback, useEffect }from 'react'
import { set, useForm } from 'react-hook-form'
import {Button,Input,Select,RTE} from '../index'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({post}) {

    const {register,handleSubmit,watch,setValue,control,getValues} = useForm({

        defaultValues:{

            title:post?.title || '',
            slug:post?.slug || '',
            content:post?.content || '',
            status:post?.status || 'active',
        },

    })

    const navigate = useNavigate()

    const userData = useSelector((state)=>state.user.userData)

    const submit = async (data) =>{

        if(post){
          const file =  data.image[0] ? appwriteService.uploadFile(data.image[0]) : null

            if(file){
                appwriteService.deleteFile(post.featuredImage)
            }

            const dbPost = await appwriteService.updatePost(
                post.$id,{
                ...data,
                featuredImage:file? file.$id : undefined
            })
            if(dbPost){
                navigate(`/post/${dbPost.id}`)
            }
        }
        else{
            const file = await appwriteService.uploadFile(data.image[0]) 
            if(file){
                const fileId = file.$id
                data.featuredImage = fileId
               const dbPost = await appwriteService.createPost(
                    {
                        ...data,
                        userId:userData.$id,
                    })
                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }

    const slugTransform = useCallback((value)=>{
        if(value && typeof value === 'string')
        return 
            value.trim().toLowerCase
            .replace(/^[a-zA-Z\d\s]+/g,'-')
            .replace(/\s/g,'-')
        
        return ''
    },[])


    useEffect(() => {
        const subscription = watch((value,{name})=>{
            setValue('slug',slugTransform(value.title,{shouldValidate:true}))
        })

        return () =>{
            subscription.unsubscribe()
        }
    }, [watch,slugTransform,setValue])
    
  return (
    <Editor
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
  )
}

export default PostForm