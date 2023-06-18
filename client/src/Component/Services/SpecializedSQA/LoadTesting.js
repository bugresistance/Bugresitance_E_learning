import React from 'react'
import Service from '../Service'
import servicebanner from '../../../image/loadtesting.png'
const LoadTesting = () => {
  const title = 'Load Testing'
  const description = 'Lead the market with the best performance! With this aim, BugRaptors deliver cutting edge performance testing services to a major group of clients globally. We offer comprehensive analysis and recommendations, using advanced tools, for load and performance improvements.'
return (
  <>
      <Service title ={title} description={description} servicebanner={servicebanner}/>
  </>
)
}

export default LoadTesting