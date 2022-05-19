import React, { useEffect, useState } from 'react'
import '../styles/HomePage.css'
import axios, { Axios } from "axios";
import tt from '../images/prof.png'

function HomePage() {
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState('')

    useEffect(() => {
        axios.get("https://hamon-interviewapi.herokuapp.com/students/?api_key=017a8").then((res) => {
            setData(res.data.students)
        })
    }, [])

    const getIndividualStudent = (val) => {
        setCurrent(val);
    }

    return (
        <div>
            <div className='center' style={{ backgroundColor: 'none' }}>
                <div className='class-table'>
                    <p>
                        Class : 10B <br />
                        Boys : {data.length-20} <br />
                        Girls : {data.length}
                    </p>
                </div>
            </div>
            <div>
                <div class="cardsList">
                    {data.map((val, key) => {
                        return (
                            <div class="cardOne">
                                <div class="card_image"> <img src="https://images.pexels.com/photos/2393793/pexels-photo-2393793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => {
                                        getIndividualStudent(val)
                                    }}
                                /> </div>
                                <div class="card_title title-white">
                                    <p>{val.layout}</p>
                                    <span style={{ color: "ActiveCaption" }}>{val.name}</span>
                                    <h2></h2>
                                </div>
                            </div>
                        )
                    })}


                    {/* <!-- Modal --> */}

                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Student Info</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <table class="table table-dark">
                                        <thead>
                                            <tr>
                                                <th scope="col">Id</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Age</th>
                                                <th scope="col">Email</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>  {current.id}</td>
                                                <td> {current.name}</td>
                                                <td>  {current.age}</td>
                                                <td>  {current.email}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default HomePage

