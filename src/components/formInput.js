import React from 'react'
import { Form } from 'semantic-ui-react'

const TextInput = (props) => {
		const { icon, iconPosition, placeholder, type } = props
    return(
					 <Form.Input
              fluid
              icon={icon}
              iconPosition={iconPosition}
              placeholder={placeholder}
              type={type}
            />
      )
}

export default TextInput
