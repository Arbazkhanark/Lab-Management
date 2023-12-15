// import { useEffect, useRef, useState } from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { useDispatch, useSelector } from "react-redux";
// import { getSingleLab, registerComplain } from "../redux/action/userAction";

// export default function ComplaintForm() {
//   const cloudinaryRef = useRef();
//   const [imageLinks, setImageLinks] = useState([]);
//   const [complain, setComplain] = useState({
//     labName: "",
//     issueType: "",
//     equipment: "",
//     softwareIssueDetails:"",
//     hardwareIssueDetails: "", // New field for hardware issue details
//     images: [],
//     details: "",
//   });

//   useEffect(() => {
//     // Function to dynamically load Cloudinary script
//     const loadCloudinaryScript = () => {
//       const script = document.createElement("script");
//       script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
//       script.async = true;
//       script.onload = () => {
//         cloudinaryRef.current = window.cloudinary;
//       };
//       document.head.appendChild(script);
//     };

//     // If Cloudinary is not already loaded, load the script
//     if (!window.cloudinary) {
//       loadCloudinaryScript();
//     } else {
//       cloudinaryRef.current = window.cloudinary;
//     }
//   }, []);

//   const uploadImage = () => {
//     if (!cloudinaryRef.current) {
//       console.log("Cloudinary not Initialized");
//       return;
//     }

//     const widgetRef = cloudinaryRef.current.createUploadWidget(
//       {
//         cloudName: "dgiw5xfpq",
//         uploadPreset: "gwjd8x4l",
//       },
//       function (error, result) {
//         if (result.event === "success") {
//           setImageLinks((prevLinks) => [...prevLinks, result.info.secure_url]);
//           setComplain((prevComplain) => ({
//             ...prevComplain,
//             images: [...prevComplain.images, result.info.secure_url],
//           }));
//         }
//       }
//     );

//     widgetRef.open();
//   };

//   const lab = useSelector((state) => state.userReducers.singleLab);

//   const [selectedIssue, setSelectedIssue] = useState(null);

//   const handleButtonClick = (issueType) => {
//     setSelectedIssue(issueType);
//   };
  
//   useEffect(() => {
//     if (selectedIssue !== null) {
//       setComplain((prevComplain) => ({
//         ...prevComplain,
//         issueType: selectedIssue,
//         labName: lab.labName,
//       }));
//     }
//   }, [selectedIssue, lab]);
  
//   const dispatch = useDispatch();
//   const id = localStorage.getItem("single");
//   useEffect(() => {
//     dispatch(getSingleLab(id));
//   }, [dispatch]);


//   const handleEquipmentChange = (e) => {
//     const equipmentValue = e.target.value;
//     setComplain((prevComplain) => ({
//       ...prevComplain,
//       equipment: equipmentValue,
//     }));
//   };

//   const handleDetailsChange = (e) => {
//     const detailsValue = e.target.value;
//     setComplain((prevComplain) => ({
//       ...prevComplain,
//       details: detailsValue,
//     }));
//   };

//   const handleHardwareIssueChange = (e) => {
//     const hardwareIssueValue = e.target.value;
//     setComplain((prevComplain) => ({
//       ...prevComplain,
//       hardwareIssueDetails: hardwareIssueValue,
//     }));
//   };

//   const [selectedUrgency, setSelectedUrgency] = useState("");

//   const handleUrgencyChange = (e) => {
//     const urgencyValue = e.target.value;
//     setComplain((prevComplain) => ({
//       ...prevComplain,
//       urgencyLevel: urgencyValue,
//     }));
//   };

// console.log("Check",complain)
//   return (
//     <>
//       <Navbar />
//       <section className="bg-white dark:bg-gray-900">
//         <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
//           <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
//             Lab Complaint
//           </h2>
//           <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
//             Report any issues or provide feedback about the college labs. Your
//             input is valuable to us.
//           </p>

