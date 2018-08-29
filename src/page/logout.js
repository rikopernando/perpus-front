const Logout = (props) => {
  localStorage.removeItem('token')
  localStorage.removeItem('role')
  return window.location = '/'
}

export default Logout
