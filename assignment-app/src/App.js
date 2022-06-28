import React,{useEffect,useState } from 'react'
import './App.css';
import {getReq} from './Apicall/api_call'

import {setItem} from './utils/storage'
import axios from 'axios';

function App() {
  const [data,setData]=useState([])

  useEffect(()=>{
        fetchDataApi() 
  },[])

  const fetchDataApi= async()=>{
      const url="https://randomuser.me/api";
      try{
        const getData=await getReq(url)
        console.log(getData?.data?.results)
        setData(getData?.data?.results)
        setItem('result',getData?.data?.results)
      }
      catch(err){
          console.log('err::',err)
      }

  }

  function refreshcomponent() {
    //window.location.reload(false);
    return axios.get(`https://randomuser.me/api`).then(res => {
      console.log(res?.data?.results)
        setData(res?.data?.results)
        setItem('result',res?.data?.results)
    });
  }



  return (
    <div className="App">
       <h1> East Vantage: Assignment</h1>
       {data && data.map((item,i)=>
         <div key={i}>  
           <p>  Full name : {item.name.title}  {item.name.first}  {item.name.last} </p>
           <p>  Email : {item.email} </p>
         </div>
         
       )}
       <div>
      <button id = "button" onClick={refreshcomponent}>Click to reload!</button>
    </div>
    </div>
  );
}

export default App;
