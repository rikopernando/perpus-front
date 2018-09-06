import React from 'react'
import { List, Message } from 'semantic-ui-react'

const AlertValidate = (props) => {
    const { errors } = props
      return(
          <Message negative>
              <Message.Header>Maaf, sepertinya ada kesalahan dalam pengisian data, silakan dicek lagi formnya!</Message.Header>
              <List bulleted>
                {
                  errors.map((errors,index) => {
                    return <List.Item key={index}>{errors}</List.Item> 
                  })
                }
              </List>
          </Message>
          )
}

export default AlertValidate 
