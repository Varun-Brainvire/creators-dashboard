import React from 'react'
import { Button, ButtonContainer } from '@/components/styles/button.styles'
const Buttons = () => {

    const handleWeekClick = () => {
    // alert("week")
    let button = document.getElementById("dynamic")
    button.innerText = "Hello"
    console.log(document.getElementById("dynamic"))
  }

  return (
    <ButtonContainer>
      <Button id="dynamic">Dynamic Dates</Button>
      <Button>Yesterday</Button>
      <Button>Last Week</Button>
      <Button>Last Month</Button>
      <Button onClick={handleWeekClick}>This Week</Button>
    </ButtonContainer>
  )
}

export default Buttons
