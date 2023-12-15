import Footer from '../../components/Footer'
import LabsCard from '../../components/LabsCard'
import Navbar from '../../components/Navbar'

const Labs = () => {
  return (
    <>
    <Navbar />
    <div className='mt-5 shadow-lg p-5'>
      <h1 className='text-3xl font-bold mb-20 text-center'>Laboratories</h1>
      <LabsCard />
    </div>
    <Footer/>
    </>
  )
}

export default Labs
