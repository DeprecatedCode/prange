import { Component, h } from 'preact'

import './styles.css'

export default class Fixed extends Component {
  render() {
    const style = {}

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

    return <div class={`•fixed ${this.props.class || ''}`} style={style}>
      {this.props.children}
    </div>
  }
}
