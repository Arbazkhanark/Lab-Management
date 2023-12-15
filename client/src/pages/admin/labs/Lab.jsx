import { useDispatch, useSelector } from "react-redux";
import AdminFooter from "../AdminFooter";
import AdminNav from "../AdminNav";
import AddLab from "./AddLab";
import { useEffect } from "react";
import { deleteLab, getAllLabs } from "../../../redux/action/adminAction";
import { Link } from "react-router-dom";
import EditLab from "./EditLab";
import EmptyUsers from "../users/EmptyUsers";

const Lab = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLabs());
  }, [dispatch]);

  const labs = useSelector((state) => state.adminReducers.labs);
  console.log("ALL Labs", labs);

  return (
    <div>
      <AdminNav />
      <AddLab />
      <div className=" mt-3 mb-5 relative overflow-x-auto shadow-md sm:rounded-lg">
      {labs && labs.length>0 ?
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Lab Name
              </th>
              <th scope="col" className="px-6 py-3">
                Lab Number
              </th>
              <th scope="col" className="px-6 py-3">
                Department
              </th>
              <th scope="col" className="px-6 py-3">
                Inventories
              </th>
              <th scope="col" className="px-6 py-3">
                Lab Id
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {labs && labs.length>0 ? labs.map((lab) => (
              <tr key={lab._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {lab.labName}
                </td>
                <td className="px-6 py-4">{lab.labNumber}</td>
                <td className="px-6 py-4">{lab.department}</td>
                <td className="px-6 py-4">
                  <select>
                    {lab.equipment.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-4">{lab._id}</td>
                <td>
                <EditLab id={lab._id} />
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={()=>dispatch(deleteLab(lab._id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )): <tr>No Labs Yet</tr> }
          </tbody>
        </table> :<EmptyUsers />
      }
      </div>
      <AdminFooter />
    </div>
  );
};

export default Lab;
