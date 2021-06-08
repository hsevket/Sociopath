import Navbar from "../Navbar/Navbar";
import GridArea from "../GridArea/Grid";

const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <GridArea>{children}</GridArea>
  </>
);

export default MainLayout;
