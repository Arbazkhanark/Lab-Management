import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateLabs } from "../../../redux/action/adminAction";

export default function EditLab({id}) {
  const [showModal, setShowModal] = React.useState(false);

  const [labData, setLabData] = useState({
    labName: '',
    labNumber: '',
    department: '',
    equipment: [],
  });

  // State to hold temporary equipment input
  const [tempEquipment, setTempEquipment] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLabData({ ...labData, [name]: value });
  };

  // Handle equipment input changes
  const handleTempEquipmentChange = (e) => {
    setTempEquipment(e.target.value);
  };

  // Add equipment to the equipment container
  const addEquipment = () => {
    if (tempEquipment.trim() !== '') {
      setLabData({ ...labData, equipment: [...labData.equipment, tempEquipment] });
      setTempEquipment('');
    }
  };

  const dispatch=useDispatch();

  return (
    <>
      <button
        className="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Edit
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Update Lab
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
        {/* Lab Name */}
        <div className="mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="labName">
            Lab Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="labName"
            type="text"
            name="labName"
            placeholder="DBMS Lab"
            value={labData.labName}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Lab Number */}
        <div className="mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="labNumber">
            Lab Number
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="labNumber"
            type="text"
            name="labNumber"
            placeholder="f101"
            value={labData.labNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Department */}
        <div className="mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="department">
            Department
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="department"
            type="text"
            name="department"
            placeholder="CSE"
            value={labData.department}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Equipment */}
        <div className="mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="equipment">
            Equipment
          </label>
          {/* Input for adding new equipment */}
          <div className="flex items-center">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="equipment"
              type="text"
              name="equipment"
              placeholder="Add Equipment"
              value={tempEquipment}
              onChange={handleTempEquipmentChange}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={addEquipment}
            >
              Add
            </button>
          </div>
            {/* Display existing equipment */}
            {labData.equipment.length>0 ? 
                <div className='mt-3 p-2 flex border gap-3'>
                {labData.equipment.map((item, index) => (
                    <div key={index} className="border p-2 shadow-lg rounded-lg">
                    {item}
                    </div>
                ))}
            </div>:""
            }

        </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={()=>dispatch(updateLabs(id,labData))}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

