import React, { Component } from 'react'

export default class ProgressBarPoint extends Component {
    render() {
        const {title, index, active, passed, length} = this.props;
        const pointNumber = index + 1;
        return (
            <>
            <div className='ProgressBarHR'>
                {active || passed ? <div className='ProgressBarHR active'></div> : null}
            </div>
            <div className='ProgressBarPoint'>
                <div 
                className={active || passed ? 'PointCircle active' : 'PointCircle' }
                >{passed ? '✔' : pointNumber}</div>
                <div className='PointTitle'>{title}</div>
            </div>
            {pointNumber === length -1 &&
            <div className='ProgressBarHR'>
                {passed ? <div className='ProgressBarHR active'></div> : null}
            </div> }
            </>
        )
    }
}
