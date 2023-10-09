import React from "react";
//import Login from "./login/Login";
import SignUp from "./login/SignUp";
//import Theme from "./Theme";

function LandingPage() {
    
  return (
    <div className="p-2 bg-primary-light dark:bg-primary-dark h-screen items-center">
        {/*<Theme />*/}
      <div className="flex justify-center">
        <SignUp />
      </div>
      

    </div>
  );
}

export default LandingPage;
