import React from 'react'
import Service from '../Service'
import servicebanner from '../../../images/1.Manual Testing.png'
const ManualTesting = () => {
    const title = 'Manual Testing'
    const description = 'Bug Resistance specializes in manual testing services, providing comprehensive solutions to ensure the quality, functionality, and usability of your software applications. Our experienced team of manual testers follows a meticulous approach to identify and address potential issues, bugs, and usability challenges, ensuring a seamless user experience.'
  return (
    <>
        <Service title ={title} description={description} servicebanner={servicebanner}/>
    </>
  )
}

export default ManualTesting