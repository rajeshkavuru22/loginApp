import './index.css'

const Login = props => {
  const {clicked} = props
  return (
    <button className="button" type="button" onClick={clicked()}>
      Login
    </button>
  )
}

export default Login
