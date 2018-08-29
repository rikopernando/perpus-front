import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'
import TextInput from '../components/TextInputt'
import { connect } from 'react-redux'
import AlertValidate from '../components/AlertValidate'
import axios from '../axios'

class RegisterForm extends Component {

    constructor() {
      super()
      this.state = {
        name : '',
        email : '',
        password : '',
        confirm_password : '',
        errors : []
      }
    }

    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (event) => {
      const { email, name, password, confirm_password } = this.state
        axios.post('users/register',{ email, name, password, confirm_password })
         .then((resp) => {
          this.props.history.push('/login')
         })
         .catch((err) => {
          let errors = [err.response.data.message]
          this.setState({ errors : errors }) 
          console.log(err)
         })
      event.preventDefault()
    }

    render() {
        const { name, email, password, confirm_password, errors } = this.state
        const token = localStorage.token
        if(token){
          return <Redirect to="/" /> 
        }
        return (
          <div className='login-form'>
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                  Register
                </Header>
                {
                  errors.length > 0 && <AlertValidate errors={errors} />
                }
                <Form size='large' onSubmit={this.handleSubmit}>
                  <Segment stacked>
                    <TextInput
                      name="name"
                      icon='user outline'
                      iconPosition='left'
                      placeholder='Nama'
                      type="text"
                      value={name}
                      handleChange={this.handleChange}
                    />
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
                    <TextInput
                      name="confirm_password"
                      icon='lock'
                      iconPosition='left'
                      placeholder='Konfirmasi Password'
                      type="password"
                      value={confirm_password}
                      handleChange={this.handleChange}
                    />
                    <Button color='teal' fluid size='large'>
                      Register 
                    </Button>
                  </Segment>
                </Form>
                <Message>
                  Sudah punya akun? <Link to='/login'>Login</Link>
                </Message>
              </Grid.Column>
            </Grid>
          </div>
          )
    }
}

const mapStateToProps = (state) => {
    return {
      token : state.token
    }
}
export default connect(mapStateToProps)(RegisterForm)

