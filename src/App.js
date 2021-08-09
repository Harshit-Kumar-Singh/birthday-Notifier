import './App.css';
import data from './data'
import React,{useState} from 'react';
function App() {
  const [friends, setfriends] = useState(data)
  const [name,setName] = useState('');
  const [age,setAge] = useState('');
  const [image, setImageUrl] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Hi i AM IN HANDLESUBMIT");
    const newFriend = {id: new Date().getTime().toString(),name,age,image};
    console.log(image);
    setfriends((friends)=>{
      return [...friends,newFriend];
    })
    setName('');
    setAge('');
    setImageUrl('');
  }
  return (
    <React.Fragment >
      <div id="main">
        <div className="container">
          <header>
            <h2>My Friends</h2>
          </header>
          <div> <List friends={friends}/></div>
        </div>
        <div id="addFriend">
          <div>
            <Add
              handleSubmit = {handleSubmit} 
              name={name}
              setName={setName}
              age = {age}
              setAge ={setAge}
              imageUrl = {image}
              setImageUrl = {setImageUrl}
            />
          </div>
        </div>
      </div>
      
    </React.Fragment>
  );
}
export default App;
function List({friends}) {
  return(
    <>
        {friends.map((friend)=>{ 
          return(
            <>
              <SingleFriend friend = {friend}/>
            </>
          );

        })
        }
      
    </>
  );
}

function SingleFriend({friend}) {
  const {name,age,image} = friend;

  console.log(friend);
  return(
    <div className="subContainer">
      <section id ="image">
        <img src={image} alt="FriendImage"/>
      </section>
      <section id="frienddetails">
        <p id ="name">{name}</p>
        <p id ="age">{age} years</p>
      </section>
      <section className="inp">
      <input type="checkbox" />
      </section>
    </div>
  );
  
}
function Add({handleSubmit,name,setName,age,setAge,image,setImageUrl}) {
  return(
    <>
      
        <form id="Form-section" onSubmit={handleSubmit}>
          <label htmlFor="Name">Name: <br />
            <input 
            className="myInput"
            id="text" 
            placeholder="Enter Your Friend" 
            value={name}
            onChange={(e)=> setName(e.target.value)}
            >
            
            </input>
          </label>
          <label htmlFor="Age">Age: <br />
            <input 
            className="myInput" 
            type="number" 
            id="Age" 
            placeholder="Enter Your Friend Age" 
            value={age}
            onChange={(e)=> setAge(e.target.value)}
            ></input>
          </label>
          <label htmlFor="Image">Image URL: <br/>
            <input 
              className="myInput" 
              type="text" 
              id="Image" 
              placeholder="Enter Your Friend's Image URL" 
              value={image}
              onChange={(e)=> setImageUrl(e.target.value)}
            ></input>
          </label> <br />
          <section id="btn">
            <button type="submit">Add Friend</button>
          </section>
        </form>
    
    </>
  );
  
}