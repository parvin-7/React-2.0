import conf from "../conf/conf";
import { Client,ID,Query,Databases } from "appwrite";

export class Service{
    client = new Client()
    databases
    bucket

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug{
                    title,
                    content,
                    featuredImage,
                    userId,
                }
            )
        } catch (error) {
            console.log(error);

        }
    }

    async updatePost(slug, {title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug ,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log(error);

        }
    }

    async deletePost(slug){
        try {
           return await this.databases.deleteDocument(
            conf.appwriteCollectionId,
            conf.appwriteDatabaseId,
            slug,
           )
           return true
        } catch (error) {
            console.log(error);
            
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteCollectionId,
                conf.appwriteDatabaseId,
                slug
            )
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                100
                // [
                //     Query.equal("status","active")
                // ]
            )
            return true
        } catch (error) {
            console.log(error);
            return false
            
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async getFilePreview(fileId){
        return await this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}


const service = new Service()
export default service