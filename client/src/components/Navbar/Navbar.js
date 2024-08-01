import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="#">SliceExpress</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-sec">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cart</a>
                        </li>
                       
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar