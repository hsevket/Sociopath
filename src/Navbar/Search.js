import styled from "styled-components";

const Search = styled.input.attrs({ type: "text" })`
  background-color: #eaece5;
  width: 250px;
  height: 25px;
  border: 1px solid gray;
  border-radius: 4px;
  margin-left: 7px;
  font-family: "Nova Mono", monospace;
  font-weight: bolder;
  font-size: 16px;
  caret-color: white;
`;

export default Search;