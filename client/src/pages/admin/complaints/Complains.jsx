import { useDispatch, useSelector } from "react-redux";
import AdminFooter from "../AdminFooter";
import AdminNav from "../AdminNav";
import { useEffect } from "react";
import { getComplains, updateComplainStatus } from "../../../redux/action/adminAction";
import Status from "./Status";
import EmptyComplains from "./EmptyComplains";
import ComplaintImage from "./ComplaintImage";
import WorkerSelected from "./WorkerSelected";

const Complains = () => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getComplains());
  }, [dispatch]);

  const complains = useSelector((state) => state.adminReducers.complains);
  console.log("ALL COM", complains);

  const worker=useSelector((state)=>state.adminReducers.workers)
  console.log("wk",worker)

  function handleStatus(){
    const status=localStorage.getItem("status")

    const email=localStorage.getItem("assignedEmail")

    dispatch(updateComplainStatus())

  }
  return (
    <div>
      <AdminNav />

      <div className="mt-5 mb-5 h-[60vh] relative overflow-x-auto shadow-md sm:rounded-lg">
      {complains.length>0? 
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
                User Email
              </th>
              <th scope="col" className="px-6 py-3">
                URN
              </th>
              <th scope="col" className="px-6 py-3">
                User
              </th>
              <th scope="col" className="px-6 py-3">
                Issue Type
              </th>
              <th scope="col" className="px-6 py-3">
                Lab
              </th>
              <th scope="col" className="px-6 py-3">
                Lab Name
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Lab Tech
              </th>
              <th scope="col" className="px-6 py-3">
                Assigned Status
              </th>
              <th scope="col" className="px-6 py-3">
                Details
              </th>
              <th scope="col" className="px-6 py-3">
                Timestamp
              </th>
              <th scope="col" className="px-6 py-3">
                Images
              </th>
            </tr>
          </thead>
          
          <tbody>
            {complains.map((complain) => (
              <tr key={complain._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {/* {complain.user.email} */}
                  {complain.user ? complain.user.email : "N/A"}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {complain.user ? complain.user.urn : "N/A"}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {complain.user ? complain.user.name : "N/A"}
                </td>
                <td className="px-6 py-4">{complain.issueType}</td>
                <td className="px-6 py-4">{complain.lab ? complain.lab._id : "N/A"} </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{complain.lab ? complain.lab.labName : "N/A" }</td>
                <td className="px-6 py-4"> <Status status={complain.status} id={complain._id} /> </td>
                <td className="px-6 py-4"> <WorkerSelected id={complain._id} /> </td>
                <td className="px-6 py-4"> <button onClick={()=>handleStatus()}>Assigned Status</button> </td>
                <td className="px-6 py-4">{complain.details}</td>
                <td className="px-6 py-4">{new Date(complain.timestamp).toLocaleString()}</td>
                <td className="px-6 py-4"> <ComplaintImage img={complain.images} /> </td>
              </tr>
            ))}
          </tbody>
        </table>:<EmptyComplains/>
      }
      </div>
      <AdminFooter />
    </div>
  );
};

export default Complains;
