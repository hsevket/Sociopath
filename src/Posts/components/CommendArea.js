import styled from "styled-components";

const CommendArea = styled.div`
height: 100vh;
margin: 20px;
overflow: auto;
::-webkit-scrollbar {
width: 1em;
}

::-webkit-scrollbar-track {
box-shadow: #eaece5;
}

::-webkit-scrollbar-thumb {
background-color: #eaece5;
outline: 1px solid #eaece5;
}`;

export default CommendArea;