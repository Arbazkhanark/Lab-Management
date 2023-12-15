import { Link } from "react-router-dom";

const Cards = () => {
    return (
      <div className="flex mt-3 justify-evenly  flex-wrap items-center">
  
        {/* Complains Card */}
        <div className="max-w-sm p-6 mb-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            {/* Use an appropriate SVG icon for complains */}
            <path d="M18 5h..."/>
          </svg>
          <Link to="/admin/complaints">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Complaints</h5>
          </Link>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">View and manage user complaints. Take necessary actions to resolve issues.</p>
          <Link to="/admin/complaints" className="inline-flex items-center text-blue-600 hover:underline">
            See complaints
            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
            </svg>
          </Link>
        </div>
  
        {/* Users Card */}
        <div className="max-w-sm p-6 mb-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            {/* Use an appropriate SVG icon for users */}
            <path d="M18 5h..."/>
          </svg>
          <Link to="/admin/users">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Users</h5>
          </Link>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Manage registered users. View their details and perform necessary actions.</p>
          <Link to="/admin/users" className="inline-flex items-center text-blue-600 hover:underline">
            See users
            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
            </svg>
          </Link>
        </div>
  
        {/* Labs Card */}
        <div className="max-w-sm p-6 mb-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            {/* Use an appropriate SVG icon for labs */}
            <path d="M18 5h..."/>
          </svg>
          <Link to="/admin/labs">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Labs</h5>
          </Link>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Manage college labs. View lab information and take necessary actions.</p>
          <Link to="/admin/labs" className="inline-flex items-center text-blue-600 hover:underline">
            See labs
            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
            </svg>
          </Link>
        </div>

              {/* Workers Card */}
      <div className="max-w-sm p-6 mb-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <svg
          className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          {/* Use an appropriate SVG icon for workers */}
          <path d="M18 5h..." />
        </svg>
        <Link to="/admin/workers">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">LAB TECHNICIAN</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Assign and manage lab technician for resolving user complaints.</p>
        <Link to="/admin/workers" className="inline-flex items-center text-blue-600 hover:underline">
          See technician
          <svg
            className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
          </svg>
        </Link>
      </div>
  
      </div>
    );
  };
  
  export default Cards;
  