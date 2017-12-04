import { Component, h } from 'preact'

import style from './styles'

import px from './lib/px'
import getScrollParent from './lib/get-scroll-parent'

interface Props {
  height?: boolean
  width?: boolean
  min?: number
  max?: number
  containerClass?: string
  contentClass?: string
}

export default class ScrollCollapse extends Component<Props, {}> {
  mainElement: any
  leverElement: any
  containerElement: any
  sizingProperty: string
  overflowDirection: string
  scrollRelativeTo: string

  componentDidMount() {
    const scrollParent = getScrollParent(this.mainElement, this.overflowDirection)
    const scrollProperty = `scroll${
      scrollParent === window ?
        this.overflowDirection.toUpperCase() :
        this.scrollRelativeTo
    }`
    scrollParent.addEventListener(
      'scroll',
      () => {
        this.parentDidScroll(scrollParent[scrollProperty])
      },
      { passive: true }
    )
    this.parentDidScroll(0)
  }

  parentDidScroll(scrollPosition) {
    const size = px(
      this.props[scrollPosition > 0 ? 'min' : 'max']
    )
    this.leverElement.style[this.sizingProperty] = size
    this.containerElement.style[this.sizingProperty] = size
  }

  render() {
    const { height, width, min, max, containerClass, contentClass, children } = this.props

    if (height) {
      this.sizingProperty = 'height'
      this.overflowDirection = 'y'
      this.scrollRelativeTo = 'Top'
    }

    else if (width) {
      this.sizingProperty = 'width'
      this.overflowDirection = 'x'
      this.scrollRelativeTo = 'Left'
    }

    else {
      throw new Error('must specify height or width attribute')
    }

    const layout = {
      [this.sizingProperty]: px(max) // start expanded
    }

    return <div class={style(style.scrollCollapseWrapper, containerClass)} ref={ref => this.mainElement = ref}>
      <div
        class={style.scrollCollapseLever}
        style={layout}
        ref={ref => this.leverElement = ref}
      ></div>
      <div
        class={style(style.scrollCollapseContainer, contentClass)}
        ref={ref => this.containerElement = ref}
      >
        {children}
      </div>
    </div>
  }
}
