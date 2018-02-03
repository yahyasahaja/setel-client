//MODULES
import React, { Component }  from 'react'
import Input from 'react-toolbox/lib/input'
import FontIcon from 'react-toolbox/lib/font_icon'

//STYLES
import styles from './css/UploadDesign.scss'

//COMPONETNS
import ProgressBar from '../../../components/DrophereProgress'
import RoundedButton from '../../../components/RoundedButton'
import OrderNavigation from '../../../components/OrderNavigation'
// import { lchmod } from 'fs'

//INNER_CONFIG
const DRAG_ENTER = 0
const DRAG_OVER = 1
const DRAG_LEAVE = 2
const DRAG_DROP = 3


//COMPONENT
const ListNote = ({notes = []}) => (
  <ol>
    {notes.map((val, i) => (
      <li key={i}>{val}</li>
    ))}
  </ol>
)

const DesignNote = () => {
  let notes = [
    "Lorem",
    "Ipsum",
    "Adalah",
    "Doa"
  ]  
  return (
    <div>
      <div className={styles.title}>
        Requirment:
      </div>
      <div className={styles.points}>      
          <ListNote notes={notes}/>      
      </div>
    </div>
  )
}

class UploadArea extends Component {
  componentDidMount() {
    window.ondragenter = e => {
      e.preventDefault()
      this.setState({dragStateId: DRAG_ENTER})
    }
    window.ondragover = e => {
      e.preventDefault()
      if (this.state.dragStateId != DRAG_OVER)
      this.setState({dragStateId: DRAG_OVER})
    }
    window.ondragleave = e => {
      e.preventDefault()
      this.setState({dragStateId: DRAG_LEAVE})
    }
    window.ondrop = e => {
      e.preventDefault()

      this.setState({dragStateId: DRAG_DROP, uploading: true})
      this.handleFileUpload(e.dataTransfer.files.item(0))
    }
  }

  onFileUploadChange = e => {
    e.preventDefault()
    
    this.handleFileUpload(e.target.files[0])
  }

  handleFileUpload = file => {
    console.log('uploading file ', file.name, ' ...')
  }

  componentWillUnmount() {
    window.ondragenter = undefined
    window.ondragover = undefined
    window.ondragleave = undefined
    window.ondrop = undefined
  }

  state = {
    uploading: false,
    dragStateId: -1,
  }

  render() {
    let { dragStateId } = this.state

    return (
      <div className={styles.dragContainer}>
        <div className={styles.up}>
          <div className={`${styles['drop-container']} ${
            dragStateId === DRAG_OVER || dragStateId == DRAG_ENTER ? styles['on-drag-over'] : ''
          }`}>
            <span>DRAG YOUR DESIGN HERE</span>
            <span className={styles.or}>OR</span>
            <label for="upload-file">
            <div className={styles.button} onClick={e => {
              
            }}>UPLOAD DESIGN</div>
            <input 
              type="file" name="upload-file" 
              id="upload-file" disabled={this.state.uploading}
              onChange={this.onFileUploadChange}
            />
            </label>
          </div>          
        </div>
      </div>
    )
  }
}

export default class UploadDesign extends Component{
  render(){
    return(
    <div className={styles.container}>    
      <div className={styles.progressBar}>
        <ProgressBar />      
      </div>   
      <div className={styles.navigation}>
        <OrderNavigation 
         text="Upload Design"
         nextLink="/drophere/order/4"
         prevLink="/drophere/order/2"/>
      </div>     
      <div className={styles.uploadContainer}>
        <span>Front</span>
        <UploadArea />
        <span>Back</span>
        <UploadArea />
      </div>
      <div className={styles.detailContainer}>
        <DesignNote />
      </div>
      <div>
        <RoundedButton to="/drophere/order/4" primary>
          Get a Qoute
        </RoundedButton>
      </div>
    </div>
    )    
  } 
}