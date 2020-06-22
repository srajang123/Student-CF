import React,{useState} from 'react';
import axios from 'axios';
import '../styles/Register.css';
function Register(){
    const [uname,Uname]=useState('');
    const [pass,Pass]=useState('');
    const [name,Name]=useState('');
    const [contact,Contact]=useState('');
    const SUBMIT=e=>{
        e.preventDefault();
        axios.post('http://localhost:5000/register')
        .then(res=>{
            console.log(res);
        })
        .catch(err=>console.log('Error: '+err));
    }
    const UNAME=e=>{
        Uname(e.target.value);
    }
    const PASS=e=>{
        Pass(e.target.value);
    }
    const NAME=e=>{
        Name(e.target.value);
    }
    const CONTACT=e=>{
        Contact(e.target.value);
    }
    return(
        <div className="register">
            <div className="register-form">
                <form onSubmit={SUBMIT}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label>Name</label>
                                    <br/>
                                    <input type="text" placeholder="Name" className="input" value={name} onChange={NAME}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Username</label>
                                    <br/>
                                    <input type="text" placeholder="Username" className="input"  value={uname} onChange={UNAME}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Contact</label>
                                    <br/>
                                    <input type="text" placeholder="Contact" className="input" value={contact} onChange={CONTACT}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Password</label>
                                    <br/>
                                    <input type="password" placeholder="Password" className="input" value={pass} onChange={PASS}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="submit" value="REGISTER" className="btn"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}
export default Register;