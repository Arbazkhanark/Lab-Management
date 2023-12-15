// import { useSelector } from "react-redux";
// import Footer from "./Footer";
// import Navbar from "./Navbar";

// const LabDescription = () => {
//     const lab=useSelector((state)=>state.userReducers.singleLab)
//     console.log("SINGLE",lab)
//     return (
//       <div>
//       <Navbar/>
//         <section className="text-gray-700 body-font overflow-hidden bg-white">
//           <div className="container px-5 py-24 mx-auto">
//             <div className="lg:w-4/5 mx-auto flex flex-wrap">
//               <img alt="lab" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={lab.images[0]} />
//               <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//                 <h2 className="text-sm title-font text-gray-500 tracking-widest">{lab.labNumber}</h2>
//                 <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{lab.labName}</h1>
//                 <div className="flex mb-4">
//                 </div>
//                 <p className="leading-relaxed">Lab locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO lab indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
//                 <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">

//                 </div>
//                 <div className="flex">
//                   <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
//                   <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Complaint</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <Footer/>
//       </div>
//     )
//   }
  
//   export default LabDescription;
  


import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Loader from "./loader/Loader";
import { useEffect } from "react";
import { getSingleLab } from "../redux/action/userAction";
import { Link, useNavigate } from "react-router-dom";

const LabDescription = () => {
    const id=localStorage.getItem("single")
    const dispatch=useDispatch()
    const navigate=useNavigate()
    useEffect(()=>{
        dispatch(getSingleLab(id,navigate))
    },[dispatch])
    const lab = useSelector((state) => state.userReducers.singleLab);
    console.log("SINGLE", lab);

    // Check if lab is null or undefined
    if (!lab) {
        return (
            <div>
                <Navbar />
                <Loader />
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img
                            alt="lab"
                            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                            src={lab.images[0]}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                {lab.labNumber}
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                {lab.labName}
                            </h1>
                            <div className="flex mb-4"></div>
                            <p className="leading-relaxed flex justify-around items-center flex-wrap">
                                <p className="font-bold">Equipments of the Lab:</p>
                            {lab.equipment.map((item)=>{
                                return (<div className="border rounded bg-slate-600 text-white pl-3 pr-3 p-1">{item}</div>)
                            })}
                            </p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
                            <div className="flex">
        
                                <Link to={"/complain"} className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                                    Complaint
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default LabDescription;
