import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Navbar from './components/navbar'
import Welcome from './page/welcome'
import Login from './page/login'
import Register from './page/register'
import Home from './page/home'

class App extends Component {
  render() {
    return (
				<div>
					<Navbar />
						<Router>
							<Container>
                  <Route exact path="/" component={Welcome} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/home" component={Home} />
							</Container>
            </Router>
				</div>
    )
  }
}

export default App
