import { useSelector } from "react-redux"
import PageNotAccess from "../PageNotAccess"
import AdminFooter from "./AdminFooter"
import AdminNav from "./AdminNav"
import Cards from "./Cards"


const AdminHome = () => {
    const admin=useSelector((state)=>state.adminReducers.admin)
    console.log(",ADMIN h",admin)
  return (
    <div>
    {admin ?
        <div>
            <AdminNav/>
            <Cards />
            <AdminFooter />
        </div>
        :<PageNotAccess/>
    }
    </div>
  )
}

export default AdminHome