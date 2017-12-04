import { Component, h } from 'preact'

import style from './styles'

import px from './lib/px'

interface Props {
  width?: boolean
  height?: boolean
  min?: number
  max?: number
}

export default class Constrain extends Component<Props, {}> {

  render() {
    const { width, height, min, max } = this.props
    const layout = {}

    if (!width && !height) {
      throw new Error('must specify width or height attribute')
    }

    let constrainDimension = width ? 'Width' : 'Height'

    if (typeof min === 'number') {
      layout[`min${constrainDimension}`] = px(min)
    }

    if (typeof max === 'number') {
      layout[`max${constrainDimension}`] = px(max)
    }

    return <div style={[ style.constrain, layout ]}>
      {this.props.children}
    </div>
  }
}
