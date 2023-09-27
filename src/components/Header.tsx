import { Link } from "react-router-dom"
interface IHeader{
  setIsRoute: React.Dispatch<React.SetStateAction<boolean>>
}
const Header = ({setIsRoute}:IHeader) => {
  const handleClick=()=>{
    setIsRoute(false)
}
  return (
    <div className="header">
      <Link style={{textDecoration:'none'}} to='/'>
        <h1 onClick={handleClick} className="title">CAR'S</h1>
      </Link>
    </div>
  )
}

export default Header