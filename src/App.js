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
      console.log(photos.length)
  }
};

  return (
    <div classNameName="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      
       {
         photos.splice(start,end).map((el)=>(
          <div className="card" style={{"width": "18rem"}}>
          <img className="card-img-top" src={el.thumbnailUrl} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">{el.title}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div><hr/>
        </div>
        
         ))
       }
      
    </div>
  );
}
