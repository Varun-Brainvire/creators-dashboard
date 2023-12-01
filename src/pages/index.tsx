import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, Container } from '@/components/styles/button.styles'  
import { ChartDiv, EarningDiv, SekGraphDiv } from '@/components/styles/ChartDiv.styles'
import Buttons from '@/components/Buttons'
import Chart from '@/components/Chart'
import ProductComponent from '@/components/ProductComponent'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [startDate, setStartDate] = useState<any>(new Date());
  const [endDate, setEndDate] = useState<Date | any>(null);
  return (
    <Container>
      {/* <h1>Hello</h1> */}
      {/* <h1>Text for testing fonts</h1> */}
      <Buttons applyGap={true} startDate={startDate} setStartDate={setStartDate}  endDate={endDate} setEndDate={setEndDate} />
        
      <ChartDiv>
      <EarningDiv>
          Earnings
        </EarningDiv>
      <Chart startDate={startDate} setStartDate={setStartDate}  endDate={endDate} setEndDate={setEndDate} />
      <SekGraphDiv>
          SEK 2520
        </SekGraphDiv>
      </ChartDiv>
      <ProductComponent />
    </Container>
  )
}
