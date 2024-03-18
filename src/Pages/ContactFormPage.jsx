import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const ContactFormPage = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    age: "",
    district: "",
    message: ""
  })



  const handleChange = (e) => {
    const name = e.target.name ? e.target.name : e.name

    switch (name) {
      case "name":
        setData((prevData) => ({
          ...prevData,
          name: e.target.value
        }));
        break;
      case "email":
        setData((prevData) => ({
          ...prevData,
          email: e.target.value
        }));
        break;
      case "age":
        setData((prevData) => ({
          ...prevData,
          age: e.target.value
        }));
        break; case "district":
        setData((prevData) => ({
          ...prevData,
          district: e.target.value
        }));
        break;
      case "phoneNumber":
        setData((prevData) => ({
          ...prevData,
          phoneNumber: e.target.value
        }));
        break;
      case "message":
        setData((prevData) => ({
          ...prevData,
          message: e.target.value
        }));
        break;
      default:
        break;
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    const paylode = {
      Name: data.name,
      Age: data.age,
      PhoneNumber: data.phoneNumber,
      District: data.district,
      Email: data.email,
      Message: data.message
    }
    console.log(paylode);

    axios.post('https://sheet.best/api/sheets/ac8cf83d-8ccc-4af5-a336-9f3f80d029b2', paylode)
      .then((response) => {
        console.log(response);
        alert("data added successfully");

        setData({
          name: "",
          email: "",
          phoneNumber: "",
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
    <div>
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
                    age
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
                    district
                  </label>
                  <input
                    type="text"
                    required
                    placeholder='Example: place name'
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    id='district'
                    name='district'
                    onChange={(e) => handleChange(e)}
                    value={data.district}
                  />
                </div>
                <div>
                  <label className="font-medium">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    required
                    placeholder='Example: 1234567890'
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    id='phoneNumber'
                    name='phoneNumber'
                    onChange={(e) => handleChange(e)}
                    value={data.phoneNumber}
                  />
                </div>
                <div>
                  <label className="font-medium">
                    Message
                  </label>
                  <textarea
                    required
                    placeholder='write your query'
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
    </div>
  )
}

export default ContactFormPage
