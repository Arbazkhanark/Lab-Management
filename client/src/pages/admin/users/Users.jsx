import { useDispatch, useSelector } from "react-redux";
import AdminFooter from "../AdminFooter";
import AdminNav from "../AdminNav";
import { useEffect } from "react";
import { getAllUsers, giveAccessToUser, reportUser } from "../../../redux/action/adminAction";
import EmptyUsers from "./EmptyUsers";

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.adminReducers.users);
  console.log("USER FF", users);

  return (
    <div>
      <AdminNav />
      <div className=" h-[70vh] mt-10">
        {users.length>0 ?
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-[60vh] mb-10">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  URN
                </th>
                <th scope="col" className="px-6 py-3">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Verified
                </th>
                <th scope="col" className="px-6 py-3">
                  Department
                </th>
                <th scope="col" className="px-6 py-3">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3">
                  Complaints
                </th>
                <th scope="col" className="px-6 py-3">
                  Access
                </th>
                <th scope="col" className="px-6 py-3">
                  Action Access
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.name}
                  </td>
                  <td className="px-6 py-4">{user.urn}</td>
                  <td className="px-6 py-4">{user.gender}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.verified ? "Yes" : "No"}</td>
                  <td className="px-6 py-4">{user.department}</td>
                  <td className="px-6 py-4">{user.contact}</td>
                  <td className="px-6 py-4">
                    {user.complains.map((complaint, index) => (
                      <div key={index}>{complaint}</div>
                    ))}
                  </td>
                  <td className="px-6 py-4 text-white font-bold">{user.adminAllowed ? "True" :"False" }</td>
                  <td>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded"
                        onClick={()=>dispatch(giveAccessToUser(user._id))}
                      >
                        True
                      </button>

                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-5 rounded"
                        onClick={()=>dispatch(reportUser(user._id))}
                      >
                        False
                      </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> :<EmptyUsers/>
        }
      </div>
      <AdminFooter />
    </div>
  );
};

export default Users;
