import React from "react";

function MyBtn(props) {
  const { val } = props;
  return (
    <button className="text-lg border-white border-solid border-2 p-2 w-44 mt-4">
      {val}
    </button>
  );
}

export default MyBtn;
