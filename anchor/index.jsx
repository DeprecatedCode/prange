import { Component, h } from 'preact'

import './styles.css'

export default class Anchor extends Component {
  render() {
    const style = {}
    const transformations = []

    if (this.props.top) {
      style.bottom = 'auto'
    }

    if (this.props.bottom) {
      style.top = 'auto'
    }

    if (this.props.left) {
      style.right = 'auto'
    }

    if (this.props.right) {
      style.left = 'auto'
    }

    if (this.props.center) {
      style.left = '50%'
      style.right = 'auto'
      transformations.push('translateX(-50%)')
    }

    if (this.props.middle) {
      style.top = '50%'
      style.bottom = 'auto'
      transformations.push('translateY(-50%)')
    }

    style.transform = transformations.join(' ')

    return <div class={`•anchor ${this.props.class || ''}`} style={style}>
      {this.props.children}
    </div>
  }
}
