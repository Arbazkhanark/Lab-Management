import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logIn } from "../redux/action/userAction"
import Navbar from "./Navbar"
import Footer from "./Footer"

const LogIn = () => {
  const [formData,setFormData]=useState({
    email:"",
    password:""
  })

  const dispatch=useDispatch();
  const navigate=useNavigate();

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.id]:e.target.value
    })
  }
  return (
    <>
    <Navbar/>
    <div className="mt-2 shadow-lg">
        <div className="h-full bg-gray-100 ">
  <div className="mx-auto">
    <div className="flex justify-center px-6 py-12">
        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
          <h3 className="py-4 text-2xl text-center ">Login to Your Account</h3>
          <form className="px-8 pt-6 pb-8 mb-4 bg-white  rounded">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold  dark:text-white" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6 text-center">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                type="button"
                onClick={()=>dispatch(logIn(formData,navigate))}
              >
                Login
              </button>
            </div>
            <hr className="mb-6 border-t" />
            <div className="text-center">
              <Link
                className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                to="/forgetPassword"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="text-center">
              <p>
                Don{"'"}t have an account? <Link                 className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800" to={"/signup"}> Register now!</Link>
              </p>
            </div>
          </form>
        </div>
    </div>
  </div>
</div>

    </div>
    <Footer/>
    </>
  )
}

export default LogIn