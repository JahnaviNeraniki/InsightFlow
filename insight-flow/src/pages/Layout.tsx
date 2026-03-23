import React from 'react'
import Sidebar from 'components/Sidebar/Sidebar';
import 'pages/Layout.css';
import ActiveView from 'components/ActiveView/ActiveView';

const Layout = () => {
   const [isDark, setIsDark] = React.useState(
    document.documentElement.getAttribute("data-theme") === "dark"
  );
  const [activeView, setActiveView] = React.useState("Dashboard");


  const handleThemeChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;

    setIsDark(checked);
    document.documentElement.setAttribute(
      "data-theme",
      checked ? "dark" : "light"
    );
  };
  return (
    <div className='main-container'>
        <div className='left-container'>
            <Sidebar
              isDark={isDark}
              activeItem={activeView}
              onThemeChanged={handleThemeChanged}
              onItemChanged={setActiveView}
            />
        </div>
        <div className='right-container'>
          <ActiveView activeView={activeView}/>
        </div>
      
    </div>
  )
}

export default Layout
