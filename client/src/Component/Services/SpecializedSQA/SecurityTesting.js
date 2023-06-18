import React from 'react'
import Service from '../Service'
import servicebanner from '../../../image/securitytesting.png'
const SecurityTesting = () => {
  const title = 'Security Testing'
  const description = 'Time to safeguard your business application from cyber vulnerabilities. At BugRaptors, we offer thorough security testing services to ensure complete security of the enterprise, customer data, and application availability.'
return (
  <>
      <Service title ={title} description={description} servicebanner={servicebanner}/>
  </>
)
}

export default SecurityTesting