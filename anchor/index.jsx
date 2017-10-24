import { Component, h } from 'preact'

import './styles.css'

export default class Anchor extends Component {
  render() {
    return <div class={`•anchor ${this.props.class || ''}`}>
      {this.props.children}
    </div>
  }
}
