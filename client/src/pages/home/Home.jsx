import { Link } from "react-router-dom"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import Navbar from "../../components/Navbar"
import Testimonial from "../../components/Testimonial"
import SectionA from "./SectionA"
import LabThree from "../../components/LabThree"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAllLabs } from "../../redux/action/adminAction"

const Home = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getAllLabs())
  },[dispatch])
  const labs=useSelector((state)=>state.adminReducers.labs)
  console.log(labs)
  return (
    <div>
    <Navbar />
      <Hero />
      {/* <SectionA/> */}
      {labs && labs.length>0 ?
      <div>
          <h1 className="text-center mb-10 font-bold text-3xl">Laboratories</h1>
          <LabThree/>
          <div className="flex justify-center mt-10">
          <Link className="hover:bg-gray-500 rounded bg-slate-600 text-white w-fit p-3" to={"/labs"}>All Laboratories {"->"}</Link>
        </div>
      </div>:""
       }
      {/* <Testimonial/> */}
      <Footer/>
    </div>
  )
}

export default Home