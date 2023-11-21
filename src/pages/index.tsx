import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button } from '@/components/styles/button.styles'  

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const handleWeekClick = () => {
    // alert("week")
    let button = document.getElementById("dynamic")
    button.innerText = "Hello"
    console.log(document.getElementById("dynamic"))
  }

  return (
    <>
      {/* <h1>Hello</h1> */}
      {/* <h1>Text for testing fonts</h1> */}
      <Button id="dynamic">Dynamic Dates</Button>
      <Button>Yesterday</Button>
      <Button>Last Week</Button>
      <Button>Last Month</Button>
      <Button onClick={handleWeekClick}>This Week</Button>
    </>
  )
}
