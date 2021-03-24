import React from 'react';
import PropTypes from 'prop-types';

const Header = ({users, setUsers}) => {
    const [isOpen, setIsOpen]=React.useState(false);
    const [activeUsers, setActiveUsers]=React.useState(users);
    const [searchLine, setSearchLine]=React.useState('');
    const handleClose=()=>{
        setIsOpen(false);
    }
    const handleOpen=()=>{
        setIsOpen(true);
    }
    const goFind=(event)=>{
        event.code==="Enter" && findData()
    }
    const findData=()=>{
        setUsers(activeUsers);
    }
    const changeLine=(event)=>{
        setSearchLine(event.target.value);
        const result=users.filter((user)=>user.login.includes(event.target.value));
        setActiveUsers([...result]);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
                </li>
            </ul>
            <div onFocus={handleOpen} onBlur={handleClose} className="d-flex">
                <input value={searchLine} onChange={changeLine} onKeyDown={goFind} className="form-control me-2" placeholder="Search" />
                <button onClick={findData} className="btn btn-outline-success" type="submit">Search</button>
            </div>
            <div className='dropdown'>
            {isOpen && (
                <div>
                    {activeUsers.map((user)=>(
                        <div key={user.id}>{user.login}</div>
                    ))}
                </div>
            )}
            </div>
            </div>
        </div>
    </nav>
    );
};

Header.propTypes = {};

export default Header;