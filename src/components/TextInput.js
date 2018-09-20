import React from 'react'
import { Form } from 'semantic-ui-react'

const TextInput = (props) => {
		const { label ,name, placeholder, type, value, handleChange, id } = props
    return(
			 <Form.Input
          id={id}
          label={label}
					name={name}
					placeholder={placeholder}
					type={type}
					value={value}
					onChange={handleChange}
				/>
      )
}

export default TextInput
