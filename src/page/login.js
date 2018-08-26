import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import TextInput from '../components/formInput'

const LoginForm = () => (
  <div className='login-form'>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Log-in ke akun anda
        </Header>
        <Form size='large'>
          <Segment stacked>
            <TextInput
              icon='user'
              iconPosition='left'
              placeholder='E-mail'
              type="email"
            />
            <TextInput
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type="password"
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

export default LoginForm

