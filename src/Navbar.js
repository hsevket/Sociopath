import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faBell,
  faUserFriends,
  faHandshakeSlash,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";

const Nav = styled.nav`
  background-color: rgb(126, 137, 26);
  display: flex;
  flex-direction: row;
  position: sticky;
  top: 0;
  justify-content: space-between;
  align-items: center;
  caret-color: transparent;
  cursor: pointer;
  div {
    font-family: "Monoton", cursive;
    font-size: 1.5em;
    width: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
    h1 {
      margin-left: 15px;
    }
    i {
      margin-left: 4px;
    }
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    li {
      margin: 1em;
    }
  }
`;

const Navbar = () => (
  <Nav>
    <div>
      <FontAwesomeIcon icon={faHandshakeSlash} size="2x" />
      <h1>sociopath</h1>
      <Search />
      <i>
        <FontAwesomeIcon icon={faSearch} />
      </i>
    </div>
    <ul>
      <li>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} size="2x" />
        </Link>
      </li>
      <li>
        <Link to="/messages">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </Link>
      </li>
      <li>
        <FontAwesomeIcon icon={faBell} size="2x" />
      </li>
      <li>
        <FontAwesomeIcon icon={faUserFriends} size="2x" />
      </li>
    </ul>
  </Nav>
);

export default Navbar;
