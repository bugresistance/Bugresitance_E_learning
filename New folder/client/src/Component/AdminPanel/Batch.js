import {  Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Batch = ({setLoading}) => {
    const [batch, setBatch] = useState('')
    const addBatch = async () => {
        setLoading(true)
        const res = await fetch(`${process.env.REACT_APP_URL}/addbatch`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                batchName:batch
            })
        })
        const data = await res.json()
        if (res.status === 200) {
            toast("Added Successfully", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setBatch('')
            setLoading(false)
        } else {
            toast(data.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setLoading(false)
        }
    }
  return (
    <div>
        <div className='course_date'>
                            <h3>Add Batch No</h3>
                            <TextField
                                id="outlined-textarea"
                                label="Batch No"
                                placeholder="Date And Time"
                                sx={{ width: '50%' }}
                                onChange={(e) => { setBatch(e.target.value) }}
                            />
                            <Button variant="contained" component="label" sx={{ marginTop: "50px" }} onClick={addBatch}>
                                Add Batch No
                            </Button>
                        </div>
    </div>
  )
}

export default Batch