import {useState, useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Shop() {
  const router = useRouter()
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)

  // logique 
  const fetchProducts = async () => {
    console.log('send request to an API to fetch products')
    const response = await axios.get('https://fakestoreapi.com/products')
    console.log('response from the API : ', response.data)
    setProducts(response.data)
  }

  useEffect(() => {
    console.log('display all products ...')
    fetchProducts()
  },[]);

  useEffect(() => {
    console.log('filter products based on the selected filter...')
  },[count]);

  const gotoHomePage = () => {
    router.push('/')
  }

  return (
    <>
      <Head>
        <title>Shopping page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome to shop page</h1>
        <h2>Count : {count}</h2>
        <button onClick={() => setCount(count + 1) }>+</button>
        <br />
        <button onClick={() => setCount(count - 1) }>-</button>
        <br />
        <button onClick={gotoHomePage}>Go to Homepage</button>
        <button onClick={() => router.push('/login')}>Go to Login</button>


        {/* {products.length > 0 && <h2 >List of products</h2> } */}
        {products.length > 0 ? <h2 >List of products</h2> : <h3>No data yet</h3> }
      </main>
    </>
  )
}
