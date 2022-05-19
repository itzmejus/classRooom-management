import React, { useEffect, useState } from 'react'
import axios from "axios";
import '../styles/ClassRoom.css'
import book from '../images/book.png'


function ClassRoom() {
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState('')

    useEffect(() => {
        axios.get("https://hamon-interviewapi.herokuapp.com/classrooms/?api_key=017a8").then((res) => {
            setData(res.data.classrooms)
        })
    }, [])
    console.log(data);
    const getIndividualClass = (val) => {
        setCurrent(val);
    }

    return (
        <div>

            <div class="cards-list">

                {data.map((item, key) => {
                    return (
                        // <div>
                        //     {item.layout}
                        //     <h1>{item.name}</h1>
                        //     <h1>{item.size}</h1>
                        // </div>
                        <div class="card 1">
                            <div class="card_image"> <img src="https://images.pexels.com/photos/4195504/pexels-photo-4195504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => {
                                    getIndividualClass(item)
                                }}
                            /> </div>
                            <div class="card_title title-white">
                                <p>{item.layout}</p>
                                <span style={{color:"ActiveCaption"}}>{item.name}</span>
                                <h2></h2>
                            </div>
                        </div>
                    )
                })}
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
                                        <th scope="col">Size</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>  {current.id}</td>
                                        <td> {current.name}</td>
                                        <td> {current.size}</td>
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
    )
}

export default ClassRoom