import React, { useEffect, useState } from 'react'
import axios from 'axios';
function ListUsers() {
    const [user,setUser] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (res) {
          // handle success
          setUser(res.data);
          console.log(res);
        })
        .catch(function (error) {
          // handle error
          alert(error);
          console.log(error);
        })
    });
  return (
    <div>
         <div class="container py-5">
            <div class="row text-center text-white mb-5">
                <div class="col-lg-7 mx-auto">
                    <h1 class="display-4">Users List</h1>
                </div>
                </div>
                {
         user.map(user => (

            <div class="row">
                <div class="col-lg-8 mx-auto">
        
                    <ul class="list-group shadow">
        
                        <li class="list-group-item">
        
                            <div class="media align-items-lg-center flex-column flex-lg-row p-3" >
                                <div class="media-body order-2 order-lg-1" >
                                <p class="font-italic text-muted mb-0 small" > #ID : {user.id}  </p>

                                    <h5 class="mt-0 font-weight-bold mb-2">{user.name} {user.username}</h5>
                                    <p class="font-italic text-muted mb-0 small">Email : {user.email} </p>
                                    <p class="font-italic text-muted mb-0 small">Phone Number : {user.phone} </p>
                                    <p class="font-italic text-muted mb-0 small">Web site : {user.website} </p>
                                    <div>
                                    <p class="font-italic text-muted mb-0 small">Address :   {user.address.street}  {user.address.city}  {user.address.suite}</p>  </div>
                                    <br /><p class="font-italic text-muted mb-0 small"> #Company </p><h6 class="font-weight-bold ">{user.company.name}</h6>
                                </div><img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="Generic placeholder " width="200" class="ml-lg-5 order-1 order-lg-2"/>
                            </div>
                        </li> 
                    </ul> 
<br />               </div>
                
            </div>
         ))
     }
      </div>
      
</div>
  )
}

export default ListUsers