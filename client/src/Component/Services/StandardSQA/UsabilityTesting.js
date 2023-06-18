import React from 'react'
import Service from '../Service'
import servicebanner from '../../../image/usabilitytesting.png'
const UsabilityTesting = () => {
    const title = 'Usability Testing'
    const description = 'The main focus of every successful business is to deliver the best user experience to their clients, and our usability testing services ensure the same. Our skilled usability testers have the expertise in performing thorough usability testing with high efficiency to achieve more customer loyalty.'
  return (
    <>
        <Service title ={title} description={description} servicebanner={servicebanner}/>
    </>
  )
}

export default UsabilityTesting