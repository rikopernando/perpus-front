import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Navbar from './components/navbar'
import Welcome from './page/welcome'
import Login from './page/login'
import Logout from './page/logout'
import Register from './page/register'
import Home from './page/home'

class App extends Component {
  render() {
    return (
				<div>
					<Navbar />
							<Container>
                  <Route exact path="/" component={Welcome} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/logout" component={Logout} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/home" component={Home} />
							</Container>
				</div>
    )
  }
}

export default App
