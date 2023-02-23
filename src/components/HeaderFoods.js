import React from "react";

const HeaderFoods = ({ handelSubmit, text, setText }) => {
  return (
    <div
      style={{ margin: "20px", width: "auto", height: "50px", dispaly: "flex" }}
    >
      <form onSubmit={handelSubmit} style={{ padding: "10px", height: "30px" }}>
        <input
          type="text" placeholder="Search....."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit"> Search</button>
      </form>
    </div>
  );
};

export default HeaderFoods;
