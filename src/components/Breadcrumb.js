import React from 'react'
import { Link } from 'react-router-dom'
import { Segment } from 'semantic-ui-react'


const Breadcrumb = (props) => {
  const { active } = props
  return(
			<Segment>
          <div className="ui breadcrumb">
           {
              active === "dashboard" ? (
                  <Link to="/" className="active section"> Dashboard </Link>
              )
              : (
                  <Link to="/" className="section"> Dashboard </Link>
              )
           }
              <i aria-hidden="true" className="right angle icon divider"></i>
           {
              active === "author" ? (
                  <Link to="/author" className="active section"> Penulis </Link>
              )
              : (
                  <Link to="/author" className="section"> Penulis </Link>
              )
           }
          </div>
			</Segment>
    )
}

export default Breadcrumb
