import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

export default function Todo({onClick,text,completed}){
    return <li onClick={onClick} className={`${completed ? 'completed' : ''}`}>{text}</li>
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}