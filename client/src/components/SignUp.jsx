import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userRegisterationAction } from '../redux/action/userAction';
import Loader from './loader/Loader';
import Navbar from './Navbar';
import Footer from './Footer';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    urn:"",
    contact: '',
    gender: '',
    department: '',
  });

  const isLoading=useSelector((state)=>state.userReducers.isLoading);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const navigate=useNavigate()
  const dispatch=useDispatch();
  const handleSubmit = () => {
    console.log(isLoading);
    localStorage.setItem("email",formData.email)
    dispatch(userRegisterationAction(formData,navigate))
    console.log(formData);
  };

  return (
    <>
    <Navbar/>
    <div className="mt-2 shadow-lg">
      <div className="h-full bg-gray-100">
        <div className="mx-auto">
          <div className="flex justify-center px-6 py-12">
            {/* <div className="w-full xl:w-3/4 lg:w-11/12 flex"> */}
              {/* <div
                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                style={{ backgroundImage: 'url("https://source.unsplash.com/Mv9hjnEUHR4/600x800")' }}
              ></div> */}
              <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="py-4 text-2xl text-center text-gray-800">Create an Account!</h3>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                      College Email
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="urn">
                      URN
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="urn"
                      type="number"
                      name="urn"
                      placeholder="University Roll Number"
                      value={formData.urn}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                        Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="******************"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <p className="text-xs italic text-red-500">Please choose a password.</p>
                    </div>
                    <div className="md:ml-2">
                      <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
                        Confirm Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="c_password"
                        type="password"
                        name="confirmPassword"
                        placeholder="******************"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="contact">
                      Contact
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="contact"
                      type="text"
                      name="contact"
                      placeholder="Contact"
                      value={formData.contact}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700">Gender</label>
                    <div className="flex">
                      <label className="inline-flex items-center mr-3">
                        <input
                          type="radio"
                          className="form-radio text-blue-500"
                          name="gender"
                          value="male"
                          checked={formData.gender === 'male'}
                          onChange={handleChange}
                        />
                        <span className="ml-2">Male</span>
                      </label>
                      <label className="inline-flex items-center mr-3">
                        <input
                          type="radio"
                          className="form-radio text-pink-500"
                          name="gender"
                          value="female"
                          checked={formData.gender === 'female'}
                          onChange={handleChange}
                        />
                        <span className="ml-2">Female</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio text-purple-500"
                          name="gender"
                          value="others"
                          checked={formData.gender === 'others'}
                          onChange={handleChange}
                        />
                        <span className="ml-2">Others</span>
                      </label>
                    </div>
                  </div>
                  <br />
                  <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="department">
          Department
        </label>
        <select
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="department"
          name="department"
          onChange={handleChange}
          value={formData.department}
        >
          <option value="">Select Department</option>
          <option value="CSE">Computer Science Engineering</option>
          <option value="IT">Information Technology</option>
          <option value="CA">Computer Application</option>
          <option value="ME">Mechanical</option>
          <option value="CE">Civil</option>
          <option value="MBA">MBA</option>
          <option value="Teachers">Teacher</option>
        </select>
      </div>
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Register Account
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <p>
                      Already have an account? <Link className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" to="/login">Login!</Link>
                    </p>
                  </div>
                </form>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default SignUp;
