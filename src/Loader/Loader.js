import { css } from "@emotion/react";
import { DotLoader } from "react-spinners";


const override = css`
  display: block;
  margin: 0 auto;
  align-self: center;
  justify-self: center;
`;

function Loader() {
  return (
    <div>
      <DotLoader css={override} size={150} />
    </div>
  );
}

export default Loader;