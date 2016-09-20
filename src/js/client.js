  import React from "react";
  import ReactDOM from "react-dom";
  import {Router,Route,IndexRoute,hashHistory} from "react-router";

  import Layout from "./components/Layout";
  import Contacts from "./components/Contacts";
  const app = document.getElementById('app');
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path ="/" component={Layout}>
          <IndexRoute component={Contacts}></IndexRoute>
					<Route path="archives" component={Archives}></Route>

      </Route>
    </Router>,
  app);
