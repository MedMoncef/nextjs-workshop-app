import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import axios from 'axios'
import { useRouter } from 'next/router'
import { FaHome, FaSignInAlt, FaPlus, FaMinus } from 'react-icons/fa'
//import styles from '@/styles/Shop.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Shop() {
  const router = useRouter()
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)

  // logic 
  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
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
    <div className="container">
      <Head>
        <title>Shopping page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome to shop page</h1>
        <h2>Count : {count}</h2>
        <div>

        <button className="button" onClick={() => setCount(count + 1) }>
          <FaPlus size={16} style={{ marginRight: 8 }} />
          <span>Add</span>
        </button>
        <button className="button" onClick={() => setCount(count - 1) }>
          <FaMinus size={16} style={{ marginRight: 8 }} />
          <span>Subtract</span>
        </button>
        <br /><br />
        <button className="button" onClick={gotoHomePage}>
          <FaHome size={16} style={{ marginRight: 8 }} />
          <span>Home</span>
        </button>
        <button className="button" onClick={() => router.push('/login')}>
          <FaSignInAlt size={16} style={{ marginRight: 8 }} />
          <span>Login</span>
        </button>
        </div>

        {products.length > 0 ? <h2>List of products</h2> : <h3>No data yet</h3> }
      </main>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          height: 100vh;
        }

        main {
          font-family: ${inter.fontFamily};
        }

        .button {
          background-color: #4CAF50;
          border: none;
          color: white;
          padding: 10px 20px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
          border-radius: 4px;
          transition: background-color 0.3s;
        }
        
        .button:hover {
          background-color: #3e8e41;
        }  

        // Add more styles as needed
      `}</style>
    </div>
  )
}