import React from 'react'
import { Form } from 'semantic-ui-react'

const TextInput = (props) => {
		const { value, handleChange } = props
    return(
					 <Form.Input
              fluid
              name='searchText'
              icon='search'
              iconPosition='left'
              placeholder='Search ...'
              type='text'
              value={value}
              onChange={handleChange}
            />
      )
}

export default TextInput
