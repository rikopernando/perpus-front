import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setAuthor } from '../../store/actions'
import axios from '../../axios'
import Breadcrumb from '../../components/Breadcrumb'
import SearchInput from '../../components/SearchInput'
import Table from '../../components/Table'
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
    const token = localStorage.token
    axios.get('author',{ headers : { token }}).then((resp) => {
      this.props.setAuthor(resp.data.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  handleChange = (e) => {
    const token = localStorage.token
    axios.get(`author/search?query=${e.target.value}`,{headers : { token }})
    .then((resp) => {
      this.props.setAuthor(resp.data.data)
    })
    .catch((err) => {
      console.log(err)
    })
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    const { thead, seachText } = this.state
    return(
			<div>
          <Breadcrumb active="author"/>
          <Segment>
					<Grid columns='equal'>
						<Grid.Column>
              <Link to="/" className="ui primary button" role="button"> Tambah Penulis </Link>
						</Grid.Column>
						<Grid.Column>
              <SearchInput value={seachText} handleChange={this.handleChange} />
						</Grid.Column>
					</Grid>

              <Table thead={thead} />
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

const mapDispatchToProps = (dispatch) => bindActionCreators({setAuthor}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Author)
