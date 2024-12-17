import './App.css'

function Card(props) {


  return (
    <>
    <div id="card-container">
   {props.users.map((user,index)=>
      <div id="card" >
        <h3>Name:{user.name}</h3>
        <p>Course:{user.course}</p>
        <p>Semester:{user.sem}</p>
        <p>Year:{user.year}</p>
        <p>CGPA:{user.cgpa}</p>
      </div>
    )}
    </div>
    </>
  )
}

export default Card
