import { useSelector } from "react-redux";


const UserAccess = () => {
    const isAccessAllowed=useSelector((state)=>state.userReducers.user);
    console.log(isAccessAllowed)
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      {/* {isAccessAllowed ? (
        <>
          <p className="text-green-600 font-semibold">Access Granted!</p>
          <p className="text-gray-700">
            You can access the system. Enjoy your experience!
          </p>
        </>
      ) : (
        <>
          <p className="text-yellow-600 font-semibold">
            Waiting for Admin Approval
          </p>
          <p className="text-gray-700">
            Please be patient. You will be notified once access is granted.
          </p>
        </>
      )} */}

      <p>You can't access</p>
    </div>
  );
};

export default UserAccess;
