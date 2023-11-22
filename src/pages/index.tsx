import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, Container } from '@/components/styles/button.styles'  
import { ChartDiv } from '@/components/styles/ChartDiv.styles'
import Buttons from '@/components/Buttons'
import Chart from '@/components/Chart'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <Container>
      {/* <h1>Hello</h1> */}
      {/* <h1>Text for testing fonts</h1> */}
      <Buttons />
      <ChartDiv />
      <Chart />
    </Container>
  )
}
