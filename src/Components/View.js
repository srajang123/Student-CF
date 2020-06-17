import React,{useEffect} from 'react';

function View({Data}){
    useEffect(()=>{
        document.title='View Students';
    })
    return (
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
                    {Data.map((el,idx) => (
                        <tr>
                            <td>{idx+1}</td>
                            <td><a href={'/stud/' + el.cf}>{el.name}</a></td>
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
export default View;