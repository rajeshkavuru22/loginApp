import {Component} from 'react'

import './index.css'

import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {text: '', login: false}

  click = () => {
    const {login} = this.state
    this.setState(() =>
      login === true ? {text: 'Welcome User'} : {text: 'Please Login'},
    )
    this.setState(() => ({login: !login}))
  }

  render() {
    const {text, login} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <Message message={text} />
          {login ? (
            <Logout clicked={this.click} />
          ) : (
            <Login clicked={this.click} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
