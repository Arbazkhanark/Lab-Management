import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/action/userAction';
import { Link } from 'react-router-dom';

const UserNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dispatch=useDispatch();
  const user=useSelector((state)=>state.userReducers.user)
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative w-[40px] h-[40px]" onClick={toggleDropdown}>
      {/* <img
        id="avatarButton"
        type="button"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom-start"
        className="w-10 h-10 rounded-full cursor-pointer"
        src="/docs/images/people/profile-picture-5.jpg"
        alt="User dropdown"
      /> */}
      <div className=' border border-slate-900 rounded-full flex justify-center p-1'>
        <i className="fa-solid fa-user cursor-pointer text-2xl"></i>
      </div>

      {isDropdownOpen && (
        <div
          id="userDropdown"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-12 right-0"
        >
          <div className="px-4 py-3 text-sm text-gray-900">
            <div>{user.name}</div>
            <div className="font-medium truncate">{user.email}</div>
          </div>
          <ul className="py-2 text-sm text-gray-700" aria-labelledby="avatarButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Your Complaints
              </a>
            </li>
            <li>
              <Link to="/updateProfile" className="block px-4 py-2 hover:bg-gray-100">
                Update Profile
              </Link>
            </li>
            <li>
              <Link to="/changePassword" className="block px-4 py-2 hover:bg-gray-100">
                Change Password
              </Link>
            </li>
          </ul>
          <div className="py-1">
            <button
            onClick={()=>dispatch(logoutUser())}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserNav;
