import React, { useState, useEffect } from "react";
import axios from "axios";

const FriendsList = () => {
    const [ friends, setFriends ] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get(`http://localhost:9000/api/friends`, {
            headers: {
                authorization: token
            }
        })
             .then((res) => {
                setFriends(res.data)
             })
             .catch((err) => console.log(`Houston We Have A Problem`,err))
    })

    return (
    <div>
        <h2>FriendList</h2>
        <ul>
            {friends.map((fr,idx) => {
                return <li key={idx}>{fr.name} - {fr.age} - {fr.email}</li>
            })}
        </ul>
    </div>
    )
  }

  export default FriendsList;