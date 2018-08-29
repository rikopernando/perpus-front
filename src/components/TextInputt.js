import React from 'react'
import { Form } from 'semantic-ui-react'

const TextInput = (props) => {
		const { name, icon, iconPosition, placeholder, type, value, handleChange } = props
    return(
					 <Form.Input
              fluid
              required
              name={name}
              icon={icon}
              iconPosition={iconPosition}
              placeholder={placeholder}
              type={type}
              value={value}
              onChange={handleChange}
            />
      )
}

export default TextInput
