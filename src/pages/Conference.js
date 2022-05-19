import React, { useEffect, useState } from 'react'
import '../styles/Conference.css'
import axios from "axios";


function Conference() {
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState('')

    useEffect(() => {
        axios.get("https://hamon-interviewapi.herokuapp.com/students/?api_key=017a8").then((res) => {
            setData(res.data.students)
        })
    }, [])

    const getIndividualStudent = () => {
        {
            data.map((val, key) => {

                setCurrent(val);
            })
        }
        console.log(current);
    }
    return (
        <div >
            <div className='makeCenter'>
                <div class="flex-container">
                    <div id='red' onclick='ar()' 
                    >
                    </div>
                    <div id='green' onclick='ar()' data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                        onClick={() => { getIndividualStudent() }} ></div>
                    {/* <div id='grey' onclick='ar()'></div> */}
                </div>


                <div class="container2">
                    <div>
                        <label id='text'>Students</label>
                    </div>
                    <div>
                        <label id='text'>Teacher</label>
                    </div>
                    {/* <div>
                    <label id='text'>Taken</label>
                </div> */}
                </div>

                <div class="container3">

                    <table class='table1'>
                        <tr>
                            <td>
                                <div onclick="ar()" class="seat"></div>
                            </td>
                            <td>
                                <div onclick="ar()" class="seat"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div onclick="ar()" class="seat"></div>
                            </td>
                            <td>
                                <div onclick="ar()" class="seat"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div onclick="ar()" class="seat"></div>
                            </td>
                            <td>
                                <div onclick="ar()" class="seat"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div onclick="ar()" class="seat"></div>
                            </td>
                            <td>
                                <div onclick="ar()" class="seat"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div onclick="ar()" class="seat"></div>
                            </td>
                            <td>
                                <div onclick="ar()" class="seat"></div>
                            </td>
                        </tr>
                    </table>
                    <table class='table2'>
                        <tr>
                            <td>
                                <div onclick="ar()" class="seat"></div>
                            </td>
                            <td>
                                <div onclick="ar()" class="seat"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div onclick="ar()" class="seat"></div>
                            </td>
                            <td>
                                <div onclick="ar()" class="seat"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div onclick="ar()" class="seat"></div>
                            </td>
                            <td>
                                <div onclick="ar()" class="seat"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div onclick="ar()" class="seat"></div>
                            </td>
                            <td>
                                <div onclick="ar()" class="seat"></div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div onclick="ar()" class="seat"></div>
                            </td>
                            <td>
                                <div onclick="ar()" class="seat"></div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Layout Info</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <table class="table table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>  {current.id}</td>
                                            <td> {current.name}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conference