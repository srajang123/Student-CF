import React,{useState} from 'react';
import '../styles/Login.css';
function Login(){
    const [uname,Uname]=useState('');
    const [pass,Pass]=useState('');
    const SUBMIT=e=>{
        e.preventDefault();
    }
    const UNAME=e=>{
        Uname(e.target.value);
    }
    const PASS=e=>{
        Pass(e.target.value);
    }
    return(
        <div class="login">
            <div class="login-form">
                <form onSubmit={SUBMIT}>
                    <table>
                        <tr>
                            <td>
                                <label>Name</label>
                                <br/>
                                <input type="text" placeholder="Username" className="input" value={uname} onChange={UNAME}/>
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
                                <input type="submit" value="LOGIN" className="btn"/>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    )
}
export default Login;