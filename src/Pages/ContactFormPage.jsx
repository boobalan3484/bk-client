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
    subject: "",
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
        break;
      case "district":
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
      case "subject":
        setData((prevData) => ({
          ...prevData,
          subject: e.target.value
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
      Message: data.message,
      Subject: data.subject,

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
          subject: "",
          message: ""
        });
      })
      .catch((error) => {
        console.error('Axios Error:', error);
        // Handle error here, such as displaying an error message to the user
      });
  }

  return (
    <section id='contact' className="min-h-screen w-full grid place-content-center bg-blue-gray-100/10" >

      <main className=" h-full backdrop-blur-md z-[999] rounded-lg sm:max-w-lg lg:max-w-md shadow-md shadow-blue-gray-500/75 bg-Nav">

        <form
          onSubmit={handleSubmit}
          className=" divide-slate-600  rounded-lg"
        >

          <div className=' text-[#4e6ddb] p-5 text-center rounded-t-lg'>
            <h3 className='text-xl tracking-wider font-bold'>
              CONTACT FORM
            </h3>
          </div>

          <div className='space-y-4 p-5'>

            <div>
              <label className="font-medium">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder='Example: John Doe'
                // pattern=''
                className="w-full mt-1 px-3 py-1 text-gray-700 bg-transparent outline-none border border-blue-gray-200 focus:border-indigo-600 shadow-sm rounded-md"
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
                className="w-full mt-1 px-3 py-1 text-gray-700 bg-transparent outline-none border border-blue-gray-200 focus:border-indigo-600 shadow-sm rounded-md"
                id='email'
                name='email'
                onChange={(e) => handleChange(e)}
                value={data.email}
              />
            </div>

            <div>
              <label className="font-medium">
                Mobile Number
              </label>
              <input
                type="text"
                required
                // pattern=''
                placeholder='Example: +91 98******00'
                className="w-full mt-1 px-3 py-1 text-gray-700 bg-transparent outline-none border border-blue-gray-200 focus:border-indigo-600 shadow-sm rounded-md"
                id='phoneNumber'
                name='phoneNumber'
                onChange={(e) => handleChange(e)}
                value={data.phoneNumber}
              />
            </div>

            <div>
              <label className="font-medium">
                District
              </label>
              <input
                type="text"
                required
                placeholder='Example: Enter Location'
                className="w-full mt-1 px-3 py-1 text-gray-700 bg-transparent outline-none border border-blue-gray-200 focus:border-indigo-600 shadow-sm rounded-md"
                id='district'
                name='district'
                onChange={(e) => handleChange(e)}
                value={data.district}
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
                className="w-full mt-1 px-3 py-1 text-gray-700 bg-transparent outline-none border border-blue-gray-200 focus:border-indigo-600 shadow-sm rounded-md"
                id='age'
                name='age'
                onChange={(e) => handleChange(e)}
                value={data.age}
              />
            </div>

            <div>
              <label className="font-medium">
                Subject
              </label>
              <input
                type="text"
                required
                placeholder='Example: Enquire about...'
                className="w-full mt-1 px-3 py-1 text-gray-700 bg-transparent outline-none border border-blue-gray-200 focus:border-indigo-600 shadow-sm rounded-md"
                id='subject'
                name='subject'
                onChange={(e) => handleChange(e)}
                value={data.subject}
              />
            </div>

            <div>
              <label className="font-medium">
                Message
              </label>
              <textarea
                required
                placeholder='Write your query....'
                className="w-full mt-1 h-28 px-3 py-1 resize-none appearance-none bg-transparent outline-none border border-blue-gray-200 focus:border-indigo-600 shadow-sm rounded-md"
                id='message'
                name='message'
                onChange={(e) => handleChange(e)}
                value={data.message}
              >
              </textarea>
            </div>

            <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-md duration-150">
              Submit
            </button>

          </div>

        </form>
      </main>
    </section>
  )
}

export default ContactFormPage
