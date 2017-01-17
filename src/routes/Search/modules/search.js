// ------------------------------------
// Constants
// ------------------------------------
const MOVETOSEARCHPAGE = 'MOVETOSEARCHPAGE'
// ------------------------------------
// Actions
// ------------------------------------

export const moveToPage = page => ({
  type: MOVETOSEARCHPAGE,
  value: page
})

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [MOVETOSEARCHPAGE]: (state, action) => ({
    ...state,
    pageNumber: action.value
  }),
  ['HANDLE_SEARCHGRID_FORM_SUBMIT']: (state, action) => ({
    ...initialState
  })
}
// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  pageNumber: 0,
  perPage: 9
}

export default function searchReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
