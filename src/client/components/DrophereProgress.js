//MODULES
import React, { Component }  from 'react'
import { connect } from 'react-redux'

//STYLES
import styles from './css/drophere-progress.scss'

//CONFIG
import { DROPHERE_STEP } from '../screens/Drophere/Order/config.js'

//COMPONENT
class DrophereProgress extends Component {
  render() {
    return (
      <div className={styles.container}>
        <ProgressBar step={this.props.currentStep}/>
      </div>
    )
  }
}

class ProgressBar extends Component{

  isFinished = stepFinished => {
    let { step } = this.props
    if(stepFinished >= step) return '#37347a'
    return '#e2e2e2'
  }

  render(){
    let { step = 0, height = 16 } = this.props
    return (
      <div className={styles.progressBarContainer}>
        <div className={styles.stepGroup}>
          <div className={styles.label}>
            1. Choose product            
          </div>
          <div className={styles.step}>
            <svg>              
              <line   x1='50%' y1={height/2} x2='100%'    y2={height/2}  stroke={this.isFinished(1)}/>  
              <circle cx='50%' cy={height/2} r={height/2} fill="#37347a"/>         
            </svg>
          </div>          
        </div>
        <div className={styles.stepGroup}>
          <div className={styles.label}>
            2. Upload design
          </div>
          <div className={styles.step}>
            <svg>
              <line   x1='0%'  y1={height/2} x2='50%'     y2={height/2}  stroke={this.isFinished(3)}/>                
              <line   x1='50%' y1={height/2} x2='100%'    y2={height/2}  stroke={this.isFinished(4)}/>    
              <circle cx='50%' cy={height/2} r={height/2} fill="#37347a"/>          
            </svg>
          </div>          
        </div>
        <div className={styles.stepGroup}>
          <div className={styles.label}>
            3. Order details
          </div>
          <div className={styles.step}>
            <svg>
              <line   x1='0%'  y1={height/2} x2='50%'     y2={height/2}  stroke={this.isFinished(4)}/>                    
              <line   x1='50%' y1={height/2} x2='100%'    y2={height/2}  stroke={this.isFinished(5)}/>  
              <circle cx='50%' cy={height/2} r={height/2} fill="#37347a"/>      
            </svg>
          </div>          
        </div>
        <div className={styles.stepGroup}>
          <div className={styles.label}>
            4. Payment
          </div>
          <div className={styles.step}>
            <svg>
              <line   x1='0%'  y1={height/2} x2='50%'     y2={height/2}  stroke={this.isFinished(5)}/>  
              <circle cx='50%' cy={height/2} r={height/2} fill="#37347a"/>                      
            </svg>
          </div>          
        </div>
      </div>    
    )  
  }
} 

export default connect(state => {
  //mapStateToProps
  return {
    [DROPHERE_STEP]: state.step[DROPHERE_STEP],
  }
})(DrophereProgress)

