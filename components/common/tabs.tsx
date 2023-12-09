import React from "react";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {tabContent} from "../../constants";

interface TabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({label, active, onClick}) => {
  return (
    <div
      style={{paddingBottom: "0.35rem"}}
      className={`duration-300 px-4 pt-2 font-semibold
      text-sm rounded  ${active ? 'bg-blue-500 text-white' : 'bg-transparent'}`}
      onClick={onClick}>
      {label}
    </div>
  );
};

interface TabsProps {
  tabs: string[],
  setaboutVisible: Dispatch<SetStateAction<boolean>>
}

const Tabs: React.FC<TabsProps> = ({tabs, setaboutVisible}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [screenHeight, setScreenHeight] = useState<number>(0);

  const handleResize = () => {
    setScreenHeight(window.innerHeight - 180)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])


  const tabContentEle = (tabContent:string[]) => {
    return (
      <div>
        {tabContent.map((paragraph:string, index:number) => (
          <React.Fragment key={index}>
            <p>{paragraph}</p>
            {index < tabContent.length - 1 && <div className="h-3"></div>}
          </React.Fragment>
        ))}
      </div>
    )
  }

  return (
    <div className="pt-8 mt-8 section-container bg-gray-900 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex relative overflow-x-auto hideScrollbar mr-2">
          {tabs.map(tab => (
            <Tab
              key={tab}
              label={tab}
              active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>

        <svg onClick={setaboutVisible.bind(null, false)} className="icon " viewBox="0 0 1024 1024" version="1.1"
             xmlns="http://www.w3.org/2000/svg"  width="42" height="42">
          <path
            d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 0.3L512 465.6l-99.3-118.4-66.1-0.3c-4.4 0-8 3.5-8 8 0 1.9 0.7 3.7 1.9 5.2l130.1 155L340.5 670c-1.2 1.5-1.9 3.3-1.9 5.2 0 4.4 3.6 8 8 8l66.1-0.3L512 564.4l99.3 118.4 66 0.3c4.4 0 8-3.5 8-8 0-1.9-0.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"
             fill="#ffffff"></path>
          <path
            d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
             fill="#ffffff"></path>
        </svg>
      </div>

      <div className="mt-4 pb-4 borde overflow-y-auto hideScrollbar" style={{height: screenHeight + 'px'}}>
        {activeTab === 'Me' && tabContentEle(tabContent.me.split('\n'))}
        {activeTab === 'Growth' && tabContentEle(tabContent.gorwth.split('\n'))}
        {activeTab === 'Romance' && tabContentEle(tabContent.romance.split('\n'))}
        {activeTab === 'Friendship' && tabContentEle(tabContent.friendship.split('\n'))}
        {activeTab === 'Introspection' && tabContentEle(tabContent.introspection.split('\n'))}
      </div>
    </div>
  );
};

export default Tabs;
