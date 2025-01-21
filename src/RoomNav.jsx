import ChatRoom from "./ChatRoom.jsx"
import { useState, useEffect } from "react";
import { auth } from "../firebase"

function RoomNav(){
    const [currentChatRoom, setCurrentChatRoom] = useState("General");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [newRoom, setNewRoom] = useState("");
    const [chatRooms, setChatRooms] = useState(["General", "Coding", "Tech", "Art", "Chat"])

    const user = auth.currentUser;

    const toggleSidebar = () => {
        isSidebarOpen ? setIsSidebarOpen(false) : setIsSidebarOpen(true);
    }
    
    useEffect(() => {
        toggleSidebar();
    }, [currentChatRoom])

    const addRoom = () => {
        if (!newRoom.trim()) return;
        setChatRooms(prevRooms => [...prevRooms, newRoom]); 
        setNewRoom("");
    };

    const deleteRoom = (room) => {
        
        const newChatRooms = chatRooms.filter(obj => obj !== room)

        setChatRooms(newChatRooms)
    }
    return(
        <>
            <h2 className="roomTitle">{currentChatRoom}</h2>

            {!isSidebarOpen ? (
                <button className="hamburger-button" onClick={toggleSidebar}>
                    ≡
                </button>
            ) : <div></div>}

            <nav className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
            <button className="decline-button" onClick={toggleSidebar}>
              x
            </button>
            <h2>Choose a Chat Room</h2>
            <ul className="chatroom-list">
                {chatRooms.map((room) => (
                  <li key={room}>
                    <button onClick={() => setCurrentChatRoom(room)}>
                      {room}
                    </button>
                    <button className="deleteRoomBtn" onClick={() => deleteRoom(room)}>
                        🗑️
                    </button>
                  </li>
                ))}
            </ul>
            <button className="addRoomBtn" onClick={addRoom}>
              +
            </button>
            <input type="text" value={newRoom} onChange={(e) => setNewRoom(e.target.value)} className="addRoomInput"/>
            <h3>If you are creating a new room you should create a unique name and your friends should add the same name here</h3>
          </nav>

          <ChatRoom name={currentChatRoom} user={user}/>
        </>
    )
}
export default RoomNav