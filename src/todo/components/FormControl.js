import React from "react";

import InputBox from "../contaiers/InputBox";
import Filter from "../contaiers/Filter";

const Formcontrol = props => {
  return (
    <div>
      <InputBox />
      {!props.todosLength === 0 && <Filter />}
    </div>
  );
};

export default Formcontrol;
