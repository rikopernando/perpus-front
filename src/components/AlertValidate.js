import React from 'react'
import { List, Segment } from 'semantic-ui-react'

const AlertValidate = (props) => {
    const { errors } = props
      return(
          <Segment inverted color='red'>
              <List bulleted>
                {
                  errors.map((errors,index) => {
                    return <List.Item key={index}>{errors}</List.Item> 
                  })
                }
              </List>
          </Segment>
          )
}

export default AlertValidate 
