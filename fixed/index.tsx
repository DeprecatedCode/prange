import { Component, h } from 'preact'

import style from './styles'

interface Props {
  top?: boolean
  bottom?: boolean
  left?: boolean
  right?: boolean
}

export default class Fixed extends Component<Props, {}> {
  render() {
    const layout: any = {}

    if (this.props.top) {
      layout.bottom = 'auto'
    }

    if (this.props.bottom) {
      layout.top = 'auto'
    }

    if (this.props.left) {
      layout.right = 'auto'
    }

    if (this.props.right) {
      layout.left = 'auto'
    }

    return <div class={style.fixed} style={layout}>
      {this.props.children}
    </div>
  }
}
