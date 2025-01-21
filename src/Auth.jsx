import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase";

import { useState, useEffect } from "react";

function Auth(){
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
        return unsubscribe;
    }, []);
      
    
    const handleSignIn = async () => {
        if (!email || !password) {
          setError("Email and password are required for login.");
          return;
        }
    
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          console.log("User logged in:", userCredential.user);
          setError(null); // Clear any previous errors
        } catch (error) {
          console.error("Error logging in:", error.message);
          setError(error.message);
        }
    };
    
    const handleLogIn = async () => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
    }

    return(
        <center>
            {error && <p className="error">{error}</p>}
            <div>
            <label className="authTitle">Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="authInput"
            />
            </div>
            <div>
            <label className="authTitle">Password:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="authInput"
            />
            </div>
            <button onClick={handleLogIn} className="login">
                Log in
            </button>

            <button onClick={handleSignIn} className="signin">
                Sign In
            </button>
        </center>
    );
}
export default Auth;