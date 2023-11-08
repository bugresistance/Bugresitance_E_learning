// import "./App.css";
import React, { useEffect, useState } from "react";
import topImage from "../../image/top_image.jpg";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CourseDescription from "./CourseDescription";
import Syllabus from "./Syllabus";
import WhySpecials from "./WhySpecials";
import ProjectAssignments from "./ProjectAssignments";
import SimpleAccordian from "./SimpleAccordian";
import WithCarousel from "./WithCarousel";
import CouresMaterial from "./CouresMaterial";
import BottomSticky from "./BottomSticky";
import Footer from '../Shared/Footer'
// import "bootstrap/dist/css/bootstrap.min.css"
import oneImg from "../../image/Fahim Hasan.jpg"
import secondImage from '../../image/Makid Hyder.jpg'
import thirdImage from '../../image/Mohoshi Haque.jpg'
import NavbarTop from "../Shared/NavbarTop";
import { Avatar } from "@mui/material";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import Loding from "../useHook/Loding";

let selectedValues = [
  "বিশ্ববিদ্যালয় পর্যায়ের শিক্ষার্থী (কম্পিউটার সায়েন্স/আইটি বিভাগ)",
  "বিশ্ববিদ্যালয় পর্যায়ের শিক্ষার্থী (নন-কম্পিউটার সায়েন্স বিভাগ)",
  "ইয়াং প্রফেশনাল",
  "ফ্রিল্যান্সার",
  "উদ্যোক্তা",
  "অন্যান্য",
];
const instructor = [
  {
    name: "Fahim Chowdhury",
    imgsrc: oneImg,
    title: "Instructor, Bug Resistance",
    content: "Software Engineer at Relisource Tech Ltd, having more than three years of experience in the Software Quality Assurance sector. Previously, he had been working in Tekarsh as a SQA Engineer. Besides regular duties, he loves to engage himself in producing something useful; using the creativity he has & the knowledge he has gained."
  },
  {
    name: "Mohoshi Haque",
    imgsrc: '',
    title: "Instructor, Bug Resistance",
    content: "Mohoshi Haque is a seasoned Software Quality Assurance (SQA) Instructor with over 2.5+ years of industry experience.Formerly an SQA professional at Jatri and A2Z, Mohoshi's extensive practical knowledge in SQA principles equips him to prepare students for success in the dynamic SQA field. His passion for mentoring and his ability to bridge the theory-practice gap make him an exceptional SQA instructor. Join Mohoshi Haque to embark on your journey into the world of Software Quality Assurance."
  },

  // {
  //   name: "Mohoshi Haque",
  //   imgsrc: thirdImage,
  //   title: "Mentor, Bug Resistance",

  //   content: "Graduating from Ahsanullah University of Science and Technology in CSE, I prefer to introduce myself as a Software Quality Assurance engineer, thriving to reach my  goals alongside my team members using agile strategies."
  // },
]
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, maxHeight: "100vh", overflowX: "auto", backgroundColor: "#F2ECFF", borderRadius: "0 0 10px 10px" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Main() {
  const [value, setValue] = React.useState(0);
  const [isTabWindow, setIsTabWindow] = useState(window.innerWidth);
  const [overlayHeight, setOverLayHight] = useState();
  const [right, setRight] = useState();
  const ref = useRef(null)
  const [imgLoad, setImgLoad] = useState(false);
  const imgRef = useRef();


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [loading, setLoading] = useState(false)

  // const [time,setTime] = useState('')

  const getData = async () => {
    setLoading(true)
    const res = await fetch(`${process.env.REACT_APP_URL}/getcoursedateandtime`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    if (res.status === 200) {
      console.log(data);
      // setTime(data[0].dateandtime)
      setLoading(false)
    } else {
      setLoading(false)
    }

  }
  // useLayoutEffect(() => {
  //     getData()
  // }, [])

  useLayoutEffect(() => {
    if (imgLoad) {
      const courseTop = document.querySelector(".course__top");
      // console.log("layout",courseTop.clientHeight);
      setOverLayHight(courseTop.clientHeight + 174)

    }
  }, [imgLoad])
  //
  useEffect(() => {
    // console.log("form use effect", ref.current.offsetHeight);

    function resizewidth() {
      setIsTabWindow(window.innerWidth)
      // console.log(window.innerWidth);
      const overlayDiv = document.querySelector(".div__overlay");
      const courseTop = document.querySelector(".course__top");
      const leftElement = document.querySelector(".course_addmission_main");
      setRight(leftElement.clientWidth)
      // console.log("left div position", leftElement.clientWidth + 10);
      setOverLayHight(courseTop.clientHeight + 174)
      // overlayDiv.clientHeight = courseTop.clientHeight 
      // console.log("course top", courseTop.clientHeight);
      // console.log("over lay",overlayDiv.clientHeight);


    }

    window.addEventListener('resize', resizewidth)
    return () => window.removeEventListener('resize', resizewidth)
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {loading ? <Loding /> :
        <>
          <NavbarTop />
          <div className="div__overlay" style={{ height: `${overlayHeight}px` }}></div>
          <main className="course_addmission_main" >
            <section className="course__top__section">
              <div className="course__top__section__wrapper">
                <div className="course__top" ref={ref} >
                  <div className="course__top_wrapper">
                    <div className="top_text_content">
                      <div className="top-h1">
                        <h1>কমপ্লিট SQA(Manual & Automation ) শিখুন</h1>
                      </div>
                      <div className="top-p">
                        <p>
                          SQA এর উপর আকর্ষণীয় ক্যারিয়ার বানানোর জন্য প্রয়োজনীয় থিউরী এবং প্রাক্টিক্যাল স্কিলগুলো শিখুন ৩ মাসের লাইভ ক্লাসের মধ্যে এবং ৬টি প্র্যাকটিক্যাল প্রজেক্টের মাধ্যমে।
                        </p>
                      </div>
                    </div>
                    <div className="gutter__div"></div>

                    <div className="top-image">
                      {/* <img src={topImage} onLoad={()=> setImgLoad(true)} ref={imgRef} alt="top pic" className="" loading="lazy" /> */}
                      <iframe id="player" onLoad={() => setImgLoad(true)} type="text/html" width="716" height="403" autoplay={1}
                        src="https://www.youtube.com/embed/jcQ2B0n5K-Y?enablejsapi=1&v=jcQ2B0n5K-Y&autoplay=1"
                        frameborder="0"></iframe>
                    </div>
                  </div>
                  {isTabWindow <= 768 && (
                    <div>
                      <div className="gutter__div"></div>
                      <aside className="course_side_content">
                        <CouresMaterial time={"13th Batch will start from: 26th November,2023."} />
                      </aside>
                    </div>
                  )}
                </div>

                <div className="" style={{}}>

                  {isTabWindow > 768 ? (

                    <Box className="box__class_tab">
                      <Tabs
                        className="tabs"

                        variant="fullWidth"
                        sx={{
                          display: "flex",
                          boxSizing: "border-box",
                          justifyContent: "space-evenly",
                          backgroundColor: "#F2ECFF",
                          borderRadius: '10px 10px 0 0',
                          zIndex: "1000",
                          "& button:hover": {
                            backgroundColor: "#5C2CC5",
                            color: "white",
                          },
                        }}
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                      >
                        <Tab className="tab" label="কোর্সের বিস্তারিত" {...a11yProps(0)} />
                        <Tab className="tab" label="সিলেবাস" {...a11yProps(1)} />
                        <Tab className="tab" label="কেন স্পেশাল" {...a11yProps(2)} />
                        <Tab className="tab" sx={{
                          width: {
                          }
                        }} label="প্রজেক্ট ও অ্যাসাইনমেন্ট" {...a11yProps(2)} />
                      </Tabs>
                      <TabPanel value={value} index={0}>
                        {/* course description */}
                        <CourseDescription />

                      </TabPanel>
                      <TabPanel value={value} index={1}>
                        {/* syllabus */}
                        <Syllabus />


                      </TabPanel>
                      <TabPanel value={value} index={2}>
                        {/* Why Specials */}
                        <WhySpecials />


                      </TabPanel>
                      <TabPanel value={value} index={3}>
                        {/* project assignment */}
                        <ProjectAssignments />

                      </TabPanel>
                      <div className="gutter__div"></div>



                      <section className="career__track" >
                        <div className="career__track__div">
                          <div className="career__track__wrapper">
                            <h2>ক্যারিয়ার ট্র্যাকের শিক্ষার্থীরা কী বলছেন?</h2>
                            <div className="comment__slider">
                              <WithCarousel />
                            </div>
                            <div className="gutter__div"></div>
                            <div className="faq__div">
                              <div className="faq__div__wrapper">
                                <h2>Frequently Answered Questions</h2>
                                <SimpleAccordian />
                              </div>
                            </div>
                            <div className="gutter__div"></div>
                            {/* <div className="gutter__div"></div> */}

                            <h2 style={{
                              fontSize: "24px", fontFamily: 'Hind Siliguri', fontWeight: "700", lineHeight: "39px"
                            }}>আপনি যার কাছ থেকে শিখবেন</h2>

                            <section className="career__track instructor__div">
                              {instructor.map((ins) => {
                                return (
                                  <>
                                    <div className="instructor__wrapper">

                                      <div className="course__instructor">
                                        <div className="instruuctor__header">
                                          <div className="instruuctor__image">
                                            <Avatar src={ins.imgsrc} sx={{ width: 90, height: 90 }} className="avatar__profile" />
                                          </div>
                                          <div className="instruuctor__name">
                                            <h2>{ins.name}</h2>
                                            <p>{ins.title}</p>
                                          </div>


                                        </div>

                                        {/* <div className="gutter__div"></div> */}
                                      </div>
                                      <div className="insturctor__details">
                                        <p>
                                          {ins.content}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="gutter__div"></div>

                                  </>
                                )
                              })}
                            </section>

                          </div>
                        </div>
                      </section>

                      <div className="gutter__div"></div>



                    </Box>

                  ) : (
                    <div className="minified__pannel">
                      <div><CourseDescription /></div>
                      <div><Syllabus /></div>
                      <div><WhySpecials /></div>
                      <div><ProjectAssignments /></div>
                      <div>
                        <div className="gutter__div"></div>

                        <section className="career__track" >
                          <div className="career__track__div">
                            <div className="career__track__wrapper">
                              <h2>ক্যারিয়ার ট্র্যাকের শিক্ষার্থীরা কী বলছেন?</h2>
                              <div className="gutter__div"></div>
                              <div className="comment__slider">
                                <WithCarousel />
                              </div>
                              <div className="gutter__div"></div>
                              <div className="faq__div">
                                <div className="faq__div__wrapper">
                                  <h2>Frequently Answered Questions</h2>
                                  <div className="gutter__div"></div>

                                  <SimpleAccordian />
                                </div>
                              </div>
                              <div className="gutter__div"></div>
                              <h2 style={{
                                fontSize: "24px", fontFamily: 'Hind Siliguri', fontWeight: "700", lineHeight: "39px"
                              }}>আপনি যার কাছ থেকে শিখবেন</h2>
                              <section className="career__track instructor__div">
                                {instructor.map((ins) => {
                                  return (
                                    <>
                                      <div className="instructor__wrapper">

                                        <div className="course__instructor">
                                          <div className="instruuctor__header">
                                            <div className="instruuctor__image">
                                              <Avatar src={ins.imgsrc} sx={{ width: 90, height: 90 }} />
                                            </div>
                                            <div className="instruuctor__name">
                                              <h2>{ins.name}</h2>
                                              <p>{ins.title}</p>
                                            </div>


                                          </div>

                                          {/* <div className="gutter__div"></div> */}
                                        </div>
                                        <div className="insturctor__details">
                                          <p>
                                            {ins.content}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="gutter__div"></div>

                                    </>
                                  )
                                })}
                              </section>
                            </div>
                          </div>
                        </section>
                        <div className="gutter__div"></div>


                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
            {isTabWindow > 768 && (<aside style={{}} className="sticky__sidebar__section"
            // style={{
            //   maxHeight: `${isTabWindow < 1250? parseInt(isTabWindow/50)*3 + 32 : 32}rem`,
            // }}
            >
              <CouresMaterial width={isTabWindow} time={"13th Batch will start from: 26th November,2023"} />
            </aside>)}

          </main>
          {isTabWindow <= 768 && (
            <BottomSticky />
          )}

          <Footer />

        </>
      }


      {/* <footer>Footer</footer> */}
    </>
  );
}

export default Main;
