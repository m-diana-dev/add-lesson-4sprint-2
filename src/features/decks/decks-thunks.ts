import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { SetAppStatusAC } from '../../app/app-reducer.ts'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  dispatch(SetAppStatusAC('loading'))
  try{
    const res = await decksAPI.fetchDecks()
    dispatch(setDecksAC(res.data.items))
    dispatch(SetAppStatusAC('succeeded'))
  } catch(e) {
    dispatch(SetAppStatusAC('failed'))
  }
}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  return decksAPI.addDeck(name).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}

export const deleteDeckTC = (id: string) => (dispatch: Dispatch) => {
  return decksAPI.deleteDeck(id).then((res) => {
    dispatch(deleteDeckAC(res.data.id))
  })
}

export const updateDeckTC = (params: UpdateDeckParams) => (dispatch: Dispatch) => {
  return decksAPI.updateDeck(params).then((res) => {
    dispatch(updateDeckAC(res.data))
  })
}
