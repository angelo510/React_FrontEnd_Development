/** **************************************
*     Export api functions.             *
* Kept separate to have code integrity  *
****************************************/

export { update } from '../../../api/auth-api'
export { getUserReservations, getUserSubscriptions } from '../../../api/profile-api'


// ------------------------------------
// Constants
// ------------------------------------

export const ON_CLICK_NAVIGATION_ITEM = 'ON_CLICK_NAVIGATION_ITEM'
export const ON_CLICK_NAVIGATION_OPTION = 'ON_CLICK_NAVIGATION_OPTION'
export const ON_SUBMIT_PROFILE_FORM = 'ON_SUBMIT_PROFILE_FORM'
export const ON_SUBMITTED_PROFILE_FORM = 'ON_SUBMITTED_PROFILE_FORM'
export const ON_SUBMIT_PROFILE_FORM_SUCCESS = 'ON_SUBMIT_PROFILE_FORM_SUCCESS'

export const ON_GET_USER_SUBSCRIPTION_SUCCESS = 'ON_GET_USER_SUBSCRIPTION_SUCCESS'
export const ON_GET_USER_SUBSCRIPTION_FAIL = 'ON_GET_USER_SUBSCRIPTION_FAIL'
export const ON_GET_USER_RESERVATION_SUCCESS = 'ON_GET_USER_RESERVATION_SUCCESS'
export const ON_GET_USER_RESERAVTION_FAIL = 'ON_GET_USER_RESERVATION_FAIL'
export const ON_CANCEL_RESERVATION_SUCCESS = 'ON_CANCEL_RESERVATION_SUCCESS'
export const ON_RESELL_RESERVATION_SUCCESS = 'ON_RESELL_RESERVATION_SUCCESS'
export const TOGGLE_ALERT = 'TOGGLE_ALERT'

const MOVETOSEARCHPAGE = 'MOVETOSEARCHPAGE'

// ------------------------------------
// Actions
// ------------------------------------

export const onClickNavigationItem = item => ({
  type: ON_CLICK_NAVIGATION_ITEM,
  item
})

export const onClickNavigationOption = item => ({
  type: ON_CLICK_NAVIGATION_OPTION,
  item
})

export const getUserReservationsSuccess = payload => ({
  type: ON_GET_USER_RESERVATION_SUCCESS,
  payload
})

export const getUserReservationsFail = payload => ({
  type: ON_GET_USER_SUBSCRIPTION_FAIL,
  payload
})

export const getUserSubscriptionsSuccess = payload => ({
  type: ON_GET_USER_SUBSCRIPTION_SUCCESS,
  payload
})

// TODO : Handle this
export const getUserSubscriptionsFail = payload => ({
  type: ON_GET_USER_SUBSCRIPTION_FAIL,
  payload
})

export const moveToPage = pageNumber => ({
  type: MOVETOSEARCHPAGE,
  value: pageNumber
})
export const cancelReservationSuccess = payload => ({
  type: ON_CANCEL_RESERVATION_SUCCESS,
  payload
})
export const resellReservationSuccess = payload => ({
  type: ON_RESELL_RESERVATION_SUCCESS,
  payload
})
export const toggleAlert = payload => ({
  type: TOGGLE_ALERT,
  payload
})


// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  ON_CLICK_NAVIGATION_OPTION: (state, action) => ({
    ...state,
    filter: action.item,
    pageNumber: 0
  }),
  ON_CLICK_NAVIGATION_ITEM: (state, action) => ({
    ...state,
    active: action.item,
    filter: `future_${action.item}`,
    pageNumber: 0
  }),
  ON_GET_USER_SUBSCRIPTION_SUCCESS: (state, action) => ({
    ...state,
    content: action.payload
  }),
  ON_GET_USER_RESERVATION_SUCCESS: (state, action) => ({
    ...state,
    content: action.payload
  }),
  [MOVETOSEARCHPAGE]: (state, action) => ({
    ...state,
    pageNumber: action.value
  }),
  ON_CANCEL_RESERVATION_SUCCESS: (state, action) => {
    const index = state.content.future_reservations.indexOf(action.payload);
    return ({
      ...state,
      content: {
        ...state.content,
        future_reservations: [
          ...state.content.future_reservations.slice(0, index),
          ...state.content.future_reservations.slice(index + 1)
        ]
      }
    })
  },
  ON_RESELL_RESERVATION_SUCCESS: (state, action) => {
    const index = state.content.future_memberships.indexOf(action.payload);
    return ({
      ...state,
      content: {
        ...state.content,
        future_memberships: [
          ...state.content.future_memberships.slice(0, index),
          ...state.content.future_memberships.slice(index + 1)
        ],
        reselling_memberships: [
          ...state.content.reselling_memberships,
          ...state.content.reselling_memberships.slice(index, 1)
        ]
      }
    })
  },
  TOGGLE_ALERT: (state, action) => ({
    ...state,
    showAlert: !state.showAlert,
    reservationToCancel: action.payload
  })
}

// ------------------------------------
// Reducer ** Initial values
// ------------------------------------

const initialState = {
  active: 'reservations',
  formSubmitting: false,
  filter: 'future_reservations',
  content: [],
  pageNumber: 0,
  perPage: 6,
  showAlert: false,
  reservationToCancel: {}
}


export default function profileReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
