import React, { Component } from 'react';
import axios from 'axios';
export default class View extends Component {
    constructor(props){
        super(props);
        this.state={
            total:0,
            rating:0,
            solved:[]
        }
    }
    componentDidMount = () => {
        document.title = "View Students";
        let data={
            total:0,
            rating:0,
            solved:[]
        }
        const URL1 = 'https://codeforces.com/api/user.status?handle=' + window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
        axios.get(URL1)
            .then(res => {
                data.total = res.data.result.filter(e => e.verdict === 'OK').length;
                data.solved = res.data.result.filter(e => e.verdict === 'OK').map(el=>el.problem.name)
                this.setState({
                    total: data.total,
                    solved:data.solved
                })
            })
        const URL2 = 'https://codeforces.com/api/user.info?handles=' + window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
        axios.get(URL2)
            .then(res => {
                data.rating = res.data.result[0].rating;
                this.setState({
                    rating: data.rating
                })
            })
    }
    render = () => {
        if(this.props.data)
        {
            let mydata = this.props.data.filter(el => el.cf == window.location.href.substr(window.location.href.lastIndexOf('/') + 1));
            mydata=mydata[0];
            if(mydata)
            {
                return (
                    <div>
                        <div className="view">
                            <table>
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
                            </table>
                        </div>
                        <div className='fetch-cf'>
                            <div className='summary'>
                                <h3>Total Questions Solved: {this.state.total}</h3>
                                <h3>Current Rating: {this.state.rating}</h3>
                            </div>
                            <div className='submissions'>
                                <table>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Problem</th>
                                    </tr>
                                    {this.state.solved.map((ques,index)=>(
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>{ques}</td>
                                        </tr>
                                    ))}
                                </table>
                            </div>
                        </div>
                    </div>
                )
            }
        }
        return (<div>SS</div>)
    }
    }