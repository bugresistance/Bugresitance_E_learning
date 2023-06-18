import React from 'react'
import Service from '../Service'
import servicebanner from '../../../image/globaltesting.png'
const GlobalizationTesting = () => {
  const title = 'Globalization Testing'
  const description = 'Bug Resistance specializes in globalization testing services, ensuring that your software application is ready to meet the needs of a global audience. Globalization testing is a crucial step in the development process to ensure that your application functions seamlessly across different languages, cultures, and locales.'
return (
  <>
      <Service title ={title} description={description} servicebanner={servicebanner}/>
  </>
)
}

export default GlobalizationTesting