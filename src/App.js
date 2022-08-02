import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Admin from './Admin/index'
import Home from './Components/Home'
import Signin from './Components/Signin'
import AddBlog from './Admin/AddBlog/AddBlog'
import EditBlog from './Admin/AddBlog/EditBlog'
import BlogPreview from './Admin/AddBlog/index'
import { UserProvider } from './Firebase/UserContext'
import Navbar from './Components/Navbar'
import Article from './Components/Article'
import About from './Components/About';

export default function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Switch>
          <Route exact path="/admin/:slug" component={BlogPreview} />
          <Route exact path="/admin/editblog/:slug" component={EditBlog} />
          <Route exact path="/addblog" component={AddBlog} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/:slug" component={Article} />
          <Route exact path="/" component={Home} />
        </Switch>
      </UserProvider>
    </Router>
  )
}
