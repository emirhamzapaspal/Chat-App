import { useState, useEffect, useRef } from "react";
import {
  getFirestore,
  onSnapshot,
  collection,
  addDoc,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

import { auth, app } from "../firebase";

const db = getFirestore(app);

function ChatRoom({ name, user}) {
  const [imageUrl, setImageUrl] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const q = query(collection(db, `messages${name}`), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return unsubscribe;
  }, [name]); 
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!newMessage.trim() && !imageUrl) {
      console.error("Error: No message content or image to send.");
      return;
    }
  
    if (!user) {
      console.error("Error: User is not logged in.");
      return;
    }
  
    try {
      await addDoc(collection(db, `messages${name}`), {
        uid: user.uid,
        name: user.email.split("@")[0],
        text: newMessage.trim(),
        image: imageUrl || null,
        timestamp: serverTimestamp(),
      });
      setNewMessage("");
      setImageUrl(null);
    } catch (error) {
      console.error("Error sending message:", error.message);
    }
  };
  
  
  
  const fileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;
  
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
  
          const maxWidth = 800;
          const maxHeight = 800;
          let width = img.width;
          let height = img.height;
  
          if (width > height) {
            if (width > maxWidth) {
              height = (height * maxWidth) / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = (width * maxHeight) / height;
              height = maxHeight;
            }
          }
  
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);
  
          const resizedBase64 = canvas.toDataURL(file.type);
          setImageUrl(resizedBase64);
        };
      };
  
      reader.readAsDataURL(file);
    }
  };
  

  return (
    <div className="App">
        <div>
          <div className="message-container">
          <div className="messages">
            {messages.map((msg) => {
              const isOwnMessage = msg.data.name === user.email.split("@")[0];
              return (
                <div
                  key={msg.id}
                  className={`message${isOwnMessage ? "own" : ""}`}
                >
                <div className={`nameTitle`}>
                  {msg.data.name}:
                </div>
                  
                  <br />
                  {msg.data.image && (
                    <>
                      <img src={msg.data.image} alt="User uploaded" className="image" />
                      <br />
                    </>
                  )}
                  {msg.data.text}
                </div>
              );
            })}
            <div ref={messagesEndRef}></div>
          </div>
          </div>
          <div className="input-container">
            <input
              className="input"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button className="sendMsg" onClick={sendMessage}>
              ➤
            </button>
            <input type="file" accept="image/*" onChange={fileUpload} />
            </div>
        </div>
    </div>
    );
}

export default ChatRoom;