import { useState } from 'react'
import './App.css'
import Card from './card.jsx'
function App() {
  let users=[{name:'Daisy',img:"image/1.jpg"},
    {name:'Lotus',img:"image/2.jpg"},
    {name:'Daisy',img:"image/3.jpg"},
    {name:'Lotus',img:"image/4.jpg"},
    {name:'Rose',img:"image/5.jpg"},
    {name:'Rose',img:"image/7.jpg"}
  ];
  return (
    <>
      <Card users={users}/>
    </>
  )
}

export default App
