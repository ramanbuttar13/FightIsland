import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//Components
import Header from './components/header'
import Home from './components/home';
import Blog from './components/single-blog';
import Fashion from './components/fashion';
import About from './components/about';
import Contact from './components/contact';
import Travel from './components/travel';
import CreateBlog from './components/create-blog';
import ErrorComponent from './components/errorcomponent';

const App = () => {
  return (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/home" exact component={Home}/>
          <Route path="/home/:id" exact component={Blog}/>
          <Route path="/fashion" component={Fashion}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/travel" component={Travel}/>
          <Route path="/create-blog" component={CreateBlog}/>
          <Route component={ErrorComponent}/>
        </Switch>
      </BrowserRouter>
    
  )
}

ReactDOM.render(<App/>,document.getElementById('colorlib-page'));
