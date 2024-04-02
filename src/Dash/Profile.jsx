import axios from 'axios';
import { useEffect, useState } from 'react'


const Profile = () => {

  // fectch user
  const [user, setUser] = useState(null);
  
  useEffect(() => {

    const fetchUserData = async () => {
        try {
            const response = await axios.get('http://localhost:5500/profile', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            setUser(response.data);
            console.log(user.username);
            console.log(user.password);
  
        } catch (err) {
            console.log('Error Fetching user profile data: ' + err)
        }
    }

    fetchUserData();
 }, [])

  return (
    <>
      <div>
          {user ? (
          <div class="w-2/3 mx-auto">
          <div class="bg-white shadow-md rounded my-6">
          <h1 style={{fontSize:'25px'}} className='text-align: items-center'> Welcome {user.username}</h1>
            <table class="text-left w-full border-collapse"> 
             <tbody>
                <tr class="hover:bg-grey-lighter">
                  <td class="py-4 px-6 border-b border-grey-light">User Id</td>
                  <td class="py-4 px-6 border-b border-grey-light">
                    <a class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">{user.id}</a>
                  </td>
                </tr>
                <tr class="hover:bg-grey-lighter">
                  <td class="py-4 px-6 border-b border-grey-light">User Name</td>
                  <td class="py-4 px-6 border-b border-grey-light">
                    <a lass="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">{user.username}</a>
                  </td>
                </tr>
                <tr class="hover:bg-grey-lighter">
                  <td class="py-4 px-6 border-b border-grey-light">Password</td>
                  <td class="py-4 px-6 border-b border-grey-light">
                    <a lass="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">{user.password}</a>
                  </td>
                </tr>
                <tr class="hover:bg-grey-lighter">
                  <td class="py-4 px-6 border-b border-grey-light">Subscription Plan Details</td>
                </tr>
                <tr class="hover:bg-grey-lighter">
                  <td class="py-4 px-6 border-b border-grey-light">Plan Name</td>
                  <td class="py-4 px-6 border-b border-grey-light">
                    <a lass="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">{user.planName}</a>
                  </td>
                </tr>
                <tr class="hover:bg-grey-lighter">
                  <td class="py-4 px-6 border-b border-grey-light">Plan Start Date</td>
                  <td class="py-4 px-6 border-b border-grey-light">
                    <a lass="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">{user.startdate}</a>
                  </td>
                </tr>
                <tr class="hover:bg-grey-lighter">
                  <td class="py-4 px-6 border-b border-grey-light">Plan End Date</td>
                  <td class="py-4 px-6 border-b border-grey-light">
                    <a lass="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">{user.enddate}</a>
                  </td>
                </tr>
                <tr class="hover:bg-grey-lighter">
                  <td class="py-4 px-6 border-b border-grey-light">Amount Paid</td>
                  <td class="py-4 px-6 border-b border-grey-light">
                    <a lass="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">&#8377; {user.amountpaid}</a>
                  </td>
                </tr>
               </tbody>
            </table>
          </div>
        </div>
        ):(
          <p>Loading data</p>
        )}
        </div>
              
      </>
      )
}

export default Profile