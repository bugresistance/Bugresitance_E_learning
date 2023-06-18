import React from 'react'
import Service from '../Service'
import servicebanner from '../../../image/bigdatatesting.png'
const BigdataTesting = () => {
  const title = 'Big Data Testing'
  const description = 'Bug Resistance verifies the successful processing of terabytes of data using cluster and other supporting components. Being an automated Big Data testing solution provider, we assist you to verify curated and unstructured informational patterns, indexes, innate processes, and approaches.'
return (
  <>
      <Service title ={title} description={description} servicebanner={servicebanner}/>
  </>
)
}

export default BigdataTesting