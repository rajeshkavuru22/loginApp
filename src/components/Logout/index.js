import './index.css'

const Logout = props => {
  const {clicked} = props
  return (
    <button className="button" type="button" onClick={clicked()}>
      Logout
    </button>
  )
}

export default Logout
