import React from 'react'
import Service from '../Service'
import servicebanner from '../../../image/desktopapptesting.png'
const DesktopAppTesting = () => {
    const title = 'Desktop App Testing'
    const description = 'Bug Resistance is a premier provider of desktop app testing services, offering comprehensive solutions to ensure the quality and reliability of your desktop applications. Our skilled team of testing professionals is equipped with the latest tools and techniques to identify and address potential bugs, usability issues, and performance bottlenecks in your desktop apps.'
  return (
    <>
        <Service title ={title} description={description} servicebanner={servicebanner}/>
    </>
  )
}

export default DesktopAppTesting