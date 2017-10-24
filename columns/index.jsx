import { Component, h } from 'preact'

import './styles.css'

export default class Columns extends Component {
  render() {
    return <div class={`•columns ${this.props.class || ''}`}>
      {this.props.children}
    </div>
  }
}
