import StyleSheet from 'prange/style-sheet'

const transition = {
  transition: '0.2s ease-out height, 0.2s ease-out width'
}

export default StyleSheet.create({
  scrollCollapseWrapper: {
    position: 'relative'
  },

  scrollCollapseLever: {
    width: '100%',
    height: '100%',
    ...transition
  },

  scrollCollapseContainer: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    ...transition
  }
})
