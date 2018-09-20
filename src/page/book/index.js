import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setBook, setSuccess } from '../../store/actions'
import axios from '../../axios'
import Breadcrumb from '../../components/Breadcrumb'
import SearchInput from '../../components/SearchInput'
import Table from '../../components/Table'
import Pagination from '../../components/Paginations'
import { Link } from 'react-router-dom'
import { Segment, Grid, Icon, Message } from 'semantic-ui-react'

class Book extends Component {
  constructor(){
    super()
    this.state = {
      searchText : '',
      thead : ['ID','Judul','Jumlah','Penulis']
    }
  }

  componentDidMount(){
     const { searchText } = this.state
     this.props.setBook(1,searchText)
  }

  handlePaginationChange = (e, { activePage }) => {
     const { searchText } = this.state
     this.props.setBook(activePage,searchText)
  }

  handleSearchChange = (e) => {
    this.props.setBook(1,e.target.value)
    this.setState({[e.target.name]: e.target.value})
  }

  handleDelete = (id) => {
    const token = localStorage.token
    const { searchText } = this.state
    axios.delete(`book/delete/${id}`, {headers: {token}}).then((resp) => {
      const success = {status : true, message : 'Buku Berhasil Dihapus'}
      this.props.setBook(1,searchText)
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
          <Breadcrumb second="Buku" third="" toSecond="/book" toThird="" active="1"/>
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
              <Link to="/book/create" className="ui primary button" role="button"> Tambah Buku </Link>
						</Grid.Column>
						<Grid.Column>
              <SearchInput value={searchText} handleChange={this.handleSearchChange} />
						</Grid.Column>
					</Grid>

          <Table 
            tbody={this.props.redux.book}
            thead={thead}
            editUrl="book/edit/"
            handleDelete={ (id) => this.handleDelete(id)}/>
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
    setBook,
    setSuccess,
    }, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Book)
