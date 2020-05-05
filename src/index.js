import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Header from './components/header';
import RightNav from './components/rightnav';
import Bloglist from './components/bloglist';

const Test = () => {
  return (
    <div className="outer-container">
      <Header/>
      <Bloglist/>
    </div>
    
  )
}

ReactDOM.render(<Test/>,document.getElementById('root'));
