import React from 'react'
import Service from '../Service'
import servicebanner from '../../../image/mltesting.png'
const AlTesting = () => {
  const title = 'AL & ML Testing'
  const description = 'The new-age technologies in the digital era require the best and advanced testing approach to ensure their adequate functionality and security. BugRaptors offers AI testing services to improve the overall experience while reducing risks to a great extent.'
  return (
    <>
      <Service title={title} description={description} servicebanner={servicebanner} />
    </>
  )
}

export default AlTesting