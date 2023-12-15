// Worker.js (React Component)
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteWorker, getWorkers } from '../../../redux/action/adminAction';
import AdminNav from '../AdminNav';
import AdminFooter from '../AdminFooter';
import AddWorker from './AddWorker';
import EditWorker from './EditWorker';
import EmptyWorker from './EmptyWorker';

const Worker = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkers());
  }, [dispatch]);

  const workers = useSelector((state) => state.adminReducers.workers);

//   const handleDeleteWorker = (workerId) => {
//     // Dispatch action to delete worker by ID
//     dispatch(delete(workerId));
//   };

console.log(workers)
  return (
    <div>
      <AdminNav />
      <AddWorker />
      {/* <h1>Worker List</h1> */}
      <div className="mt-3 mb-5 relative overflow-x-auto shadow-md sm:rounded-lg">
        {workers.length>0 ?
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
              Lab Technician Name
              </th>
              <th scope="col" className="px-6 py-3">
              Lab Technician Email
              </th>
              <th scope="col" className="px-6 py-3">
                Complaints
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {workers && workers.length > 0 ? (
              workers.map((worker) => (
                <tr key={worker._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {worker.name}
                  </td>
                  <td className="px-6 py-4">{worker.email}</td>
                  <td className="px-6 py-4">
                    <select>
                      {worker.complaints.map((complaintId, index) => (
                        <option key={index}>{complaintId}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <EditWorker id={worker._id} />
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => dispatch(deleteWorker(worker._id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No Lab Technician Yet</td>
              </tr>
            )}
          </tbody>
        </table>:<EmptyWorker />
        }
      </div>
      <AdminFooter />
    </div>
  );
};

export default Worker;
