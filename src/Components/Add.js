import React,{Component} from 'react';

export default class Add extends Component
{
    render=()=>{
        return(
            <div className="form">
                <form name="add-student">
                    <table>
                        <tr>
                            <th>Name</th>
                            <td><input type="text" name="name" value={this.props.new.name} onChange={this.props.Name} /></td>
                        </tr>
                        <tr>
                            <th>Age</th>
                            <td><input type="text" name="age" value={this.props.new.age} onChange={this.props.Age} /></td>
                        </tr>
                        <tr>
                            <th>Gender</th>
                            <td>
                                <select name="gender" value={this.props.new.gender} onChange={this.props.Gender}>
                                    <option value="-1">Select Gender</option>
                                    <option value="m">Male</option>
                                    <option value="f">Female</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>Codeforces Username</th>
                            <td><input type="text" name="cf" value={this.props.new.cf} onChange={this.props.CF}/></td>
                        </tr>
                        <tr>
                            <td>
                                <input type="button" value="SUBMIT" onClick={this.props.SUBMIT}/>
                            </td>
                            <td>
                                <input type="reset" value="RESET"onClick={this.props.RESET}/>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        )
    }
}