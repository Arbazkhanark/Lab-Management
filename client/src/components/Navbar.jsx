import { Link } from "react-router-dom"
import UserNav from "./UserNav"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { userAuth } from "../redux/action/userAction"

const Navbar = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(userAuth)
  },[dispatch])
  const isLogIn=useSelector((state)=>state.userReducers.user)
  console.log("User",isLogIn);
  return (
    <div className=" sticky top-0 z-50 bg-white">
      <div className="flex justify-evenly items-center shadow-lg gap-20">
        <img className="w-20" src="/images/logo.png" alt="" />
        <div className="flex justify-around items-center gap-10">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/labs"}>Laboratories</Link>
          {/* <Link to={"/complain"}>Complain</Link> */}
          <Link to={"/contact"}>Contact</Link>
        </div>
        {isLogIn ? 
        <UserNav />:
        <Link to={"/login"}>LogIn</Link>
        }
      </div>
    </div>
  )
}

export default Navbar