//           {/* Buttons to select the type of issue */}
//           <div className="flex justify-center mb-8">
//             <button
//               onClick={() => handleButtonClick("Technical Issue")}
//               className={`mr-4 px-6 py-3 text-sm font-medium rounded-lg focus:outline-none ${
//                 selectedIssue === "Technical Issue"
//                   ? "bg-gray-200 text-gray-700"
//                   : "bg-primary-700 text-white"
//               }`}
//             >
//               Technical Issue
//             </button>
//             <button
//               onClick={() => handleButtonClick("Non-Technical Issue")}
//               className={`px-6 py-3 text-sm font-medium rounded-lg focus:outline-none ${
//                 selectedIssue === "Non-Technical Issue"
//                   ? "bg-gray-200 text-gray-700"
//                   : "bg-primary-700 text-white"
//               }`}
//             >
//               Non-Technical Issue
//             </button>
//           </div>

//           {/* Complaint form */}
//           {selectedIssue && (
//             <form action="#" className="space-y-8">
//               <div>
//                 <label
//                   htmlFor="lab"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                 >
//                   Lab Name
//                 </label>
//                 <input
//                   type="text"
//                   id="lab"
//                   defaultValue={lab.labName}
//                   readOnly
//                   className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//                   placeholder="Enter Lab Name"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="equipment"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                 >
//                   Lab Equipment
//                 </label>
//                 <select
//                   id="equipment"
//                   className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//                   onChange={handleEquipmentChange}
//                   value={complain.equipment}
//                   required
//                 >
//                   <option value="">Select Lab Equipment</option>
//                   {lab.equipment.map((equipment, index) => (
//                     <option key={index} value={equipment}>
//                       {equipment}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               {selectedIssue === "Technical Issue" && (
//                 <div>
//                 <div>
//                   <label
//                     htmlFor="hardwareIssue"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                   >
//                     Hardware Issue Details
//                   </label>
//                   <select
//                     id="hardwareIssue"
//                     className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//                     onChange={handleHardwareIssueChange}
//                     value={complain.hardwareIssueDetails}
//                     required
//                   >
//                     <option value="">Select Hardware Issue Details</option>
//                     <option value="Computer not powering on">Computer not powering on</option>
//                     <option value="Keyboard or mouse issue">Keyboard or mouse issue</option>
//                     <option value="Network connectivity problem">Network connectivity problem</option>
//                     <option value="Display not working">Display not working</option>
//                     <option value="Other hardware problem">Other hardware problem</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="softwareIssue"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                   >
//                     Software Issue Details
//                   </label>
//                   <select
//                     id="softwareIssue"
//                     className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//                     onChange={handleHardwareIssueChange}
//                     value={complain.softwareIssueDetails}
//                     required
//                   >
//                     <option value="">Select Software Issue Details</option>
//                     <option value="Operating system error">Operating system error</option>
//                     <option value="Software application not working">Software application not working</option>
//                     <option value="Virus or malware concern">Virus or malware concern</option>
//                     <option value="Internet connectivity problem">Internet connectivity problem</option>
//                     <option value="Login or access issue">Login or access issue</option>
//                     <option value="Other software problem">Other software problem</option>
//                   </select>
//                 </div>

//                 </div>
//               )}

