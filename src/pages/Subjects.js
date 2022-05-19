import React, { useEffect, useState } from 'react'
import axios, { Axios } from "axios";
import '../styles/Subjects.css'


function Subjects() {
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState('')

    useEffect(() => {
        axios.get("https://hamon-interviewapi.herokuapp.com/subjects/?api_key=017a8").then((res) => {
            setData(res.data.subjects)
        })
    }, [])

    const getIndividualSubject = (val) => {
        setCurrent(val);
    }
    return (
        <div className='center sub-one'>
            {/* {data.map((val, key) => {
                return (
                    <div class="card" key={key}>
                        <div class="containe">
                            <img src="https://www.w3schools.com/howto/img_avatar2.png"
                                alt="Avatar"
                                style={{ width: 100 }} />
                            <h4><b>{val.name}</b></h4>
                            <p>{val.teacher}</p>
                            <button type="button"
                                class="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                                onClick={() => { getIndividualSubject(val) }}>
                                View</button>
                        </div>
                    </div>
                )
            })} */}

<div class="cards-list">

{data.map((val, key) => {
    return (
        // <div>
        //     {item.layout}
        //     <h1>{item.name}</h1>
        //     <h1>{item.size}</h1>
        // </div>
        <div class="card 1">
            <div class="card_image"> <img src="https://images.pexels.com/photos/8544932/pexels-photo-8544932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => {
                    getIndividualSubject(val)
                }}
            /> </div>
            <div class="card_title title-white">
                <p>{val.layout}</p>
                <span style={{color:"ActiveCaption"}}>{val.name}</span>
                <h2></h2>
            </div>
        </div>
    )
})}
</div>
            <div class="modal fade" id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title"
                                id="staticBackdropLabel">Teacher Info</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <table class="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Subject</th>
                                        <th scope="col">Teacher</th>
                                        <th scope="col">Credits</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>  {current.id}</td>
                                        <td> {current.name}</td>
                                        <td>  {current.teacher}</td>
                                        <td>  {current.credits}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div class="modal-footer">
                            <button type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal">
                                Close</button>
                            <button type="button"
                                class="btn btn-primary">
                                Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Subjects

