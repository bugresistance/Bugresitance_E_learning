const express = require('express');
const _ = require('lodash');
const cookieParser = require('cookie-parser');
const router = express.Router();
const app = express();
const  { Bazar, Slider} = require('../model/slider')
const auth = require('../Middleware/authorization')
const mongoose = require('mongoose');
const { User } = require('../model/user');
const { CourseDate } = require('../model/coursedate');
const { ObjectId } = mongoose.Types;
app.use(cookieParser())


const addSlider = async (req,res) =>{
    const {say,name,job,url} = req.body
    console.log(req.body);
    if(!say || !name || !job ||!url){
        return res.status(400).json({message:"fill all the fields"})
    }
    const slider = new Slider({say,name,job,url})

    const addSlider = await slider.save()
    return res.status(200).send({data:addSlider})
}

const getSlider = async (req,res)=>{
  const data = await Slider.find()
  return res.status(200).send(data)
}

const addCourseDate = async(req,res)=>{
  const {time} = req.body
  if(!time) return res.status(400).json({message:"Fill The Course Time Field"})
  const courseTime = new CourseDate({dateandtime:time})

  const addCourseTime = await courseTime.save()
  return res.status(200).send({data:addCourseTime})
}

const getCourseTime=async(req,res)=>{
const data = await CourseDate.find().limit(1).sort({createdAt:-1})
  return res.status(200).send(data)
}

router.route('/addslider')
    .post(addSlider)
router.route('/addcoursedate')
    .post(addCourseDate)
router.route('/getdata')
  .get(getSlider)
router.route('/getcoursedateandtime')
  .get(getCourseTime)


module.exports = router