import {React,useState } from 'react'
import axios from "axios";

function Data(x)
{
var [temp,settemp]=useState("");
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${x.city}&appid=13f8a009382a03aab76fe33504463f36`)
.then((result)=>{settemp(result.data.main.temp)
console.log(temp)})
return(
    <div>
    <h1>{temp}F</h1>
    </div>
);
}
export default Data();
