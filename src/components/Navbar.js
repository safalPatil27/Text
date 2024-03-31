import React from 'react'
import {Link} from 'react-router-dom'



export default function Navbar(props) {
    const Bodyblue=()=>{
      document.body.style.backgroundColor="#000066";
      

    }

    const BodyGray=()=>{
      document.body.style.backgroundColor="gray"
    }

    const BodyGreen=()=>{
      document.body.style.backgroundColor="#004d00"
    }

    const BodyRed=()=>{
      document.body.style.backgroundColor="#4d0000"
    }

    
  
  return (
    <div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="/">Navbar</a> */}
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">{props.content}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/table">{props.head}</Link>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li> */}
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">{props.active}</a>
        </li> */}
      </ul>
          <div className='' >
              <span class="badge text-bg-primary mx-2" onClick={Bodyblue} style={{cursor:'pointer'}}>.</span>
              <span class="badge text-bg-secondary mx-2" onClick={BodyGray} style={{cursor:'pointer'}}>.</span>
              <span class="badge text-bg-success mx-2" onClick={BodyGreen} style={{cursor:'pointer'}}>.</span>
              <span class="badge text-bg-danger mx-2" onClick={BodyRed} style={{cursor:'pointer'}}>.</span>
          </div>
          <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}`} >
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> {props.mode} Mode</label>
        </div>
    </div>
  </div>
</nav>

    </div>
  )
}
