import React from 'react'
import Service from '../Service'
import servicebanner from '../../../image/apitesting.png'
const ApiTesting = () => {
    const title = 'API Testing'
    const description = 'At Bug Resistance, we offer a wide range of top-notch API Testing services to ensure a highly robust software application for your business. Our well-trained and highly experienced professional testers make sure that with our industry-standard API testing, your application meets the needs and requirements for your target audience.'
  return (
    <>
        <Service title ={title} description={description} servicebanner={servicebanner}/>
    </>
  )
}

export default ApiTesting