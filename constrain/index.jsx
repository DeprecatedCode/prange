import { Component, h } from 'preact'

import './styles.css'

import px from './lib/px'

export default class Constrain extends Component {
  render() {
    const style = {}

    if (this.props.width) {
      this.constrainProperty = 'Width'
    }

    else if (this.props.height) {
      this.constrainProperty = 'Height'
    }

    else {
      throw new Error('must specify width or height attribute')
    }

    if ('min' in this.props) {
      style[`min${this.constrainProperty}`] = px(this.props.min)
    }

    if ('max' in this.props) {
      style[`max${this.constrainProperty}`] = px(this.props.max)
    }

    return <div class={`•constrain ${this.props.class || ''}`} style={style}>
      {this.props.children}
    </div>
  }
}
