import { Link } from "react-router-dom"
import { IBrand } from "./Brands"
const Header = ({setIsRoute}:IBrand) => {
  const handleClick=()=>{
    setIsRoute(false)
}
  return (
    <div className="header">
      <Link to='/'>
        <h1 onClick={handleClick} className="title">CAR'S</h1>
      </Link>
    </div>
  )
}

export default Header