import React from 'react'
import Service from '../Service'
import servicebanner from '../../../image/cloudtesting.png'
const CloudTesting = () => {
  const title = 'Cloud Testing'
  const description = 'Bug Resistance is one of the best cloud testing solution provider that has proven its worth time and again. With cloud testing, enterprises can drastically reduce the time to market and upfront costs. Cloud testing ensures that you spend less on hardware, software, as well as maintenance.'
return (
  <>
      <Service title ={title} description={description} servicebanner={servicebanner}/>
  </>
)
}

export default CloudTesting