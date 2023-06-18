import React from 'react'
import Service from '../Service'
import servicebanner from '../../../image/erptesting.png'
const ErpTesting = () => {
  const title = 'ERP Testing'
  const description = 'Bug Resistance offers exceptional ERP testing services to organizations to meet their business challenges while assuring that the application meets the specified enterprise resource planning or ERP standards.'
return (
  <>
      <Service title ={title} description={description} servicebanner={servicebanner}/>
  </>
)
}

export default ErpTesting