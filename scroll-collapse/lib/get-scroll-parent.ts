export default function getScrollParent(element, direction) {
  if (element === null) {
    return window
  }

  const overflow = window.getComputedStyle(element)[`overflow-${direction}`]

  if (overflow !== 'visible' && overflow !== 'hidden') {
    return element
  }

  return getScrollParent(element.offsetParent, direction)
}
