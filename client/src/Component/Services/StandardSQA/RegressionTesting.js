import React from 'react'
import Service from '../Service'
import servicebanner from '../../../image/regressiontesting.png'
const RegressionTesting = () => {
    const title = 'Regression Testing'
    const description = 'Regression testing is a continuous testing practice performed to ensure that the software performs the same way, as it did before making any changes. We offer strategic regression testing services to maintain the existing quality of the product, despite the addition of new features to the application.'
  return (
    <>
        <Service title ={title} description={description} servicebanner={servicebanner}/>
    </>
  )
}

export default RegressionTesting