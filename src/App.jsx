import RoomNav from "./RoomNav.jsx";
import Auth from "./Auth.jsx";
import { auth } from "../firebase.js";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth"
import LogoutImg from './assets/Logout.png'; 

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); 
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <div className="titleDiv">
        <h1 className="title">CHAT APP</h1>
      </div>
      <button className="SignOut" onClick={() => auth.signOut()}>
        <img src={LogoutImg} alt="Logout" />  
      </button> <br />
      {currentUser ? (
        <RoomNav/>
      ): (<Auth/>)}

    </div>
  );
}

export default App;
