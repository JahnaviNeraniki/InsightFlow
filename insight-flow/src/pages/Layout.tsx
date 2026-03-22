import React from 'react'
import Sidebar from 'components/Sidebar/Sidebar';
import 'pages/Layout.css';

const Layout = () => {
   const [isDark, setIsDark] = React.useState(
    document.documentElement.getAttribute("data-theme") === "dark"
  );


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
            <Sidebar isDark={isDark} onThemeChanged={handleThemeChanged} />
        </div>
        <div className='right-container'></div>
      
    </div>
  )
}

export default Layout
