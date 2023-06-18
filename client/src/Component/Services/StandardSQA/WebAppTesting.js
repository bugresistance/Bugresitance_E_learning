import React from 'react'
import Service from '../Service'
import servicebanner from '../../../image/servicebanner.png'
const WebAppTesting = () => {
    const title = 'Web App Testing'
    const description = 'Bug Resistance is a trusted provider of web app testing services, dedicated to ensuring the quality, performance, and security of your web applications. Our skilled team of web app testers leverages industry-leading tools and methodologies to thoroughly assess and validate every aspect of your web application, ensuring a flawless user experience.'
  return (
    <>
        <Service title ={title} description={description} servicebanner={servicebanner}/>
    </>
  )
}

export default WebAppTesting