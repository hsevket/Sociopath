import { useState, useEffect } from "react";
import styled from "styled-components";


const ProfileCard = styled.div`
  height: 280px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%);
  border: 1px solid grey;
  border-radius: 5px;
  margin: 20px;
  background-color: rgb(126, 137, 26);
    div:first-child{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 22px;
        padding:14px;
        background-color: #eaece5;
        height:100%
        img{
            border: 1px solid Black;
            border-radius: 50%;
            width: 110px;
            height: 120px;

        }

    }
`;

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://dummyapi.io/data/api/user/0F8JIqi4zwvb77FGz6Wt", {
      headers: { "app-id": "60a19608e057d223a7e800ce" },
    })
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    user && (
      <ProfileCard>
        <div>
          <div>
            <img src={user.picture} alt="user" />
          </div>
          <div>
            <h1>
              Full Name : {user.firstName} {user.lastName}
            </h1>
            <p> Phone Number: {user.phone}</p>
            <p>Adress: {user.location.street} {user.location.city} {user.location.state}/{user.location.country}</p>
            <p> Email: {user.email}</p>

          </div>

        </div>
      </ProfileCard>
    )
  );
}

export default Profile;
