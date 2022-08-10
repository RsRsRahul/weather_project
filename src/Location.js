import React,{useState} from 'react'
import axios from 'axios';
import './location.css';
import Popular1 from './popular1';
const Location = () => {
     const [city,setcity] = useState("");
     const [d,setd] = useState("");
     const [x,setx] =useState(0);
     const [a,seta]=useState();
     const [b,setb]=useState();
     const [c,setc]=useState();
     const pc =["london","california","new york","madrid","goa","mexico"]
     const newpc=pc.map(pop)
     var maincity;
     const first=()=>{
       maincity=city;
         console.log(city)
         axios.get(`http://api.weatherapi.com/v1/current.json?key=d3b3f42c5cc94d8b9b5152123220605&q=${maincity}&aqi=no`)
         .then((res)=>{setd(res.data.current)
          setb(res.data.location.name)
          seta(res.data.current.condition.text)
        setc(res.data.current.condition.icon)})
     setx(1)
  }


  return (
    <div >
      <center className='hi'>
            <h2 className='ques'>Enter your city</h2>
            <input type="text" className='but'  placeholder='Enter a City' onChange={(e)=>{setcity(e.target.value)} } />
             <button className='fa fa-search  sub' onClick={()=>first()} ></button> 
             </center>
             {x?
             <center className="data"><div className='top'>
              <h1>{b}</h1>
              <h1> {d.temp_c}&#176;C</h1>
              <img src={c} className='resp' alt='loading'/>
              <p> {a}</p>
             </div>
             <div className='bottom'>
              <p>HUMIDITY: {d.humidity}</p>
              <p>PRESSURE : {d.pressure_mb}</p>
              <p>WIND : {d.wind_mph}MPH</p>
              <p>FAHRENHIET : {d.temp_f}&#176;F</p>
              </div>
              </center>:
             null
             }
             <h1>{newpc}</h1>

            
    </div>
  )
}
 function pop(x) {
             return (<Popular1 city={x} className='box'/> );             
            } 
export default Location;