//               <div>
//               <label
//                 htmlFor="urgencyLevel"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//               >
//                 Urgency Level
//               </label>
//               <select
//                 id="urgencyLevel"
//                 className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//                 onChange={handleUrgencyChange}
//                 value={selectedUrgency}
//                 required
//               >
//                 <option value="" disabled>Select Urgency Level</option>
//                 <option value="Low" title="Issue is not critical and can wait for resolution">
//                   Low
//                 </option>
//                 <option value="Medium" title="Issue is causing inconvenience but not stopping work">
//                   Medium
//                 </option>
//                 <option value="High" title="Issue is preventing work and needs immediate attention">
//                   High
//                 </option>
//               </select>
//             </div>
//               <div>
//                 <button
//                   onClick={(e) => {
//                     e.preventDefault();
//                     uploadImage();
//                   }}
//                 >
//                   Upload Image
//                 </button>
//               </div>
//               <div>
//                 <label
//                   htmlFor="complaint"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                 >
//                   Complaint Details
//                 </label>
//                 <textarea
//                   id="complaint"
//                   rows="6"
//                   className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//                   placeholder="Describe the issue you are facing in the lab."
//                   onChange={handleDetailsChange}
//                   value={complain.details}
//                 ></textarea>
//               </div>
//               <button
//                 type="button"
//                 className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                 onClick={() => dispatch(registerComplain(complain))}
//               >
//                 Submit Complaint
//               </button>
//             </form>
//           )}
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }







import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { getSingleLab, registerComplain } from "../redux/action/userAction";

