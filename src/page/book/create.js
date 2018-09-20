import React, { Component } from 'react'
import axios from '../../axios'
import Breadcrumb from '../../components/Breadcrumb'
import { Segment, Grid, Form, Button } from 'semantic-ui-react'
import TextInput from '../../components/TextInput'
import AlertValidate from '../../components/AlertValidate'
import Select from 'react-select'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setSuccess } from '../../store/actions'

class Author extends Component {
  constructor(){
    super()
    this.state = {
      selectedOption: null,
      title : '',
      author_id : null,
      amount : '',
      cover : '',
      options : [],
      errors : []
    }
  }

  componentDidMount() {
    this.getAuthor()
  }

  getAuthor = () => {
    const token = localStorage.token
    axios.get('author/all',{headers : {token}}).then((resp) => {
      this.setState({ options : resp.data.data })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  handleChange = (e) => {
      switch(e.target.name){
        case 'cover':
            this.setState({ cover : e.target.files[0]})
            break;
        default:
            this.setState({[e.target.name]: e.target.value})
      }
  }

  handleChangeSelect = (selectedOption) => {
    this.setState({ selectedOption, author_id : selectedOption.value })
  }

  handleSubmit = (event) => {
    const token = localStorage.token
    const { title, amount, author_id } = this.state
    const data = new FormData()
    if(document.getElementById('cover').files[0] !== undefined){
      data.append('cover',document.getElementById('cover').files[0])
    }
      data.append('title',title)
      data.append('amount',amount)
      data.append('author_id',author_id)

    axios.post('book/create', data, {headers : {token}}).then((resp) => {
      const success = { status : true, message : 'Berhasil Menambah Buku' }
      this.props.setSuccess(success)
      this.props.history.push('/book')
    })
    .catch((err) => {
       let errors = [] 
       if(err.response.data.length){
           err.response.data.errors.forEach((data) => {
              errors.push(data.msg) 
           })
           this.setState({errors : errors})
       }
    })
    event.preventDefault()
  }

  render(){
    const { title, amount, options, errors, selectedOption } = this.state
    return(
			<div>
          <Breadcrumb second="Buku" third="Tambah Buku" toSecond="/book" toThird="/book/create" active="0"/>
          <Segment>
            <Grid>
              <Grid.Column width={2}></Grid.Column>
              <Grid.Column width={8}>
                {
                  errors.length > 0 && <AlertValidate errors={errors} />
                }
                <Form onSubmit={this.handleSubmit}>
                    <label style={{ fontWeight: 700, fontSize: 13}}> Pilih Penulis </label>
                    <Select
                      name="author_id"
                      placeholder="Pilih Penulis"
                      options={options}
                      value={selectedOption}
                      onChange={this.handleChangeSelect}
                    />
                    <TextInput
                      id="title"
                      label="Title"
                      name="title"
                      placeholder='Title'
                      type="text"
                      value={title}
                      handleChange={this.handleChange}
                    />
                    <TextInput
                      id="amount"
                      label="Jumlah"
                      name="amount"
                      placeholder='Jumlah'
                      type="number"
                      value={amount}
                      handleChange={this.handleChange}
                    />
                   <Form.Input
                      id="cover"
                      label="Cover"
                      name="cover"
                      placeholder="Cover"
                      type="file"
                      onChange={this.handleChange}
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

