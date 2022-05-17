import {React,useState} from 'react'
import axios from 'axios'
const Popular1 = (props) => {
    const [a,seta]=useState();
    const [c,setc]=useState();
    const [b,setb]=useState();
    const[d,setd]=useState();
// console.log(props.city)

axios.get(`http://api.weatherapi.com/v1/current.json?key=d3b3f42c5cc94d8b9b5152123220605&q=${props.city}&aqi=no`)
         .then((res)=>{setd(res.data.current.temp_c)
          setb(res.data.location.name)
          seta(res.data.current.condition.text)
        setc(res.data.current.condition.icon)})
  return (
    <div className='pdata'>
      <center>
      <h3>{b}</h3>
      <p>TEMP : {d}&#176;C</p>
      <p> {a}</p> 
      <img src={c} className='pimg' alt='loading'/>
      </center>
    </div>
    
  )
}

export default Popular1