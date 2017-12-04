import { Component, h } from 'preact'

import style from './styles'

interface Props {
}

export default class Columns extends Component<Props, {}> {
  render() {
    return <div class={style.columns}>
      {this.props.children}
    </div>
  }
}
