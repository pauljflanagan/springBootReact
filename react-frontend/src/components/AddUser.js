import React, { useEffect } from "react";
import UserService from "../services/UserService";

export default function AddUser() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const {id} = useParams();

    function saveOrUpdateUser(e) {
        e.preventDefault();

        const user = {firstName, lastName, email}

        if (id) {
            UserService.updateUser(id, user)
                .then(res => {
                    history.push('/users')
                })
                .catch(err => {
                    console.log(error);
                })
        } else {
            UserService.createUser(user)
                .then((res) => {
                    console.log(res.data);
                    history.push('/users');
                }) .catch(err => {
                    console.log(err);
                })
        }
    }

    useEffect(() => {
        UserService.getEmployeeById(id).then((res) => {
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setEmail(res.data.email);
        }) .catch((err) => {
            console.log(err);
        })
    })

    function title() {
        if (id) {
            return <h2 className="text-center">Update Employee</h2>
        } else {
            return <h2 className="text-center">Add Employee</h2>
        }
    }

    render(
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb2">
                                <label className="form-label">First Name: </label>
                                <input 
                                    type = "text"
                                    placeholder = "Enter First Name"
                                    name = "firstName"
                                    className = "form-control"
                                    value = {firstName}
                                    onChange = {(e) => setFirstName(e.target.value)}
                                >
                                </input>
                            </div>
                            
                            <div className="form-group mb2">
                                <label className="form-label">Last Name: </label>
                                <input 
                                    type = "text"
                                    placeholder = "Enter Last Name"
                                    name = "lastName"
                                    className = "form-control"
                                    value = {lastName}
                                    onChange = {(e) => setLastName(e.target.value)}
                                >
                                </input>
                            </div>

                            <div className="form-group mb2">
                                <label className="form-label">Email: </label>
                                <input 
                                    type = "text"
                                    placeholder = "Enter Email"
                                    name = "email"
                                    className = "form-control"
                                    value = {email}
                                    onChange = {(e) => setEmail(e.target.value)}
                                >
                                </input>
                            </div>

                            <button className="btn btn-success" 
                            onClick={(e) => saveOrUpdateUser(e)}> Submit </button>
                            <Link to="/users" className="btn btn-danger"> Cancel </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}