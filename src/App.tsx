
import './App.css';
import { Box, Slider } from '@mui/material';
import { Container } from '@mui/system';
import { useState,useEffect } from 'react';

function App() {

  const [size,setSize]=useState(500)
  const [source]=useState(["1.jpeg","2.jpeg","3.jpeg"])
  const [index, setIndex]=useState(0)
  const changeSize=(x:any)=>{
    console.log(x.target.value)
    setSize(x.target.value)
    }
    
    useEffect(()=>{
      startTime(5000)
    })

  const startTime=(timerValue:number)=>{

    setTimeout(()=>{
      let maxvalue=source.length-1;

      if(index===maxvalue)
      {
        setIndex(0)
      }else{
        setIndex(index+1);
      }
      },timerValue)
  }
  
  return (
    <div className="App">
      <body>
      <Container maxWidth="sm">
        <Slider   defaultValue={size} max={800} onChange={e=>changeSize(e)} aria-label="Disabled slider" />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="50vh"
        >
          <img alt="Main view" style={{'height': '100vh' }} src={source[index]}></img>
         
        </Box>
      </Container>
      </body>
    </div>
  );
}



export default App;
