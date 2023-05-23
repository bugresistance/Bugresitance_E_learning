import React from 'react'
import { Html } from "@mui/icons-material";

const contents = [
  {
    title:  "Introduction of Software Testing",
    syllabus: [
      "What is Testing?", "Why is testing necessary?",
"The Psychology of Testing & Tester",
"Practical Example of Testing",
"Software Development Life Cycle (SDLC)",
"Software Testing Life Cycle (STLC)",
"Waterfall Model,Spiral Model, RAD Model and Agile Development"
    ]
  },
  {
    title:  "Introduction of Software Testing",
    syllabus: [
      "Software Testing Principles",
      "Causes of Software Defects",
      "How Testing Improve the Quality",
      "How Much Testing is Enough?",
      "Objectives of testing",
      "Methods of Testing",
      "Testing & Debugging",
      "Fundamental test process",
      "What is Error,Bug, Defects, Issues and Failure?",
      "Role of Testing in Software Development",
      "Maintenance and Operations",
      "Verification vs Validation",
      "Quality Assurance vs. Quality Control"
      
    ]
  },
  {
    title:  "General testing principles and Fundamental of Test Process",
    syllabus: [
      "Test Strategy",
'Test Planning and Test Control',
"Test Scenarios",
"Test Case Development",
"Practical Example of creating test scenario and test cases from requirements"

    ]
  },
  {
    title:  "Type Of Testing",
    syllabus: [
      "White box, grey box and black box testing",
      "Functional Testing and Non-functional Testing",
      "Retesting & Regression Testing",
      "Smoke Testing and Sanity Testing",
      "Retesting and Regression Testing",
      "Acceptance Testing. Usability Testing, BetaTesting, Adhoc Testing & Globalization Testing",
      "Unit Testing, Integration Testing, System Testing,Stress Testing, Performance Testing",
      "Boundary value analysis and Equivalence partitioning for maintaining large test fields."
      
    ]
  },
  {
    title:  " Bug Reporting and Retesting",
    syllabus: [
     " Bug Life Cycle",
      "Bug Reporting",
      "Bug Priority & Severity",
      "Bug Retest"
      
    ]
  },
  {
    title:  " Testing Tools",
    syllabus: [
      "Bug Management Tools(Using Clickup or Jira)",
      "Bug Leakage and Bug Release."
      
    ]
  },
  {
    title:  "UI Testing",
    syllabus: [
      "Practical Project Analysis using Figma & a real website."
    ]
  },
  {
    title:  "Load Testing",
    syllabus: [
      "Load Testing theoretical Analysis",
"Load Testing using Jmeter",
"Report Analysis",
"Load Testing Project"

    ]
  },
  {
    title:  "Database Testing",
    syllabus: [
      "Database theory",
      "Database practical Testing using XAMPP"
      

    ]
  },
  {
    title:  "Mobile Application Testing",
    syllabus: [
      "Mobile application testing introduction.",
"Different types of mobile applications to test."
,"Key Factors in Mobile Testing"
,"Basic checklist for testing mobile applications."

    ]
  },
  {
    title:  "API Testing POSTMAN",
    syllabus: [
      "What is an API",
"What is API Testing",
"POSTMAN Installation",
"Use OAuth2, API keys, tokens, basic auth",
"Understand GET vs POST request method",
"Create GET, POST, PUT, DELETE request",
"Use Postman variables to create workflows and scenarios",
"Saving A Request Into Collection"

    ]
  },
  {
    title:  " Automation Testing Using Selenium WebDriver",
    syllabus: [
      "Introduction of Automation Testing",
      'Basics of automation testing – why, when and how to perform Automation Testing',
      'Installing Eclipse',
     ' Eclipse IDE setup',
      'Basic Concept of OOP',
      'Selenium IDE installation',
     ' Setup work environment',
      'Introduction of selector (Tag, Id, Class, Name,cssSelector, Link Text, Partial Link Text & xpath)',
      'Open, Navigate to URL and Close browser',
      'Refresh page, Handel Window',
      'Input fields, buttons & links click action',
      'What is TestNG',
      'TestNG Annotations',
      'TestNG Assertion',
      'TestNG Data Provider',
      'Write a test script and run generate the test report',
      'What is Maven?',
      'Features of Maven',
     ' Why to use Maven',
      'Installing & Running Maven',
      'Using Maven in your project',
      'Adding dependency by Maven'
      
    ]
  },
  
]
const Syllabus = () => {
  return (
    <>
    <div className='syllabus__section__main'>
      <div className='gutter__div'></div>
    <div className='syllabus__section'>
      <h2>ছয় মাসের প্রোগ্রামে আপনি কী কী শিখবেন?</h2>
    </div>
    <div className="gutter__div"></div>

    <hr />
    {contents.map((c)=> {
      return (<>
    <div className="gutter__div"></div>
    <div className="card__s">
      <div className="card__header" style={{padding
      : "1rem 0"}}>
        {/* <div className="card__img">
          {" "}
          <Html
            color="white"
            sx={{
              backgroundColor: "#ffffff",
            }}
          />{" "}
        </div> */}
        <div className="card__text">
          <h2>{c.title}</h2>
        </div>
      </div>

      <div className="card__body" style={{padding: "0 1rem"}}>
        {c.syllabus.map((s)=> {
          return(<>
          <ul>
            <li style={{listStyle: "outside",listStylePosition: "outside"}}>{s}</li>
          </ul>
          </>)
        })}
      </div>
    </div>
      
      </>
      )
    })}

    </div>
  </>
  )
}

export default Syllabus