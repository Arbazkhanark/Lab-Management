import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWorkers } from '../../../redux/action/adminAction';

const AddWorker = () => {
  const [workerData, setWorkerData] = useState({
    name: '',
    email: '',
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkerData({ ...workerData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the action to add a worker
    dispatch(addWorkers(workerData));
    // Reset the form
    setWorkerData({
      name: '',
      email: '',
    });
  };

  return (
    <div className="mt-10">
      <form className="ml-auto mr-auto w-full max-w-lg" onSubmit={handleSubmit}>
        {/* Worker Name */}
        <div className="mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
          Lab Technician Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={workerData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Worker Email */}
        <div className="mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
          Lab Technician Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            name="email"
            placeholder="john@example.com"
            value={workerData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="mb-6">
          <button
            className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Lab Technician
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddWorker;
