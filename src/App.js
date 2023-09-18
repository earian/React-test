import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import CreateBlog from './component/CreateBlog';
import BlogsDetail from './component/BlogsDetail';


function App() {
  return (
    
    <Router>
    <Header />
    <Switch>
      <Route exact path='/'>
        <Body />
      </Route>
      <Route path='/create'>
        <CreateBlog />
      </Route>
      <Route path='/blogs/:id'>
        <BlogsDetail />
      </Route>
    </Switch>
    
    </Router>
    
  );
}

export default App;
