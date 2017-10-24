import { Component, h } from 'preact'

import './styles.css'

import px from './lib/px'
import getScrollParent from './lib/get-scroll-parent'

export default class ScrollCollapse extends Component {
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
  }

  parentDidScroll(scrollPosition) {
    this.leverElement.style[this.sizingProperty] = px(
      this.props[scrollPosition > 0 ? 'min' : 'max']
    )
  }

  render() {
    if (this.props.height) {
      this.sizingProperty = 'height'
      this.overflowDirection = 'y'
      this.scrollRelativeTo = 'Top'
    }
    else if (this.props.height) {
      this.sizingProperty = 'width'
      this.overflowDirection = 'x'
      this.scrollRelativeTo = 'Left'
    }
    else {
      throw new Error('must specify height or width attribute')
    }

    const style = {
      [this.sizingProperty]: px(this.props.max) // start expanded
    }

    return <div class={`•scroll-collapse ${this.props.class || ''}`} ref={ref => this.mainElement = ref}>
      <div
        class='•scroll-collapse--lever'
        style={style}
        ref={ref => this.leverElement = ref}
      ></div>
      <div class='•scroll-collapse--container'>
        {this.props.children}
      </div>
    </div>
  }
}
