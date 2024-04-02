import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    // Define your form fields here
    fname: '',
    uname: '',
    uemail: '',
    uphone: '',
    password: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
    fname: formData.fname,
    uname: formData.uname,
    uemail: formData.uemail,
    uphone: formData.uphone,
    password: formData.password,
    }
    

    try {
      await axios.post('http://localhost:3001/register', { fname: user.fname, uname: user.uname, uemail: user.uemail, uphone: user.uphone, password: user.password});
      console.log('Data inserted successfully');
      // Reset form fields after successful submission if needed
      alert('User Registered ');
      navigate("/login");
    
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };
     
  return (
    <div class="w-full h-screen  p-4 flex items-center justify-center bg-gray-100 h-auto block" >
    <div class="bg-white py-6 px-10 sm:max-w-md w-full ">
        <div class="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
            Registration Form 
        </div>
        <div class="">
            <div>
                 <input name='fname' value={formData.fname} onChange={handleChange} type="text" class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"  placeholder="Full Name "/>
            </div>
            <div>
                 <input name='uname' value={formData.uname} onChange={handleChange} type="text" class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8"  placeholder="User Name "/>
            </div>
            <div>
                 <input name='uemail' value={formData.uemail} onChange={handleChange} type="email" class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="Email Address "/>
            </div>
             <div>
            <input name='uphone' value={formData.uphone} onChange={handleChange} type="text" class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="Phone Number "/>
            </div>
            <div class="">
                <input name='password' value={formData.password} onChange={handleChange} type="password" class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="Password " />
            </div>
            <div class="flex">
                <input type="checkbox" class="border-sky-400 " value="" />
                <div class="px-3 text-gray-500">
                    I accept terms & conditions 
                </div>
            </div>
            <div class="flex justify-center my-6">
                <button onClick={handleSubmit} class=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold " >
                    Create Account
                </button>
            </div>
            <div class="flex justify-center ">
                <p class="text-gray-500">Already have an acount? </p>
                <a href="/login" class="text-sky-600 pl-2"> Sign In</a>
            </div>
        </div>
    </div>
</div>
  )
}

export default Register