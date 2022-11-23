/*Registration form Gui Made By Sarth Aaradhye*/
import './App.css';

function App() {


  return (
   
    
      <form>
      <header><h1>Registration form gui</h1></header>
      <p >Username</p><input type="text" name="username"  ></input>
      <p >Birth date</p><input type="date" name="bdate"></input>
      <p>Mobile number</p> <input type="number" name="mobilenum"></input>
      <p>Email</p><input type="Email" name="email"  ></input>
      <p>Password</p><input type="password" name="password"></input>
      <p>Gender</p> 
      <label>Male</label><input type="checkbox"></input><label>Female</label><input type="checkbox"></input>
      <p>Date to stay</p><input type="date"></input>
      <br></br>
      <br></br>
      <button>submit</button>
      </form>
    
  );
}

export default App;
