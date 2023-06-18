import React from 'react'
import Service from '../Service'
import servicebanner from '../../../image/automationtesting.png'
const AutomationTesting = () => {
  const title = 'Automation Testing'
  const description = 'With the Digital Revolution, there is stiff competition in every business to deliver the best quality software product, with quick time-to-market. BugRaptors offers premium test automation services to achieve enhanced speed, and impeccable software quality, with maximum coverage.'
return (
  <>
      <Service title ={title} description={description} servicebanner={servicebanner}/>
  </>
)
}

export default AutomationTesting