export default function ComplaintForm() {
  const cloudinaryRef = useRef();
  const [imageLinks, setImageLinks] = useState([]);
  const [complain, setComplain] = useState({
    labName: "",
    issueType: "",
    equipment: "",
    softwareIssueDetails:"",
    hardwareIssueDetails: "", // New field for hardware issue details
    images: [],
    details: "",
  });

  useEffect(() => {
    // Function to dynamically load Cloudinary script
    const loadCloudinaryScript = () => {
      const script = document.createElement("script");
      script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
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

  const uploadImage = () => {
    if (!cloudinaryRef.current) {
      console.log("Cloudinary not Initialized");
      return;
    }

    const widgetRef = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dgiw5xfpq",
        uploadPreset: "gwjd8x4l",
      },
      function (error, result) {
        if (result.event === "success") {
          setImageLinks((prevLinks) => [...prevLinks, result.info.secure_url]);
          setComplain((prevComplain) => ({
            ...prevComplain,
            images: [...prevComplain.images, result.info.secure_url],
          }));
        }
      }
    );

    widgetRef.open();
  };
  
  const lab = useSelector((state) => state.userReducers.singleLab);
  
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [subSelectIssue,setSubSelecteIssue]=useState("")

  const handleButtonClick = (issueType) => {
    setSelectedIssue(issueType);
  };
  
  const handleSubButtonClick = (issueType) => {
    setSubSelecteIssue(issueType);
  };
  useEffect(() => {
    if (selectedIssue !== null) {
      setComplain((prevComplain) => ({
        ...prevComplain,
        issueType: selectedIssue,
        labName: lab.labName,
      }));
    }
  }, [selectedIssue, lab]);
  
  const dispatch = useDispatch();
  const id = localStorage.getItem("single");
  useEffect(() => {
    dispatch(getSingleLab(id));
  }, [dispatch]);


  const handleEquipmentChange = (e) => {
    const equipmentValue = e.target.value;
    setComplain((prevComplain) => ({
      ...prevComplain,
      equipment: equipmentValue,
    }));
  };

  const handleDetailsChange = (e) => {
    const detailsValue = e.target.value;
    setComplain((prevComplain) => ({
      ...prevComplain,
      details: detailsValue,
    }));
  };


  const [selectedUrgency, setSelectedUrgency] = useState("");


  const handleUrgencyChange = (e) => {
    setSelectedUrgency(e.target.value)
    const urgencyValue = e.target.value;
    setComplain((prevComplain) => ({
      ...prevComplain,
      urgencyLevel: urgencyValue,
    }));
  };

    const handleSoftwareIssueChange = (e) => {
    const softwareIssueValue = e.target.value;
    setComplain((prevComplain) => ({
      ...prevComplain,
      softwareIssueDetails: softwareIssueValue,
    }));
  };

  const handleHardwareIssueChange = (e) => {
    const hardwareIssueValue = e.target.value;
    setComplain((prevComplain) => ({
      ...prevComplain,
      hardwareIssueDetails: hardwareIssueValue,
    }));
  };

  console.log("sub", subSelectIssue)
console.log("Check",complain)
  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Lab Complaint
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Report any issues or provide feedback about the college labs. Your
            input is valuable to us.
          </p>

          {/* Buttons to select the type of issue */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => handleButtonClick("Technical Issue")}
              className={`mr-4 px-6 py-3 text-sm font-medium rounded-lg focus:outline-none ${
                selectedIssue === "Technical Issue"
                  ? "bg-gray-200 text-gray-700"
                  : "bg-primary-700 text-white"
              }`}
            >
              Technical Issue
            </button>
            <button
              onClick={() => handleButtonClick("Non-Technical Issue")}
              className={`px-6 py-3 text-sm font-medium rounded-lg focus:outline-none ${
                selectedIssue === "Non-Technical Issue"
                  ? "bg-gray-200 text-gray-700"
                  : "bg-primary-700 text-white"
              }`}
            >
              Non-Technical Issue
            </button>
          </div>

          {/* Complaint form */}
          {selectedIssue && (
            <form action="#" className="space-y-8">
              <div>
                <label
                  htmlFor="lab"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Lab Name
                </label>
                <input
                  type="text"
                  id="lab"
                  defaultValue={lab.labName}
                  readOnly
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Enter Lab Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="equipment"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Lab Equipment
                </label>
                <select
                  id="equipment"
                  className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  onChange={handleEquipmentChange}
                  value={complain.equipment}
                  required
                >
                  <option value="">Select Lab Equipment</option>
                  {lab.equipment.map((equipment, index) => (
                    <option key={index} value={equipment}>
                      {equipment}
                    </option>
                  ))}
                </select>
              </div>


           {selectedIssue==="Technical Issue" &&
             <div>
               <button
                 onClick={() => handleSubButtonClick("Software Issue")}
                 className={`mr-4 px-6 py-3 text-sm font-medium rounded-lg focus:outline-none ${
                   selectedIssue === "Software Issue"
                     ? "bg-gray-200 text-gray-700"
                     : "bg-primary-700 text-white"
                 }`}
               >
                 Software Issue
               </button>
               <button
                 onClick={() => handleSubButtonClick("Hardware Issue")}
                 className={`px-6 py-3 text-sm font-medium rounded-lg focus:outline-none ${
                   selectedIssue === "Hardware Issue"
                     ? "bg-gray-200 text-gray-700"
                     : "bg-primary-700 text-white"
                 }`}
               >
                 Hardware Issue
               </button>
             </div>
             }

             {subSelectIssue === "Hardware Issue" && (
                <div>
                  <label
                    htmlFor="hardwareIssue"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Hardware Issue Details
                  </label>
                  <select
                    id="hardwareIssue"
                    className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    onChange={handleHardwareIssueChange}
                    value={complain.hardwareIssueDetails}
                    required
                  >
                    <option value="">Select Hardware Issue Details</option>
                    <option value="Computer not powering on">Computer not powering on</option>
                    <option value="Keyboard or mouse issue">Keyboard or mouse issue</option>
                    <option value="Network connectivity problem">Network connectivity problem</option>
                    <option value="Display not working">Display not working</option>
                    <option value="Other hardware problem">Other hardware problem</option>
                  </select>
                </div>
              )}

              {subSelectIssue === "Software Issue" && (
                <div>
                  <label
                    htmlFor="softwareIssue"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Software Issue Details
                  </label>
                  <select
                    id="softwareIssue"
                    className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    onChange={handleSoftwareIssueChange}
                    value={complain.softwareIssueDetails}
                    required
                  >
                    <option value="">Select Software Issue Details</option>
                    <option value="Operating system error">Operating system error</option>
                    <option value="Software application not working">Software application not working</option>
                    <option value="Virus or malware concern">Virus or malware concern</option>
                    <option value="Internet connectivity problem">Internet connectivity problem</option>
                    <option value="Login or access issue">Login or access issue</option>
                    <option value="Other software problem">Other software problem</option>
                  </select>
                </div>
              )}

              <div>
              <label
                htmlFor="urgencyLevel"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Urgency Level
              </label>
              <select
                id="urgencyLevel"
                className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                onChange={handleUrgencyChange}
                value={selectedUrgency}
                required
              >
                <option value="" disabled>Select Urgency Level</option>
                <option value="Low" title="Issue is not critical and can wait for resolution">
                  Low
                </option>
                <option value="Medium" title="Issue is causing inconvenience but not stopping work">
                  Medium
                </option>
                <option value="High" title="Issue is preventing work and needs immediate attention">
                  High
                </option>
              </select>
            </div>
              <div className=" ">
                <button className="bg-white p-2 rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    uploadImage();
                  }}
                >
                <i className="fa-regular fa-image mr-2"></i>
                  Upload Image
                </button>
              </div>
              <div>
                <label
                  htmlFor="complaint"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Complaint Details
                </label>
                <textarea
                  id="complaint"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Describe the issue you are facing in the lab."
                  onChange={handleDetailsChange}
                  value={complain.details}
                ></textarea>
              </div>
              <button
                type="button"
                className="py-3 border px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={() => dispatch(registerComplain(complain))}
              >
                Submit Complaint
              </button>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}






// import { useEffect, useRef, useState } from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { useDispatch, useSelector } from "react-redux";
// import { getSingleLab, registerComplain } from "../redux/action/userAction";

// export default function ComplaintForm() {
//   const cloudinaryRef = useRef();
//   const [imageLinks, setImageLinks] = useState([]);
//   const [complain, setComplain] = useState({
//     labName: "",
//     issueType: "",
//     equipment: "",
//     softwareIssueDetails: "", // New field for software issue details
//     hardwareIssueDetails: "", // New field for hardware issue details
//     images: [],
//     details: "",
//   });

//   const [subSelectIssue,setSubSelecteIssue]=useState("")

//   useEffect(() => {
//     // Function to dynamically load Cloudinary script
//     const loadCloudinaryScript = () => {
//       const script = document.createElement("script");
//       script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
//       script.async = true;
//       script.onload = () => {
//         cloudinaryRef.current = window.cloudinary;
//       };
//       document.head.appendChild(script);
//     };

//     // If Cloudinary is not already loaded, load the script
//     if (!window.cloudinary) {
//       loadCloudinaryScript();
//     } else {
//       cloudinaryRef.current = window.cloudinary;
//     }
//   }, []);

//   const uploadImage = () => {
//     if (!cloudinaryRef.current) {
//       console.log("Cloudinary not Initialized");
//       return;
//     }

//     const widgetRef = cloudinaryRef.current.createUploadWidget(
//       {
//         cloudName: "dgiw5xfpq",
//         uploadPreset: "gwjd8x4l",
//       },
//       function (error, result) {
//         if (result.event === "success") {
//           setImageLinks((prevLinks) => [...prevLinks, result.info.secure_url]);
//           setComplain((prevComplain) => ({
//             ...prevComplain,
//             images: [...prevComplain.images, result.info.secure_url],
//           }));
//         }
//       }
//     );

//     widgetRef.open();
//   };

//   const lab = useSelector((state) => state.userReducers.singleLab);

//   const [selectedIssue, setSelectedIssue] = useState(null);

//   const handleButtonClick = (issueType) => {
//     setSelectedIssue(issueType);

//     // Reset the issue details when the issue type is changed
//     setComplain((prevComplain) => ({
//       ...prevComplain,
//       softwareIssueDetails: "",
//       hardwareIssueDetails: "",
//     }));
//   };


//   const handleSubButtonClick = (issueType) => {
//     setSubSelecteIssue(issueType);

//     // Reset the issue details when the issue type is changed
//     setComplain((prevComplain) => ({
//       ...prevComplain,
//       softwareIssueDetails: "",
//       hardwareIssueDetails: "",
//     }));
//   };


//   const dispatch = useDispatch();
//   const id = localStorage.getItem("single");
//   useEffect(() => {
//     dispatch(getSingleLab(id));
//   }, [dispatch]);

//   const handleEquipmentChange = (e) => {
//     const equipmentValue = e.target.value;
//     setComplain((prevComplain) => ({
//       ...prevComplain,
//       equipment: equipmentValue,
//     }));
//   };

//   const handleDetailsChange = (e) => {
//     const detailsValue = e.target.value;
//     setComplain((prevComplain) => ({
//       ...prevComplain,
//       details: detailsValue,
//     }));
//   };

//   const handleSoftwareIssueChange = (e) => {
//     const softwareIssueValue = e.target.value;
//     setComplain((prevComplain) => ({
//       ...prevComplain,
//       softwareIssueDetails: softwareIssueValue,
//     }));
//   };

//   const handleHardwareIssueChange = (e) => {
//     const hardwareIssueValue = e.target.value;
//     setComplain((prevComplain) => ({
//       ...prevComplain,
//       hardwareIssueDetails: hardwareIssueValue,
//     }));
//   };

//   const [selectedUrgency, setSelectedUrgency] = useState("");

//   const handleUrgencyChange = (e) => {
//     const urgencyValue = e.target.value;
//     setComplain((prevComplain) => ({
//       ...prevComplain,
//       urgencyLevel: urgencyValue,
//     }));
//   };

//   console.log("Check",complain)
//   return (
//     <>
//       <Navbar />
//       <section className="bg-white dark:bg-gray-900">
//         <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
//           <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
//             Lab Complaint
//           </h2>
//           <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
//             Report any issues or provide feedback about the college labs. Your
//             input is valuable to us.
//           </p>

//           {/* Buttons to select the type of issue */}
//           <div className="flex justify-center mb-8">
//             <button
//               onClick={() => handleButtonClick("Technical Issue")}
//               className={`mr-4 px-6 py-3 text-sm font-medium rounded-lg focus:outline-none ${
//                 selectedIssue === "Technical Issue"
//                   ? "bg-gray-200 text-gray-700"
//                   : "bg-primary-700 text-white"
//               }`}
//             >
//               Technical Issue
//             </button>
//             <button
//               onClick={() => handleButtonClick("Non-Technical Issue")}
//               className={`mr-4 px-6 py-3 text-sm font-medium rounded-lg focus:outline-none ${
//                 selectedIssue === "Non-Technical Issue"
//                   ? "bg-gray-200 text-gray-700"
//                   : "bg-primary-700 text-white"
//               }`}
//             >
//               Non-Technical Issue
//             </button>
//           </div>

//           {/* Complaint form */}
//           {selectedIssue && (
//             <form action="#" className="space-y-8">
//               <div>
//                 <label
//                   htmlFor="lab"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                 >
//                   Lab Name
//                 </label>
//                 <input
//                   type="text"
//                   id="lab"
//                   defaultValue={lab.labName}
//                   readOnly
//                   className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//                   placeholder="Enter Lab Name"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="equipment"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                 >
//                   Lab Equipment
//                 </label>
//                 <select
//                   id="equipment"
//                   className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//                   onChange={handleEquipmentChange}
//                   value={complain.equipment}
//                   required
//                 >
//                   <option value="">Select Lab Equipment</option>
//                   {lab.equipment.map((equipment, index) => (
//                     <option key={index} value={equipment}>
//                       {equipment}
//                     </option>
//                   ))}
//                 </select>
//               </div>


//               {selectedIssue==="Technical Issue" &&
//             <div>
//               <button
//                 onClick={() => handleSubButtonClick("Software Issue")}
//                 className={`mr-4 px-6 py-3 text-sm font-medium rounded-lg focus:outline-none ${
//                   selectedIssue === "Software Issue"
//                     ? "bg-gray-200 text-gray-700"
//                     : "bg-primary-700 text-white"
//                 }`}
//               >
//                 Software Issue
//               </button>
//               <button
//                 onClick={() => handleSubButtonClick("Hardware Issue")}
//                 className={`px-6 py-3 text-sm font-medium rounded-lg focus:outline-none ${
//                   selectedIssue === "Hardware Issue"
//                     ? "bg-gray-200 text-gray-700"
//                     : "bg-primary-700 text-white"
//                 }`}
//               >
//                 Hardware Issue
//               </button>
//             </div>
//             }

//               {subSelectIssue === "Hardware Issue" && (
//                 <div>
//                   <label
//                     htmlFor="hardwareIssue"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                   >
//                     Hardware Issue Details
//                   </label>
//                   <select
//                     id="hardwareIssue"
//                     className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//                     onChange={handleHardwareIssueChange}
//                     value={complain.hardwareIssueDetails}
//                     required
//                   >
//                     <option value="">Select Hardware Issue Details</option>
//                     <option value="Computer not powering on">Computer not powering on</option>
//                     <option value="Keyboard or mouse issue">Keyboard or mouse issue</option>
//                     <option value="Network connectivity problem">Network connectivity problem</option>
//                     <option value="Display not working">Display not working</option>
//                     <option value="Other hardware problem">Other hardware problem</option>
//                   </select>
//                 </div>
//               )}

//               {subSelectIssue === "Software Issue" && (
//                 <div>
//                   <label
//                     htmlFor="softwareIssue"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                   >
//                     Software Issue Details
//                   </label>
//                   <select
//                     id="softwareIssue"
//                     className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//                     onChange={handleSoftwareIssueChange}
//                     value={complain.softwareIssueDetails}
//                     required
//                   >
//                     <option value="">Select Software Issue Details</option>
//                     <option value="Operating system error">Operating system error</option>
//                     <option value="Software application not working">Software application not working</option>
//                     <option value="Virus or malware concern">Virus or malware concern</option>
//                     <option value="Internet connectivity problem">Internet connectivity problem</option>
//                     <option value="Login or access issue">Login or access issue</option>
//                     <option value="Other software problem">Other software problem</option>
//                   </select>
//                 </div>
//               )}


//               <div>
//                 <label
//                   htmlFor="urgencyLevel"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                 >
//                   Urgency Level
//                 </label>
//                 <select
//                   id="urgencyLevel"
//                   className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//                   onChange={handleUrgencyChange}
//                   value={selectedUrgency}
//                   required
//                 >
//                   <option value="" disabled>Select Urgency Level</option>
//                   <option value="Low" title="Issue is not critical and can wait for resolution">
//                     Low
//                   </option>
//                   <option value="Medium" title="Issue is causing inconvenience but not stopping work">
//                     Medium
//                   </option>
//                   <option value="High" title="Issue is preventing work and needs immediate attention">
//                     High
//                   </option>
//                 </select>
//               </div>
//               <div>
//                 <button
//                   onClick={(e) => {
//                     e.preventDefault();
//                     uploadImage();
//                   }}
//                 >
//                   Upload Image
//                 </button>
//               </div>
//               <div>
//                 <label
//                   htmlFor="complaint"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                 >
//                   Complaint Details
//                 </label>
//                 <textarea
//                   id="complaint"
//                   rows="6"
//                   className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//                   placeholder="Describe the issue you are facing in the lab."
//                   onChange={handleDetailsChange}
//                   value={complain.details}
//                 ></textarea>
//               </div>
//               <button
//                 type="button"
//                 className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                 onClick={() => dispatch(registerComplain(complain))}
//               >
//                 Submit Complaint
//               </button>
//             </form>
//           )}
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }




       