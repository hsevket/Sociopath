/* eslint-disable react/prop-types */
import styled from "styled-components";
import UserPanel from "./UserPanel"

const Grid = styled.section`
  display: grid;
  height: 105vh;
  background-color: #eaece5;
  gap: 24px;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-areas:
    "itemone  itemtwo  .   "
    "   .     itemtwo  .  ";
`;

const GridArea = ({children}) => 
 ( 
        <Grid>
          <UserPanel gridarea="itemone"/>
          <div gridarea="itemtwo">{children} </div>
        </Grid>);



export default GridArea;