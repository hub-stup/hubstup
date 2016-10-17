import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import HomePage from '../components/home/HomePage';
import AboutPage from '../components/about/AboutPage';
import StartupsPage from '../components/startup/StartupsPage';
import ComingSoon from '../components/ComingSoon';
import ManageStartupPage from '../components/startup/ManageStartupPage';
import NotFoundPage from '../components/404';
import Blog from '../components/blog/Blog';
import Post from '../components/blog/Post';
import ManagePosts from '../components/admin/blog/ManagePosts';
import SignIn from '../components/auth/Signin';
import SignUp from '../components/auth/Signup';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="startups" component={StartupsPage} />
    <Route path="startup" component={ManageStartupPage} />
    <Route path="startup/:id" component={ManageStartupPage} />
    <Route path="about" component={AboutPage} />
    <Route path="comingsoon" component={ComingSoon} />
    <Route path="signin" component={SignIn} />
    <Route path="signup" component={SignUp} />
    <Route path="blog" component={Blog} />
    <Route path="posts/:id" component={Post} />
    <Route path="admin">
      <Route path="posts" component={ManagePosts} />
    </Route>
    <Route path="*" component={NotFoundPage}/>

  </Route>
);
