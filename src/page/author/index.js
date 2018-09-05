import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setAuthor, setPagination, setLoading } from '../../store/actions'
import axios from '../../axios'
import Breadcrumb from '../../components/Breadcrumb'
import SearchInput from '../../components/SearchInput'
import Table from '../../components/Table'
import Pagination from '../../components/Paginations'
import { Link } from 'react-router-dom'
import { Segment, Grid } from 'semantic-ui-react'

class Author extends Component {
  constructor(){
    super()
    this.state = {
      searchText : '',
      thead : ['ID','Nama']
    }
  }

  componentDidMount(){
     this.pageChange(1)
  }

  pageChange = (page) => {
    const token = localStorage.token
    axios.get('author?page='+page,{ headers : { token }}).then((resp) => {
      this.props.setAuthor(resp.data.data)
      this.props.setPagination(resp.data.paginate)
      this.props.setLoading(false)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  pageSearchChange = (query,page) => {
    const token = localStorage.token
    axios.get(`author/search?query=${query}&page=${page}`,{headers : { token }})
    .then((resp) => {
      this.props.setAuthor(resp.data.data)
      this.props.setPagination(resp.data.paginate)
      this.props.setLoading(false)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  handlePaginationChange = (e, { activePage }) => {
     const { searchText } = this.state
     searchText ? this.pageSearchChange(searchText,activePage) : this.pageChange(activePage)
  }

  handleSearchChange = (e) => {
    this.pageSearchChange(e.target.value,1)
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    const { thead, searchText } = this.state
    return(
			<div>
          <Breadcrumb active="author"/>
          <Segment>
					<Grid columns='equal'>
						<Grid.Column>
              <Link to="/" className="ui primary button" role="button"> Tambah Penulis </Link>
						</Grid.Column>
						<Grid.Column>
              <SearchInput value={searchText} handleChange={this.handleSearchChange} />
						</Grid.Column>
					</Grid>

          <Table thead={thead} />
          {
             !this.props.redux.loading && <Pagination handlePaginationChange={this.handlePaginationChange} />
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

const mapDispatchToProps = (dispatch) => bindActionCreators({setAuthor,setPagination,setLoading}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Author)
