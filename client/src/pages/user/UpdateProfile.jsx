import { useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/action/userAction';

const UpdateProfile = () => {
    const user=useSelector((state)=>state.userReducers.user)
    console.log("Profile",user)
  const [profileData, setProfileData] = useState({
    name: user ? user.name :"Jon Doe",
    contact:user ? user.contact :"+91 1234567890",
    department:user ? user.department :"IT",
    gender:user ? user.gender :"Male",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const dispatch=useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(profileData))
    // Add logic to handle form submission with profileData
    console.log('Profile Data:', profileData);
  };

  console.log(profileData)
  return (
    <div>
      <Navbar />
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={profileData.name}
                  onChange={handleChange}
                  placeholder="Type your full name"
                  required=""
                />
              </div>
              <div className="w-full">
                <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Contact
                </label>
                <input
                  type="text"
                  name="contact"
                  id="contact"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={profileData.contact}
                  onChange={handleChange}
                  placeholder="Type your contact information"
                  required=""
                />
              </div>

              <div>
                <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Department
                </label>
                <select
                  id="department"
                  name="department"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={profileData.department}
                  onChange={handleChange}
                >
                  <option value="CSE">CSE</option>
                  <option value="IT">IT</option>
                  <option value="ECE">ECE</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Electrical">Electrical</option>
                  <option value="BCA">BCA</option>
                  <option value="BBA">BBA</option>
                  <option value="MCA">MCA</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="MBA">MBA</option>
                </select>
              </div>

              <div>
                <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={profileData.gender}
                  onChange={handleChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="submit"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Update Profile
              </button>
              <button
                type="button"
                className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                <svg className="w-5 h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Delete
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UpdateProfile;
