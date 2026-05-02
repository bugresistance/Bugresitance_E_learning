import React from 'react'
import Service from '../Service'

const CloudDevops = () => {
    const title = 'Cloud & DevOps'
    const description = 'Bug Resistance provides comprehensive cloud architecture and DevOps services to accelerate your deployment pipeline. We design scalable cloud infrastructure on AWS, Azure, and GCP, implement CI/CD pipelines, containerization with Docker and Kubernetes, and ensure your systems are reliable, secure, and cost-optimized.'
  return (
    <>
        <Service title={title} description={description} />
    </>
  )
}

export default CloudDevops
