import React from 'react'
import { Link } from 'react-router-dom'
import { Segment } from 'semantic-ui-react'


const Breadcrumb = (props) => {
  const { second, third, toSecond, toThird, active } = props
  return(
			<Segment>
          <div className="ui breadcrumb">
            <Link to="/" className="section"> Dashboard </Link>
              <i aria-hidden="true" className="right angle icon divider"></i>
            {
              active === '1' ? (
                 <Link to={toSecond} className="active section"> {second} </Link>
              ) : (
                 <Link to={toSecond} className="section"> {second} </Link>
              )
            }
              <i aria-hidden="true" className="right angle icon divider"></i>
            {
              third && (
                <Link to={toThird} className="active section"> {third} </Link>
              )
            }
          </div>
			</Segment>
    )
}

export default Breadcrumb
