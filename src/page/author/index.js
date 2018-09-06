import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setAuthor, setSuccess } from '../../store/actions'
import axios from '../../axios'
import Breadcrumb from '../../components/Breadcrumb'
import SearchInput from '../../components/SearchInput'
import Table from '../../components/Table'
import Pagination from '../../components/Paginations'
import { Link } from 'react-router-dom'
import { Segment, Grid, Icon, Message } from 'semantic-ui-react'

class Author extends Component {
  constructor(){
    super()
    this.state = {
      searchText : '',
      thead : ['ID','Nama']
    }
  }

  componentDidMount(){
     const { searchText } = this.state
     this.props.setAuthor(1,searchText)
  }

  handlePaginationChange = (e, { activePage }) => {
     const { searchText } = this.state
     this.props.setAuthor(activePage,searchText)
  }

  handleSearchChange = (e) => {
    this.props.setAuthor(1,e.target.value)
    this.setState({[e.target.name]: e.target.value})
  }

  handleDelete = (data) => {
    const token = localStorage.token
    const { searchText } = this.state
    axios.delete(`author/delete/${data.id}`, {headers: {token}}).then((resp) => {
      const success = {status : true, message : data.name+' Berhasil Dihapus'}
      this.props.setAuthor(1,searchText)
      this.props.setSuccess(success)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render(){
    const { thead, searchText } = this.state
    return(
			<div>
          <Breadcrumb active="author"/>
          <Segment>
          {
            this.props.redux.message_success.status && (
              <Message info onDismiss={() => this.props.setSuccess({status : false, message : ''})}>
                <Icon name='check' />
                 { this.props.redux.message_success.message }
              </Message>
              )
          }
					<Grid columns='equal'>
						<Grid.Column>
              <Link to="/author/create" className="ui primary button" role="button"> Tambah Penulis </Link>
						</Grid.Column>
						<Grid.Column>
              <SearchInput value={searchText} handleChange={this.handleSearchChange} />
						</Grid.Column>
					</Grid>

          <Table 
            thead={thead}
            editUrl="author/edit/"
            handleDelete={ (data) => this.handleDelete(data)}/>
          {
             Object.keys(this.props.redux.pagination).length && <Pagination handlePaginationChange={this.handlePaginationChange} />
          }
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

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setAuthor,
    setSuccess,
    }, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Author)
