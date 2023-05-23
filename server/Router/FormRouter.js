const express = require('express');
const _ = require('lodash');
const cookieParser = require('cookie-parser');
const router = express.Router();
const app = express();
const auth = require('../Middleware/authorization')
const mongoose = require('mongoose');
const { Batch } = require('../model/batch');
const { Form } = require('../model/Form');
const { ObjectId } = mongoose.Types;
app.use(cookieParser())


const addBatch = async (req,res) =>{
    const {batchName} = req.body
    console.log(req.body);
    if(!batchName){
        return res.status(400).json({message:"fill all the fields"})
    }
    const batch = new Batch({batchName})

    const newBatch = await batch.save()
    return res.status(200).send({data:newBatch})
}

const getAllBatch = async(req,res)=>{
    const allBatch = await Batch.find()

    if(!allBatch) return res.status(400).json({message:"Something went wrong"})

    return res.status(200).send(allBatch)
}

const getLatestBatch = async(req,res)=>{
    const getLatestBranch = await Batch.find().limit(1).sort({batchName:-1})

    if(!getLatestBranch) return res.status(400).json({message:"Something went wrong"})

    return res.status(200).send(getLatestBranch)
}

const addStudent =async(req,res)=>{
    const {studentName,Email,mobileNumber,universityName,transactionId,facebookId,formalPic,batchId} = req.body
    console.log(req.body);
    if(!studentName||!Email||!mobileNumber||!universityName||!transactionId||!facebookId||!batchId){
        return res.status(400).json({message:"fill all the fields"})
    }
    const newForm = new Form(req.body)

    const newStudent = await newForm.save()
    return res.status(200).send({data:newStudent})
}

const getIndividual = async(req,res)=>{
    const id = req.params.id
    console.log(id);
    if(id === 'default'){
        const getLatestBranch = await Batch.find().limit(1).sort({batchName:-1})
        const allInfo = await Form.find({batchId:getLatestBranch[0]._id}).populate('batchId','batchName')
        if(!allInfo) return res.status(400).json({message:"Something Went Wrong"})
        return res.status(200).send(allInfo)
    }else{
        const allInfo = await Form.find({batchId:id}).populate('batchId','batchName')
        if(!allInfo) return res.status(400).json({message:"Something Went Wrong"})
        return res.status(200).send(allInfo)
    }
    
}


router.route('/addbatch')
    .post(addBatch)
router.route('/addstudent')
    .post(addStudent)
router.route('/getAllBatch')
    .get(getAllBatch)
router.route('/getLatestBatch')
    .get(getLatestBatch)
router.route('/getindividualbatch/:id')
    .get(getIndividual)



module.exports = router