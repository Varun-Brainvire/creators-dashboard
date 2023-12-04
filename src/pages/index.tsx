import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, Container, TopNavigationContainer, TopNavigationTextAndIcons } from '@/components/styles/button.styles'  
import { ChartDiv, EarningDiv, SekGraphDiv } from '@/components/styles/ChartDiv.styles'
import Buttons from '@/components/Buttons'
import Chart from '@/components/Chart'
import ProductComponent from '@/components/ProductComponent'
import { useState } from 'react'
import svg from "../../public/left-arrow-svgrepo-com.svg";
import { IoMdClose } from "react-icons/io";
import Mobile from '@/components/Mobile'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [startDate, setStartDate] = useState<Date | any>(new Date());
  const [endDate, setEndDate] = useState<Date | any>(null);
  return (
    <Container>
      <Mobile />
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
