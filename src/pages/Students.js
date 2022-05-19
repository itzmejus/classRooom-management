import React, { useEffect, useState } from 'react'
import axios from "axios";

function Students() {
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
        <div className='middle' style={{ justifyContent: "center" }}>
            <div class="flex-container">
                <div id='red' onclick='ar()'>
                </div>
                <div id='green' onclick='ar()'></div>
                <div id='grey' onclick='ar()'></div>
            </div>

            <div class="container2">
                <div>
                    <label id='text'>ClassRoom</label>
                </div>
                <div>
                    <label id='text'>Teacher</label>
                </div>
                <div>
                    <label id='text'>Taken</label>
                </div>
            </div>

            <div class="container3">   
                <table class='table1'>
                    <tr>
                        <td>
                            <div onclick="ar()" class="seat">
                            </div>
                        </td>
                    </tr>
                </table>
                <table class='table2'>
                    <tr>
                        <td>
                            <div onclick="ar()" class="seat"></div>
                        </td>

                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Students