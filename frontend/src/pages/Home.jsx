import React, { useState } from "react";
import SignUp from "./SignUp";
import Sidepanel from "../components/Sidepanel";
import CoursePanel from "../components/CoursePanel";

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div>{!isLogin && <SignUp />}</div>

      <div>
        {isLogin && (
          <>
            <div className="flex items-center">
              <div className="w-2/12 border">
                <Sidepanel />
              </div>
              <div className="w-10/12 border">
                <CoursePanel />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
