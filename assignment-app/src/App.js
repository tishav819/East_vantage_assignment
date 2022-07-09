import React,{useEffect,useState } from 'react'
import './App.css';
import {getReq} from './Apicall/api_call'   // importing apicall// for fetching the data

import {setItem} from './utils/storage'   // importing services // for storage local storage
import axios from 'axios';

function App() {
  const [data,setData]=useState([])  // setting state bu using hooks, usestate.

  useEffect(()=>{                   // using useeffect to render again and again after frst render
        fetchDataApi() 
  },[])

  const fetchDataApi= async()=>{
      const url = "https://randomuser.me/api";    // async await to resolve proise and fetching the data
      try{
        const getData=await getReq(url)         // axios used here to fetch data
        
        setData(getData?.data?.results)
        setItem('result',getData?.data?.results) // setting data into localstorrage
      }
      catch(err){
          console.log('err::',err)
      }

  }

  function refreshcomponent() {  // made one function for reload the component and showing new data from the end point, by changing the state
    //window.location.reload(false);
    return axios.get(`https://randomuser.me/api`).then(res => {
      
        setData(res?.data?.results)
        setItem('result',res?.data?.results)
    });
  }

  return (
    <div className="App">
       <h1> East Vantage: Assignment</h1>
       {data && data.map((item,i)=>   // using map function to get the data from the given api,using key for the uniqueness, making  /                          button with onclick function
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
