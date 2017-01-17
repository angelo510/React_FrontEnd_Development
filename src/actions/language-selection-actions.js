import * as types from '../actions/action-types'
export const TOGGLE_MENU = types.TOGGLE_MENU
export function toggleMenu(toggle) {
  return {
    type: types.TOGGLE_MENU,
    toggle
  }
};
