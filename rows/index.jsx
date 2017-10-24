import { Component, h } from 'preact'

import './styles.css'

export default class Rows extends Component {
  render() {
    return <div class={`•rows ${this.props.class || ''}`}>
      {this.props.children}
    </div>
  }
}
