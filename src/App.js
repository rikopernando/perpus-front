import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Navbar from './components/navbar'
import Welcome from './page/welcome'
import Login from './page/login'
import Logout from './page/logout'
import Register from './page/register'
import Home from './page/home'
import Author from './page/author'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
       localStorage.token ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

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
                  <PrivateRoute exact path="/home" component={Home} />
                  <PrivateRoute exact path="/author" component={Author} />
							</Container>
				</div>
    )
  }
}

export default App
