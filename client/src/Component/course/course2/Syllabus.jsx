import React from 'react'
import { Html } from "@mui/icons-material";

const contents = [
  {
    title: "Introduction to Selenium and Setting Up Environment Windows",
    syllabus: [
      "Automation Testing Theory(Pros and Cons) & Industry",
      "Introduction to Selenium and its components(Architecture)",
      "Setting up Java Development Kit (JDK)",
      "Setting up Intellij IDE for Java",
      "Installing Maven and configuring project structure",
      "Writing and running a basic Selenium script"
    ]
  },
  {
    title: "WebDriver and WebDriver Methods",
    syllabus: [
      "WebDriver, WebDriver Manager-Google,Firefox,InternetExplorer",
      "Methods()",
      "get()",
      "navigate()-Backward,Forward,Refresh",
      "getCurrentURL()",
      "getTitle()",
      "close()",
      "quit()",
    ]
  },
  {
    title: "Locators and Basic Interactions",
    syllabus: [
      "Locating elements using ID, name, Class, xpath(Relative & Absolute),cssSelector",
      'Interacting with text fields, buttons, and links',
      "findElement()-sendkeys,clear,click",
      "Synchronization- Static Wait, Implicit Wait, Explicit Wait",
    ]
  },
  {
    title: "Advanced User Interactions",
    syllabus: [
      "Handling dropdowns and multiple select",
      "Checkbox handling",
      "Radio Box Handling",
      "Navigating using navigation commands(Page scrolling)",
      "Mouse Hover",
      "Handling alerts(Colour Verification) and pop-ups",
      "Handling Calendar UI"
    ]
  },
  {
    title: "Handling Dynamic Elements-?(Need to find the proper website)",
    syllabus: [
      "Handling dynamic content using ExpectedConditions",
      "Waits for element visibility, presence, and clickability",
    ]
  },
  {
    title: "Page Object Model (POM) Design",
    syllabus: [
      "Introduction to Page Object Model",
      "Creating Page Object classes",
      'Implementing POM for a sample application',
      'Parameterize Selenium Methods'
    ]
  },
  {
    title: "TestNG Introduction and Annotations",
    syllabus: [
      'Introduction to TestNG',

      '@Test',
      '@Beforetest',
      '@AfterTest',
      '@BeforeSuite',
      '@AfterSuite',
      '@BeforeClass',
      '@AfterClass',
      '@BeforeMethod',
      '@AfterMethod',
      'Grouping and prioritizing tests'
    ]
  },
  {
    title: "Data-Driven Testing with TestNG Data Providers",
    syllabus: [
      "Using TestNG's @DataProvider for parameterization",
      'Reading test data from external sources (Excel, CSV,XML)'
    ]
  },
  {
    title: "Test Reporting and Assertions",
    syllabus: [
      'Generating TestNG HTML reports',
      'Listener',
      'Allure Report',
      'Adding assertions for test verification',
      'Using Soft Assertions for multiple assertions in a test',
      'Error Screenshot',
    ]
  },
  {
    title: "Handling Frames, Windows, and Tabs, Cross-Browser Testing and Parallel Execution",
    syllabus: [
      'Switching between frames and nested frames',
      'Handling multiple windows and tabs',
      'Managing browser windows using WebDriver',
      'Running tests on different browsers (Chrome, Firefox)',
      'Introduction to  parallel execution',
    ]
  },
  {
    title: "GITHUB",
    syllabus: [
      'Introduction to GIT',
      'Importance of GitHub and its uses',
      'Creating Git config and repositories',
      'How to push  code to remote repository',
      'Understanding staging and commit in GIT',
      'Importance to Branching in GIT'
    ]
  },
  {
    title: "CI/CD Pipeline(GITHUB Action)",
    syllabus: [
      'Pipeline Concepts',
      '.yml file creation',
      'Github Action',
      'Circle CI'
    ]
  },

]
const Syllabus = () => {
  return (
    <>
      <div className='syllabus__section__main'>
        <div className='gutter__div'></div>
        <div className='syllabus__section'>
          <h2>তিন মাসের প্রোগ্রামে আপনি কী কী শিখবেন?</h2>
        </div>
        <div className="gutter__div"></div>

        <hr />
        {contents.map((c) => {
          return (<>
            <div className="gutter__div"></div>
            <div className="card__s">
              <div className="card__header" style={{
                padding
                  : "1rem 0"
              }}>
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

              <div className="card__body" style={{ padding: "0 1rem" }}>
                {c.syllabus.map((s) => {
                  return (<>
                    <ul>
                      <li style={{ listStyle: "outside", listStylePosition: "outside" }}>{s}</li>
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