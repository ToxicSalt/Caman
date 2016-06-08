function reducer(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_ELEMENTS':
      return {
        ...state,
        periodicTable: {
          ...state.periodicTable,
          isFetching: false,
          elements: action.elements
        }
      }
    case 'SET_FEATURED_ELEMENT':
      return {
        ...state,
        periodicTable: {
          ...state.periodicTable,
          featuredElement: action.element
        }
      }
    default:
      return state
  }
}
export default reducer;