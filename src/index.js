import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Header from './components/header';
import RightNav from './components/rightnav';
import Bloglist from './components/bloglist';

const Test = () => {
  return (
      <>
      <Header/>
      <Bloglist/>
      <RightNav/>
      </>
    
  )
}

ReactDOM.render(<Test/>,document.getElementById('colorlib-page'));
