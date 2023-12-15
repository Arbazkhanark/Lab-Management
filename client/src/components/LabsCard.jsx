import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllLabs } from "../redux/action/adminAction";
import { getSingleLab } from "../redux/action/userAction";
import { useNavigate } from "react-router-dom";
import EmptyLabPage from "../pages/lab/EmptyLabPage";


function LabsCard() {

  const navigate=useNavigate();
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getAllLabs())
  },[dispatch])

  const labs=useSelector((state)=>state.adminReducers.labs)
  console.log(labs)
    return (
      <>
        {labs && labs.length>0 ?
        <div className="flex flex-wrap justify-center gap-10">
        {labs && labs.map((lab,i)=>{
          return (
            <div key={i} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 ">
              <a href="#">
                <img className="rounded-t-lg h-[200px] w-[300px]" src={lab.images[0]} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">
                    {lab.labName}
                  </h5>
                </a>
                <button
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={()=>dispatch(getSingleLab(lab._id,navigate))}
                >
                  Explore this lab
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )
        })}
        </div>:<EmptyLabPage />
        }
      </>
    );
  }
  
  export default LabsCard;
  