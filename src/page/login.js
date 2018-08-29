import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'
import TextInput from '../components/TextInputt'
import AlertValidate from '../components/AlertValidate'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setToken } from '../store/actions'
import axios from '../axios'

class LoginForm extends Component {
    
    constructor() {
      super()
      this.state = {
        email : '',
        password : '',
        errors : []
      }
    }

    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }

    validate = () => {
      const { email, password } = this.state
      let errors = []
      !email && errors.push('Username is required!')
      !password && errors.push('Password is required!')
      this.setState({ errors : errors }) 
      //this.state.errors.length > 0 ? true : false
      if(this.state.errors.length > 0)
          return false
      else
          return true
    }

    handleSubmit = (event) => {
      const { email, password } = this.state
        axios.post('users/login',{ email, password })
         .then((resp) => {
          localStorage.setItem("token", resp.data.data.token)
          localStorage.setItem("role", resp.data.data.role)
          this.props.setToken(resp.data.data.token)
          this.props.history.push('/home')
         })
         .catch((err) => {
          let errors = [err.response.data.message]
          this.setState({ errors : errors }) 
          console.log(err)
         })
      event.preventDefault()
    }

    render() {
        const { email, password, errors } = this.state
        const token = localStorage.token
        if(token){
          return <Redirect to="/" /> 
        }
        return(
          <div className='login-form'>
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                  Log-in ke akun anda
                </Header>
                {
                  errors.length > 0 && <AlertValidate errors={errors} />
                }
                {
                  this.props.redux.register_success && (
                          <Segment inverted color='green'>
                            Registrasi berhasil!, silakan login!
                          </Segment>)
                }
                <Form size='large' onSubmit={this.handleSubmit}>
                  <Segment stacked>
                    <TextInput
                      name="email"
                      icon='user'
                      iconPosition='left'
                      placeholder='E-mail'
                      type="email"
                      value={email}
                      handleChange={this.handleChange}
                    />
                    <TextInput
                      name="password"
                      icon='lock'
                      iconPosition='left'
                      placeholder='Password'
                      type="password"
                      value={password}
                      handleChange={this.handleChange}
                    />
                    <Button color='teal' fluid size='large'>
                      Login
                    </Button>
                  </Segment>
                </Form>
                <Message>
                  Belum punya akun? <Link to='/register'>Register</Link>
                </Message>
              </Grid.Column>
            </Grid>
          </div>
          )
    }
}

const mapStateToProps = (state) => {
    return {
      redux : state
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({setToken}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)
