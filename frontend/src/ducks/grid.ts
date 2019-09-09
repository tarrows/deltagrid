import { Reducer } from 'redux'
import { Layout } from 'react-grid-layout'

export interface GridState {
  items: {
    key: string
    layout: Layout
    content: {
      type: string
      data: string
    }
  }[]
  settings: {
    editable: boolean
    cols: number
    rowHeight: number
    width: number
  }
}

const initialState: GridState = {
  items: [],
  settings: {
    editable: true,
    cols: 12,
    rowHeight: 30,
    width: 1200
  }
}

export const SWITCH_EDITABLE = 'SWITCH_EDITABLE'
export const APPEND_ITEM = 'APPEND_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'

export const switchEditable = () => ({
  type: SWITCH_EDITABLE as typeof SWITCH_EDITABLE
})

export const appendItem = (item) => ({
  type: APPEND_ITEM as typeof APPEND_ITEM,
  payload: { item }
})

export const deleteItem = (key: string) => ({
  type: DELETE_ITEM as typeof DELETE_ITEM,
  payload: { key }
})

export type Action = ReturnType<typeof switchEditable | typeof appendItem | typeof deleteItem>

const grid: Reducer<GridState, Action> = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_EDITABLE:
      const settings = { ...state.settings, editable: !state.settings.editable }
      return { ...state, settings }
    case APPEND_ITEM:
      return { ...state, items: [...state.items, action.payload.item] }
    case DELETE_ITEM:
      return { ...state, items: [...state.items.filter(i => i.key !== action.payload.key)] }
    default:
      return state
  }
}

export default grid
