import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "../Loader/Loader";


const Userpanel = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  box-shadow: 3px 3px gray 0.3;
  width: 300px;
  height: 550px;
  margin: 22px;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 80px;
  justify-content: flex-start;
  caret-color: transparent;
  background-color: gray;

  div:first-child {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
    background-color: rgb(126, 137, 26);
    height: 20%;

    img {
      border: 1px solid black;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      margin-right: 5px;
      margin-top: 25px;
    }

    span {
      align-self: flex-end !important;
    }
  }
  div {
    height: 60%;
    ul {
      display: flex;
      flex-direction: column;
      li {
        border: 3px solid black;
        border-radius: 6px;
        margin: 10px;
        padding: 10px;
        cursor: pointer;
        font-weight: bold;
        background-color: lightgray;
      }
      li:hover {
        background-color: rgb(126, 137, 26);
        color: white;
      }
    }
  }
`;

function UserPanel() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://dummyapi.io/data/api/user/0F8JIqi4zwvb77FGz6Wt", {
      headers: { "app-id": "60a19608e057d223a7e800ce" },
    })
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
      <Userpanel>
      {user ? 
        <>
      <div>
        <div>
            <img src={user.picture} alt="user" width="40px" height="40px" />
        </div>
          <div>
            <h1>
              {user.firstName} {user.lastName}
            </h1>
          </div>
        </div>
        <div>
       
          <ul>
            <li><Link to="/profiles"> Profiles</Link>  </li>
            <li><Link to="/messages">Messages</Link> </li>
            <li>Friends</li>
            <li>Activities</li>
            <li>Groups</li>
            <li>Settings</li>
          </ul>
         
        </div> </> : <Loader/>}
        
      </Userpanel>
    )
  
}

export default UserPanel;
