import React from 'react'
import Rainbow from '../HOC - higher order component/Rainbow'

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus est soluta pariatur possimus deserunt animi earum sit quidem laudantium alias quas libero, nulla veritatis harum obcaecati esse ut eveniet deleniti!</p>
        </div>
    )
}

export default Rainbow(About);