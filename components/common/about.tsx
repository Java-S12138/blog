import {Dispatch, SetStateAction, useState} from "react";
import Tabs from "./tabs";


const About = ({
  setaboutVisible,
}: {
  setaboutVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const tabs = ['Me','Growth','Romance', 'Friendship','Introspection'];



  return (
    <section
      className="menu fixed top-0 left-0 w-full h-full overflow-hidden invisible pointer-events-none flex items-center justify-center"
      style={{ visibility: "hidden" }}
    >
      <div className="flex-none overflow-hidden flex items-center justify-center">
        <div className="w-screen h-screen">
          <Tabs tabs={tabs} setaboutVisible={setaboutVisible} />
        </div>
      </div>

    </section>
  )
}

export default About;
