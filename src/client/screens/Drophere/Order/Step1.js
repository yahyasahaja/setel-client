//MODULES
import React, { Component }  from 'react'

//STYLES
import styles from './css/step1.scss'

//COMPONETNS
import RoundedButton from '../../../components/RoundedButton'

//INNER_CONFIG
const DRAG_ENTER = 0
const DRAG_OVER = 1
const DRAG_LEAVE = 2
const DRAG_DROP = 3

//COMPONENT
export default class Step0 extends Component {
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
      <div className={styles.container}>
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

          <div className={styles.info}>
            <h1>Design</h1>
            <p>
              Requirements:<br />
              <ol>
                <li>Lorem impsum dolor</li>
                <li>Lorem impsum dolor</li>
                <li>Lorem impsum dolor</li>
                <li>Lorem impsum dolor</li>
              </ol>
            </p>
          </div>
        </div>

        <div className={styles.down}>
          <RoundedButton to="/drophere/order/2" className={styles.button}>BACK</RoundedButton>
          <RoundedButton to="/drophere/order/0" className={styles.button} primary>NEXT</RoundedButton>
        </div>
      </div>
    )
  }
}