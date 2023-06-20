import React from "react";

function NavBar() {
  return (
    <div>
      <div className="navbar bg-base-100 flex justify-between mx-1 w-screen">
        <button className="w-10">
          <img src="src/assets/iHome.svg" alt="Home" />
        </button>
        <div>
          <button className="w-10">
            <img src="src/assets/iBoost.svg" alt="Boost" />
          </button>
          <button className="w-20">
            <img src="src/assets/iLogin.svg" alt="Login" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
