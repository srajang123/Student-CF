import React from 'react';
import '../styles/Header.css';
import {Link} from 'react-router-dom';

function Header(){
    let c1, c2;
    c1='link-but';
    c2='link-but active';
    let Addr = '/'+window.location.href.substr(window.location.href.lastIndexOf('/') + 1)
    return (
        <div className='header'>
            <h1>Student Data App</h1>
            <span class="links">
                <a href="/" className={Addr==='/'?c2:c1}>Home</a>
                <a href="/View" className={Addr === '/View' ? c2 : c1}>View Students</a>
                <a href="/Add" className={Addr === '/Add' ? c2 : c1}>Add Students</a>
            </span>
        </div>
    );
}
export default Header;