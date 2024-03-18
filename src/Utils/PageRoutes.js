// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Hero from './Components/Hero'
// // import Programs from './Components/Programs'
// import App from './App'

// const PageRoutes = () => {
//     return (
//         <BrowserRouter >
//             <Routes>
//                 <Route path='/' element={<App />} />
//                 {/* <Route path='/program' element={<Programs />} /> */}
//             </Routes>
//         </BrowserRouter>
//     )
// }

// export default PageRoutes









import React from 'react'

import axios from 'axios'

import { useState, useEffect } from 'react'

const ContactFormPage = () => {

  const [data, setdata] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    age: "",
    district: "",
    message: ""
  })

  const handleChange = (e) => {
    const name = e.target.name ? e.target.name : e.name

    switch (name) {
      case "name":
        setdata((prevData) => ({
          ...prevData,
          name: e.target.value
        }));
        break;
      case "email":
        setdata((prevData) => ({
          ...prevData,
          email: e.target.value
        }));
        break;
      case "age":
        setdata((prevData) => ({
          ...prevData,
          age: e.target.value
        }));
        break; case "district":
        setdata((prevData) => ({
          ...prevData,
          district: e.target.value
        }));
        break;
      case "mobileNumber":
        setdata((prevData) => ({
          ...prevData,
          mobileNumber: e.target.value
        }));
        break;
      case "message":
        setdata((prevData) => ({
          ...prevData,
          message: e.target.value
        }));
        break;
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    const paylode = {
      Name: data.name,
      Age: data.age,
      mobileNumber: data.mobileNumber,
      District: data.district,
      Email: data.email,
      Message: data.message
    }
    console.log(paylode);

    axios.post('https://sheet.best/api/sheets/ac8cf83d-8ccc-4af5-a336-9f3f80d029b2', paylode)
      .then((response) => {
        console.log(response);
        alert("data added successfully");

        setdata({
          name: "",
          email: "",
          mobileNumber: "",
          age: "",
          district: "",
          message: ""
        });
      })
      .catch((error) => {
        console.error('Axios Error:', error);
        // Handle error here, such as displaying an error message to the user
      });
  }






  return (
    <section className="" id='contact'>
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 ">
        <div className="max-w-lg mx-auto gap-12 justify-center flex lg:max-w-none">
          <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 divide-slate-600 border-2  rounded-lg p-5"
            >
              <div>
                <label className="font-medium">
                  Full name
                </label>
                <input
                  type="text"
                  required
                  placeholder='Example: John Doe'
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  id='name'
                  name='name'
                  onChange={(e) => handleChange(e)}
                  value={data.name}
                />
              </div>
              <div>
                <label className="font-medium">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder='Example: support@example.com'
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  id='email'
                  name='email'
                  onChange={(e) => handleChange(e)}
                  value={data.email}
                />
              </div>
              <div>
                <label className="font-medium">
                  Age
                </label>
                <input
                  type="text"
                  required
                  placeholder='Example:18'
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  id='age'
                  name='age'
                  onChange={(e) => handleChange(e)}
                  value={data.age}
                />
              </div>
              <div>
                <label className="font-medium">
                  District
                </label>
                <input
                  type="text"
                  required
                  placeholder='Example: Salem'
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  id='district'
                  name='district'
                  onChange={(e) => handleChange(e)}
                  value={data.district}
                />
              </div>
              <div>
                <label className="font-medium">
                  Mobile Number
                </label>
                <input
                  type="text"
                  required
                  placeholder='Example: +91 98**76**54'
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  id='mobileNumber'
                  name='mobileNumber'
                  onChange={(e) => handleChange(e)}
                  value={data.mobileNumber}
                />
              </div>
              <div>
                <label className="font-medium">
                  Message
                </label>
                <textarea
                  required
                  placeholder='Write your query...'
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  id='message'
                  name='message'
                  onChange={(e) => handleChange(e)}
                  value={data.message}
                ></textarea>
              </div>
              <button
                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
              >
                Submit
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}


export default ContactFormPage