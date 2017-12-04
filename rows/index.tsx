import { Component, h } from 'preact'

import style from './styles'

interface Props {
  containerClass?: string
}

export default class Rows extends Component<Props, {}> {
  render() {
    const { containerClass } = this.props
    return <div class={style(style.rows, containerClass)}>
      {this.props.children}
    </div>
  }
}
