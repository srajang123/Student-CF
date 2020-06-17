import React,{Component} from 'react';

function Add({Name,Age,Gender,CF,RESET,New,SUBMIT}){
    return (
        <div className="form">
            <form name="add-student">
                <table>
                    <tr>
                        <th>Name</th>
                        <td><input type="text" name="name" value={New.name} onChange={Name} /></td>
                    </tr>
                    <tr>
                        <th>Age</th>
                        <td><input type="text" name="age" value={New.age} onChange={Age} /></td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>
                            <select name="gender" value={New.gender} onChange={Gender}>
                                <option value="-1">Select Gender</option>
                                <option value="m">Male</option>
                                <option value="f">Female</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>Codeforces Username</th>
                        <td><input type="text" name="cf" value={New.cf} onChange={CF} /></td>
                    </tr>
                    <tr>
                        <td>
                            <input type="button" value="SUBMIT" onClick={SUBMIT} />
                        </td>
                        <td>
                            <input type="reset" value="RESET" onClick={RESET} />
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    )
}
export default Add;