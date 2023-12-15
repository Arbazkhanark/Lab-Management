import { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useDispatch } from "react-redux";
import { contactUs } from "../../redux/action/userAction";

const Contact = () => {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    message:""
  })

  const dispatch=useDispatch();

  function handleSubmit(){
    dispatch(contactUs(formData))
  }
  console.log(formData)
  return (
    <div>
    <Navbar />
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe 
              title="map"
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.9278355686324!2d75.85698621051324!3d30.860695374416512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a828f09011b15%3A0xbf3f5b51dcc81b12!2sGuru%20Nanak%20Dev%20Engineering%20College!5e0!3m2!1sen!2sin!4v1701444460183!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Visit Us</h2>
                <p className="mt-1">Guru Nanak Dev Engineering College</p>
                <p className="mt-1">[Your College Address]</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Contact Information</h2>
                <p className="leading-relaxed">
                  Email: <a href="mailto:info@example.com" className="text-red-500">info@example.com</a>
                </p>
                <p className="leading-relaxed">Phone: 123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Get In Touch</h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              If you have any questions or feedback, feel free to reach out to us.
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e)=>setFormData({...formData,name:e.target.value})}
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e)=>setFormData({...formData,email:e.target.value})}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Your Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e)=>setFormData({...formData,message:e.target.value})}
              ></textarea>
            </div>
            <button
              className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
              type="button"
              onClick={handleSubmit}
            >
              Send Message
            </button>
            <p className="text-xs text-gray-500 mt-3">
              We{"'"}ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Contact;
