import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import TextInput from '../components/formInput'

const RegisterForm = () => (
  <div className='login-form'>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Register
        </Header>
        <Form size='large'>
          <Segment stacked>
            <TextInput
              icon='user outline'
              iconPosition='left'
              placeholder='Nama'
              type="text"
            />
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
            <TextInput
              icon='lock'
              iconPosition='left'
              placeholder='Konfirmasi Password'
              type="password"
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

export default RegisterForm

