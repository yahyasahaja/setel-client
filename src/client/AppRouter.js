//MODULES
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'

//SCREENS
import Home from './screens/Home'
import Drophere from './screens/Drophere'
import Store from './screens/Store'
import NotFoundPage from './screens/NotFoundPage'
import Login from './screens/Login'
import Register from './screens/Register'

//CONFIG
import {
  TOKEN,
  END_POINT_URL,
} from './config'

//COMPONENT
export default class AppRouter extends Component {
  componentWillMount() {
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    axios.defaults.headers.common['Authorization'] = localStorage.getItem(TOKEN)
    axios.defaults.baseURL = END_POINT_URL
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/drophere" component={Drophere} />
          <Route path="/store" component={Store} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" exact component={Home} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}