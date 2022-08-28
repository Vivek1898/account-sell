import React, { useState } from "react";
 import PropagateLoader from "react-spinners/PacmanLoader";

function Loader() {
  let [loading] = useState(true);

  return (
    <div>
      <div className="sweet-loading text-center">
     <PropagateLoader />
      </div>
    </div>
  );
}

export default Loader;
