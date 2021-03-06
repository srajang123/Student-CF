import React, { useEffect,useState } from 'react';
import axios from 'axios';
import '../styles/Stud.css';

function Stud({Data}){
    const [total,UpdateTotal]=useState(0);
    const [rating,UpdateRating]=useState(0);
    const [solved,UpdateSolved]=useState([]);
    useEffect(() => {
        document.title = "View Students";
        let data = {
            total: 0,
            rating: 0,
            solved: []
        }
        const URL1 = 'https://codeforces.com/api/user.status?handle=' + window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
        axios.get(URL1)
            .then(res => {
                data.total = res.data.result.filter(e => e.verdict === 'OK').length;
                data.solved = res.data.result.filter(e => e.verdict === 'OK').map(el => el.problem.name)
                UpdateTotal(data.total);
                UpdateSolved(data.solved);
            })
        const URL2 = 'https://codeforces.com/api/user.info?handles=' + window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
        axios.get(URL2)
            .then(res => {
                data.rating = res.data.result[0].rating;
                UpdateRating(data.rating);
            })
    })
    let mydata=Data.filter(el => el.cf === window.location.href.substr(window.location.href.lastIndexOf('/') + 1));
    mydata = mydata[0];
    if(mydata)
    {
        return (
            <div class='stud'>
                <div className="view-stud">
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>{mydata.name}</td>
                            </tr>
                            <tr>
                                <th>Age</th>
                                <td>{mydata.age}</td>
                            </tr>
                            <tr>
                                <th>Gender</th>
                                <td>{mydata.gender === 'm' ? 'Male' : 'Female'}</td>
                            </tr>
                            <tr>
                                <th>Total Questions Solved</th>
                                <td>{total}</td>
                            </tr>
                            <tr>
                                <th>Current Rating</th>
                                <td>{rating}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='fetch-cf'>
                    <div className='submissions'>
                        <table>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Problem</th>
                                </tr>
                            </thead>
                            <tbody>
                            {solved.map((ques, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{ques}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
        return (<div></div>)
}
export default Stud;