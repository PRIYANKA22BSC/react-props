import { useState } from 'react'
import './App.css'
import Card from './card.jsx'

function App() {
  let users=[{name:'Priyanka',course:'Bsc(CS)',year:'3',sem:'6',cgpa:'8'},
    {name:'Nandani',course:'Bsc(CS)',year:'3',sem:'6',cgpa:'8.5'},
    {name:'Arti',course:'B.A',year:'2',sem:'4',cgpa:'7'},
    {name:'Kajal',course:'B.A',year:'3',sem:'6',cgpa:'7.5'},
    {name:'Akshay',course:'B.tech',year:'3',sem:'5',cgpa:'8'},
    {name:'Monu',course:'B.tech',year:'3',sem:'5',cgpa:'7.7'},
 
  ];
  return (
    <>
      <Card users={users}/>
    </>
  )
}

export default App
