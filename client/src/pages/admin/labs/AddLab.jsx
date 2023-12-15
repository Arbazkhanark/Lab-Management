import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLab } from '../../../redux/action/adminAction';

const AddLab = () => {
  const cloudinaryRef = useRef();
  const [imageLinks, setImageLinks] = useState([]);
  const [labData, setLabData] = useState({
    labName: '',
    images: [],
    labNumber: '',
    department: '',
    equipment: [],
  });

  useEffect(() => {
    // Function to dynamically load Cloudinary script
    const loadCloudinaryScript = () => {
      const script = document.createElement('script');
      script.src = 'https://widget.cloudinary.com/v2.0/global/all.js';
      script.async = true;
      script.onload = () => {
        cloudinaryRef.current = window.cloudinary;
      };
      document.head.appendChild(script);
    };

    // If Cloudinary is not already loaded, load the script
    if (!window.cloudinary) {
      loadCloudinaryScript();
    } else {
      cloudinaryRef.current = window.cloudinary;
    }
  }, []);

  const uploadImage = (e) => {
    e.preventDefault();
    if (!cloudinaryRef.current) {
      console.log('Cloudinary not Initialized');
      return;
    }

    const widgetRef = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'dgiw5xfpq',
        uploadPreset: 'gwjd8x4l',
      },
      function (error, result) {
        if (result.event === 'success') {
          setImageLinks((prevLinks) => [...prevLinks, result.info.secure_url]);
          setLabData((prevLab) => ({
            ...prevLab,
            images: [...prevLab.images, result.info.secure_url],
          }));
        }
      }
    );

    widgetRef.open();
  };


  // State to hold temporary equipment input
  const [tempEquipment, setTempEquipment] = useState('');


const handleInputChange = (e) => {
    console.log("Event:", e);
    const { name, value } = e.target;
    console.log("Name:", name);
    console.log("Value:", value);
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
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic to upload lab data here
    console.log('Lab Data:', labData);
    dispatch(addLab(labData))
    // Reset the form or navigate to the next step if needed
    setLabData({
      labName: '',
      labNumber: '',
      department: '',
      equipment: [],
    });
  };

  console.log("Data",labData)
  return (
    <div className="mt-10">
      <form className="ml-auto mr-auto w-full max-w-lg" onSubmit={handleSubmit}>
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
              className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={addEquipment}
            >
              Add
            </button>
          </div>
            {/* Display existing equipment */}
            {labData.equipment && labData.equipment.length > 0 ? (
  <div className='mt-3 p-2 flex border gap-3'>
    {labData.equipment.map((item, index) => (
      <div key={index} className="border p-2 shadow-lg rounded-lg">
        {item}
      </div>
    ))}
  </div>
) : null}


<div>
<button className='mt-5 bg-slate-700 p-2 text-white rounded' onClick={uploadImage}> <i className="fa-regular fa-image"></i> Upload Images</button>
<p className=' font-light text-slate-500'>Note: Upload Lab Images</p>
</div>

        </div>

        {/* Submit Button */}
        <div className="mb-6">
          <button
            className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
          <i className="fa-solid fa-upload mr-2"></i>
            Upload Lab
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLab;
