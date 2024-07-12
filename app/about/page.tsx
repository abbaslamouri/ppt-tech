import React from 'react'

const page = () => {
  return (
    <div
      className="container py-12 bg-no-repeat bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.9)), url("/world-map-picture.png"`,
      }}
    >
      <div className=" prose  prose-slate ">
        <h1>Our passion drives us</h1>
        <h2>Our mission</h2>
        <p>
          Established in 2020, PPF Tech’s passion revolves around plant growth lighting. We deliver innovative lighting
          solutions that fully optimize plant response within controlled commercial environments while delivering lowest
          total cost of ownership. Our focus includes:
        </p>
        <ul>
          <li>Innovative, universal designs across product platforms</li>
          <li>Low-cost via streamlined operations and supply chain</li>
          <li>High-quality manufacturing</li>
          <li>Excellent customer service and support</li>
        </ul>
        <h2>Our team</h2>
        <p>
          Our team is comprised of engineering, product management, sales and support. We have over 60 collective years
          of experience related to plant growth lighting technologies. PPF Tech partners with a select network of
          distributors, agents and retailers throughout the world.
        </p>
        <h2>Our commitment and values</h2>
        <p>
          PPF Tech is thoroughly committed to customer satisfaction, honesty and integrity. We take pride in providing
          best-in-class solutions and back quantitative data with empirical testing. PPF Tech views every new project
          and new relationship as an opportunity to uphold our Mission Statement, learn from others and make continuous
          improvements to our products and services.
        </p>
      </div>
    </div>
  )
}

export default page
