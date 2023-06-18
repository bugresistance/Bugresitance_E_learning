import React from 'react'
import Service from '../Service'
import servicebanner from '../../../image/iottesting.png'
const IotTesting = () => {
  const title = 'IOT Testing'
  const description = 'Put IoT technology to work and accelerate your business IoT initiatives by testing under the newest real-time user cases and run your business better than ever before.'
return (
  <>
      <Service title ={title} description={description} servicebanner={servicebanner}/>
  </>
)
}

export default IotTesting