import React,{Component} from 'react';

export default class View extends Component
{
    componentDidMount=()=>{
        document.title="View Students";
    }
    render=()=>{
        return(
            <div className="view">
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Codeforces Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map(el=>(
                            <tr>
                                <td>1</td>
                                <td><a href={'/stud/'+el.cf}>{el.name}</a></td>
                                <td>{el.age}</td>
                                <td>{el.gender == 'm' ? 'Male' : 'Female'}</td>
                                <td>{el.cf}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}