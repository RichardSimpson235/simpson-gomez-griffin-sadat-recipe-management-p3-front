import React from "react";
import { useNavigate } from 'react-router-dom';
// import './header.css';

function Header({ user, handler }) {

    const navigate = useNavigate();

    const logout = () => {
        handler();
        navigate('/login');
    }

    return (
        <div className="container">
            <div className="row align-items-center header-ctn">
            <div className="col-1">
                <img className="img-fluid" src="https://media1.thehungryjpeg.com/thumbs2/800_3971511_rj3k9j6t4brmnxpfr2photci1ltvrs6wkge1zovd_bread-toaster-icon-simple-style.jpg"></img>
            </div>
            <div className="col-8 d-flex justify-content-center"> 
                <h4 className="h4">Welcome {user.firstName + " " + user.lastName}</h4>
            </div>
            <div className="col-3">
                <button onClick={logout} className="btn btn-dark">Logout</button>
            </div>
            </div>
        </div>
    )
}

export default Header;