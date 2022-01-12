import React, { PureComponent } from 'react';
import './ProgressBar.style.scss';
import ProgressBarPoint from './ProgressBarPoint.component';
class ProgressBar extends PureComponent {
    constructor(){
        super();
        this.state={
            activePoitIndex: ''
        }
    }

    componentDidMount(){
        this.changeProgressHandler();
    }
    componentDidUpdate(){
        this.changeProgressHandler();
    }
    createPointsArr = () => {
        const { stepMap } = this.props;
        let pointsArr = [];
        for ( const key in stepMap){
            pointsArr.push({...stepMap[key], stepKey: key})
        }
        return pointsArr
    }

    changeProgressHandler = () => {
        const { checkoutStep } = this.props;
        const steps = this.createPointsArr();
        const findActivePointKey = ()=>{
            let index;
            steps.forEach((step, i) => {
                if( step.stepKey === checkoutStep){ 
                    index = i;
                }else{
                    return
                }
            });
            return index
        }
        const activePoitIndex = findActivePointKey();
        this.setState({activePoitIndex});
    }

    

    render() {
        const { activePoitIndex } = this.state;
        const points = this.createPointsArr();
        console.log(points)
        const pointsHtml = <>
            {
                points.map((point, i) => {
                    if(i+1 !== points.length){
                        return(
                            <ProgressBarPoint
                            length = {points.length}
                            passed={i < activePoitIndex}
                            active={i === activePoitIndex} 
                            index={i} title={point.title}/>
                        )
                    }else return // the last step is not shown
                })
            }
        </>;


        return (
            <div className='ProgressBarContainer'>
                {pointsHtml}
            </div>
        )
        
    }
}

export default ProgressBar;