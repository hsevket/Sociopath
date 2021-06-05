import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComment,
  
} from "@fortawesome/free-solid-svg-icons";


const Postcard = styled.div`
  height: 680px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%);
  border: 1px solid grey;
  border-radius: 5px;
  margin: 20px;
  background-color: rgb(126, 137, 26);
  caret-color: transparent;
  
  div:first-child {
    display: flex;
    justify-content: center;
    height: 75%;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 8px;
    background-color: gray;
    img {
      width: 100%;
      height: 100%;
    }
  }
  div:last-child {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
    margin-left: 8px;
    padding: 5px;
    span {
      margin: 6px;
      padding: 4px;
    }
    img {
      border: 1px solid black;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      margin-right: 5px;
      margin-top: 25px;
    }
  }
`;

const PostCard= ({...data})=> 
    
     (<Postcard gridarea="itemtwo">
    <div>
      <img src={data.Data.image} alt="" />
    </div>
    <div>
      <span>{data.Data.text}</span>
      <img src={data.Data.owner.picture} alt={data.Data.owner.firstName} />
      <span>{data.Data.owner.firstName}</span>
      <span>
        <FontAwesomeIcon icon={faThumbsUp} size="2x" />
      </span>

      <h2>{data.Data.likes}</h2>

      <span>
        <FontAwesomeIcon icon={faComment} size="2x" />
      </span>
    </div>
  </Postcard>);


export default PostCard;

