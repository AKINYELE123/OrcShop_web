import React from 'react'
import { NavLink } from "react-router-dom"

function About() {
  return (
    <div>
        <div className="container py-5 my-5">
            <div className="row">
                <div className="col-md-6">
                    <h1 className='text-bg-blue fw-bold mb-4'>About Us</h1>
                    <p className="lead mb 4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quibusdam dignissimos dolorem rem, officia ipsum fugit, est ea adipisci ad sequi? Placeat, natus quibusdam sint minima deleniti recusandae consequatur aperiam in rerum illo repellat, error id ipsa odio aut iure exercitationem nisi animi magni dignissimos quos odit! Consequuntur quis, laudantium, minima magnam, pariatur repudiandae culpa sequi ea quas est veniam placeat deserunt non quae sapiente! Incidunt impedit nobis vel deserunt accusantium esse ipsum quidem, cupiditate quam error quis optio quasi illum adipisci. Expedita dolor fugit non autem dolorem molestias placeat ad adipisci voluptate! Aut itaque consequuntur, consectetur reprehenderit labore quasi.
                    </p>
                    <NavLink to="/contact" className="btn btn-dark ms-2 px-3">Contact Us</NavLink>
                </div>
                <div className="col-md-6 d-flex justify-content-right">
                    <img src="/assets/about-us.svg" alt="About Us" height="500px" width="800px" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;