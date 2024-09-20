import './App.css'
import Card from './Card'

function App() {
  const clothingItem1 = {
    name: 'Classic utility jacket',
    price: 120,
    link:'https://images.pexels.com/photos/7322271/pexels-photo-7322271.jpeg?auto=compress&cs=tinysrgb&w=400'
  };

  const clothingItem2 = {
    name: 'Hooded crop top',
    price: 140,
    link:'https://images.pexels.com/photos/6857686/pexels-photo-6857686.jpeg?auto=compress&cs=tinysrgb&w=400'
  };
  return (
    <>
     <h1 className='bg-green-400 text-black p-2 rounded-xl mb-4' >Tailwind css</h1>
     {/* <Card name="classis utility jacket" price="$110.0" src="https://images.pexels.com/photos/7322271/pexels-photo-7322271.jpeg?auto=compress&cs=tinysrgb&w=400"/>
    <br /> <Card name='crop top black hoodie' price="$150.0" src="https://images.pexels.com/photos/6857686/pexels-photo-6857686.jpeg?auto=compress&cs=tinysrgb&w=400"/> */}

    <Card item1={clothingItem1} item2={clothingItem2}/>
    </>
  )
}

export default App
