import './App.css'
function Card(props){
  return (
    <>
    <div id="card-container">
   {props.users.map((user,index)=>
      <div id="card" key={index}>
        <img src={user.img}/>
        <h3>{user.name}</h3>
      </div>
    )}
    </div>
    </>
  )
}

export default Card
