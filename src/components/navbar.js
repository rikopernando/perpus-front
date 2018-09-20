import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Navbar extends Component {

  render() {
    const token = localStorage.token
    return (
      <div className="ui pointing menu">
          <Link to="/" className="active item"> Perpus Js App </Link>
          <Link to="/" className="item"> Dashboard </Link>
          {
            token && (
               <Link to="/author" className="item"> Penulis </Link>
            )
          }
          {
            token && (
               <Link to="/book" className="item"> Buku </Link>
            )
          }
            {
                token ? 
                 (
                  <div className="right menu">
                    <Link to="logout" className="item"> Logout </Link>
                  </div>
                  )
                 :
                 (
                  <div className="right menu">
                    <Link to="login" className="item"> Login </Link>
                    <Link to="register" className="item"> Register </Link>
                  </div>
                 )
            }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      redux : state
    }
}

export default connect(mapStateToProps)(Navbar)
