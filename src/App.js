import React, { useState, useEffect } from 'react';
import "./styles.css";

export default function App() {
const [photos, setPhotos] = useState([])
const [start, setStart ] = useState(0)
const [end, setEnd ] = useState(5)
const [ tag, setTag ] = useState('')

 useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/photos')
     .then(res=>res.json())
     .then(data=>setPhotos(data))
 },[])

 window.onscroll = function(ev) {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    setTag('You are at the end of the page')

      setTimeout(()=>{
        setStart(start + 5)
        setEnd(end + 5)
      },2000)
      
  }
};

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
       {
         photos.splice(start,end).map((el)=>(
            <div>
              <img src={el.thumbnailUrl}/>
            <h3>{el.title}</h3>
            <hr/>
             {tag}
            </div>
         ))
       }
      </div>
    </div>
  );
}
