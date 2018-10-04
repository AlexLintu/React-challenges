import React from 'react'

const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/about')
    }, 2000);
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus est soluta pariatur possimus deserunt animi earum sit quidem laudantium alias quas libero, nulla veritatis harum obcaecati esse ut eveniet deleniti!</p>
        </div>
    )
}

export default Contact;