import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class Navbar extends Component {
  constructor(){
    super()
    this.state = {
      activeItem : 'home'
    }
  }

  handleItemClick = (e, {name}) => this.setState({ activeItem : name })

  render() {
		const { activeItem } = this.state
    return (
      <Menu>
        <Menu.Item 
          name='home' 
          active={activeItem === 'home'} 
          onClick={this.handleItemClick} 
        >
          Perpus Js App
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          >
            Login 
          </Menu.Item>
          <Menu.Item
            name='register'
            active={activeItem === 'register'}
            onClick={this.handleItemClick}
          >
             Register
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Navbar 
