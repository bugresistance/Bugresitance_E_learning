import { Avatar, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import NavbarTop from '../Shared/NavbarTop';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const StudentDetails = () => {
    const navigate = useNavigate()

    const [age, setAge] = useState('');
    const [batch, setBatch] = useState([])
    const [loading, setLoading] = useState(false)
    const [paramId, setParamId] = useState('default')
    const [studentInfo, setStudentInfo] = useState([])
    const handleChange = (event) => {
        console.log(event.target.value);
        batchData(event.target.value)
    };

    const getAllBatch = async () => {
        const res = await fetch(`${process.env.REACT_APP_URL}/getAllBatch`, {
            method: "GET",
        })
        const data = await res.json()
        console.log(data);
        if (res.status === 200) {
            setBatch(data)
            setLoading(false)
        } else {
            setLoading(false)
        }
    }

    const batchData = async (id) => {
        const res = await fetch(`${process.env.REACT_APP_URL}/getindividualbatch/${id}`, {
            method: "GET",
        })
        const data = await res.json()
        console.log(data);
        if (res.status === 200) {
            setStudentInfo(data)
            setLoading(false)
        } else {
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllBatch()
        batchData(paramId)
    }, [])

    return (
        <div>
            <NavbarTop />
            <div style={{ width: '100vw', marginTop: "100px" }}>
                <Button variant="contained" component="label" sx={{ marginTop: "50px", marginLeft: "30px" }} onClick={() => { navigate('/addslide') }}>
                    Go To Main Panel
                </Button>

            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: "50px", }}>
                Sort Batch Wise
                <Box sx={{ minWidth: 120,margin:"50px 0px 50px 0px" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Batch</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Batch"
                            onChange={handleChange}
                        >
                            {
                                batch.map((val, ind) => {
                                    return (
                                        <MenuItem value={val._id} >{val.batchName}</MenuItem>
                                    )
                                })
                            }

                        </Select>
                    </FormControl>
                </Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700, width: '100%' }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Student Name</StyledTableCell>
                                <StyledTableCell align="right">Email</StyledTableCell>
                                <StyledTableCell align="right">Mobile Number</StyledTableCell>
                                <StyledTableCell align="right">Uni Name</StyledTableCell>
                                <StyledTableCell align="right">transaction Id</StyledTableCell>
                                {/* <StyledTableCell align="right">Batch No</StyledTableCell> */}
                                <StyledTableCell align="right">Image</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {studentInfo && studentInfo.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.studentName}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.Email}</StyledTableCell>
                                    <StyledTableCell align="right">{row.mobileNumber}</StyledTableCell>
                                    <StyledTableCell align="right">{row.universityName}</StyledTableCell>
                                    <StyledTableCell align="right">{row.transactionId}</StyledTableCell>
                                    {/* <StyledTableCell align="right">{row.batchId.batchName}</StyledTableCell> */}
                                    <StyledTableCell align="left" >
                                        <Avatar src={row.formalPic} />
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div>
    )
}

export default StudentDetails