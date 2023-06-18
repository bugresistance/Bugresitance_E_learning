import React from 'react'
import Service from '../Service'
import servicebanner from '../../../image/mobiletesting.png'
const MobileTesting = () => {
    const title = 'Mobile Testing'
    const description = 'Bug Resistance provides thorough mobile app testing services to steer your digital approach while ensuring the desired user experience. Our best-in-class app testing services offer high usability, bug-free and interactive user experience, leading to higher conversion and Install Rate.'
  return (
    <>
        <Service title ={title} description={description} servicebanner={servicebanner}/>
    </>
  )
}

export default MobileTesting