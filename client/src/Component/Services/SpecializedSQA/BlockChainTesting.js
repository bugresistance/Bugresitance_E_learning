import React from 'react'
import Service from '../Service'
import servicebanner from '../../../image/blockchaintesting.png'
const BlockChainTesting = () => {
  const title = 'Blockchain Testing'
  const description = 'Bug Resistance offers tech proficient blockchain testing services with an aim to bring a revolutionary change in the quality of blockchain based applications to make them more secure and faster.'
return (
  <>
      <Service title ={title} description={description} servicebanner={servicebanner}/>
  </>
)
}

export default BlockChainTesting