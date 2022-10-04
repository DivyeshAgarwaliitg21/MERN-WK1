import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserDashBoard from './UserDashboard';
import "./Adduser.css"

const Adduser = () => {
    const [data,setData] = useState([{}]);
    useEffect(() => {
        getUser();
        console.log(data);
    },[]);
    const getUser = async () => {
        await axios
        .get("http://localhost:4000/posts")
        .then((res)=> setData(res.data));
    getUser();
    };
    const [formData,setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        password: ""
    });

    const handleFormSubmit= async(e) => {
        let response= await axios.post("http://localhost:4000/posts",formData);
        if(response){
            alert("Data submitted successfully");
        } else {
            alert("Something went wrong");
        }

        setFormData({
            name: "",
            mobile: "",
            email: "",
            password: ""
        });
        getUser();
};
    const handleDelete = async(ID)=> {
        await axios.delete("http://localhost:4000/posts/" +ID).then((res) => alert("Information deleted successfully"));
        getUser();
    };
    return ( 
        <div className="container">

            <div className="row">

                <div className="col-md-7">
                    <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Add User Form</h1>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={formData.name} onChange={(e) => setFormData({...formData,name:e.target.value})} />
                </div>

                {/* <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div> */}
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={formData.mobile} onChange={(e) => setFormData({...formData,mobile:e.target.value})} />
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={formData.email} onChange={(e) => setFormData({...formData,email:e.target.value})} />
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">password</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={formData.password} onChange={(e) => setFormData({...formData,password  :e.target.value})} />
                </div>
                <button className="btn-success" onClick={handleFormSubmit}>Add User</button>
                <div>
                <h1>User Dashboard</h1>
                </div>
                <table class="table table-dark table-hover">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((user) => (
                            <tr>
                            <th scope="row">{user.ID}</th>
                            <td>{user.name}</td>
                            <td>{user.mobile}</td>
                            <td>{user.Email}</td>
                            <td style={{
                                display : "flex",
                                justifyContent:'space-between'}}>
                                <button className="btn-edit">Edit</button>
                                <button className="btn-delete" onClick={() => handleDelete(user.ID)}>Delete</button>
                            </td>
                            </tr>
                    ))}
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    );
};
export default Adduser;