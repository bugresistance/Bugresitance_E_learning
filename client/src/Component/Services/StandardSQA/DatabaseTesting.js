import React from 'react'
import Service from '../Service'
import servicebanner from '../../../image/databasetesting.png'
const DatabaseTesting = () => {
    const title = 'Database Testing'
    const description = 'Bug Resistance is a leading database testing service provider dedicated to ensuring the robustness and reliability of your database systems. Our specialized team of expert testers employs cutting-edge methodologies and tools to thoroughly analyze and evaluate the functionality, performance, and security of your databases.'
  return (
    <>
        <Service title ={title} description={description} servicebanner={servicebanner}/>
    </>
  )
}

export default DatabaseTesting