import React from 'react'
import PropTypes from 'prop-types'

export default function Link({children, active, onClick}){
    if(active){
        return <span>{children}</span>
    }
    return (
        <a href='' 
            onClick={(e)=>{
                e.preventDefault()
                onClick()}} >
            {children}
        </a>
    )
}

Link.propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}