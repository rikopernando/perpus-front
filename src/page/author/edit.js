import React, { Component } from 'react'
import axios from '../../axios'
import Breadcrumb from '../../components/Breadcrumb'
import { Segment, Grid, Form, Button } from 'semantic-ui-react'
import TextInput from '../../components/TextInputt'
import AlertValidate from '../../components/AlertValidate'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setSuccess } from '../../store/actions'

class Author extends Component {
  constructor(){
    super()
    this.state = {
      name : '',
      errors : []
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    const token = localStorage.token
    axios.get(`author/find/${id}`, {headers : {token}}).then((resp) => {
      this.setState({ name : resp.data.data.name })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (event) => {
    const token = localStorage.token
    const id = this.props.match.params.id
    const { name } = this.state
    axios.put(`author/update/${id}`,{name},{headers : {token}}).then((resp) => {
      const success = { status : true, message : 'Berhasil Edit Penulis' }
      this.props.setSuccess(success)
      this.props.history.push('/author')
    })
    .catch((err) => {
       let errors = [] 
       err.response.data.errors.forEach((data) => {
          errors.push(data.msg) 
       })
       this.setState({errors : errors})
    })
    event.preventDefault()
  }

  render(){
    const { name, errors } = this.state
    const toThird = "/author/edit/"+this.props.match.params.id
    return(
			<div>
          <Breadcrumb second="Penulis" third="Edit Penulis" toSecond="/author" toThird={toThird} active="0"/>
          <Segment>
            <Grid>
              <Grid.Column width={2}></Grid.Column>
              <Grid.Column width={8}>
                {
                  errors.length > 0 && <AlertValidate errors={errors} />
                }
                <Form size='large' onSubmit={this.handleSubmit}>
                    <TextInput
                      name="name"
                      icon='user'
                      iconPosition='left'
                      placeholder='Nama'
                      type="text"
                      value={name}
                      handleChange={this.handleChange}
                    />
                    <Button content='Submit' primary/>
                </Form>
              </Grid.Column>
             </Grid>
          </Segment>
      </div>
      )
  }
}

const mapStateToProps = (state) => {
    return {
      redux : state
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({setSuccess}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Author)

