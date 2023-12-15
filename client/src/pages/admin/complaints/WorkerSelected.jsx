import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { assignedComplaint } from '../../../redux/action/adminAction';

const WorkerSelected = ({id}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dispatch=useDispatch();
  const handleWorkerSelect = (email) => {
    setIsDropdownOpen(false);
    console.log(email,id)
    dispatch(assignedComplaint(email,id))
    localStorage.setItem("assignedEmail",email)
  };

  const workers = useSelector((state) => state.adminReducers.workers);
  // console.log("Status", workers);

  return (
    <div className="relative">
      <button
        id="dropdownDividerButton"
        data-dropdown-toggle="dropdownDivider"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={toggleDropdown}
      >
        Select Employee
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          id="dropdownDivider"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          {workers.map((work) => (
            <button
              key={work.id}
              onClick={() => handleWorkerSelect(work.email)}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {work.email}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkerSelected;
