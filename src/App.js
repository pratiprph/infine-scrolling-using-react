import React, { useState, useEffect } from 'react';
import "./styles.css";

export default function App() {
const [photos, setPhotos] = useState([])
const [start, setStart ] = useState(0)
const [end, setEnd ] = useState(5)
const [ tag, setTag ] = useState('')
const [ search, setSearch ] = useState('')

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

function searchItem(event){
  let search_str = event.target.value

  let photo = photos.filter((el)=>el.title.includes(search_str))
  console.log(photo)
  console.log(search_str)
  if(search_str===" "){
    setPhotos(photos)
  } else {
    setPhotos(photo)
  }
  
}

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start typing to search!</h2>
       <input type="text" style={{"width":"500px","borderRadius":"10px"}}
       onChange={searchItem}/><br/><br/>

      <table className="table">
      <thead>
        <tr>
          <th scope="col">Album ID</th>
          <th scope="col">Title</th>
          <th scope="col">Icon</th>
        </tr>
      </thead>
      <tbody>
       {
         photos.splice(start,end).map((el)=>(
          <tr key={el.id}>
            <th scope="row">1</th>
            <td>{el.id}</td>
            <td>{el.title}</td>
            <td><img src={el.thumbnailUrl} style={{"width":'100px',"height":"70px"}}/></td>
          </tr>
        
         ))
       }
       </tbody>
      </table>
    </div>
  );
}
