import { isAxiosError } from 'axios'
import { Dispatch } from 'redux'
import { SetAppErrorAC } from '../../app/app-reducer.ts'

export const HandleErrors = (e: unknown, dispatch: Dispatch) => {
  let errorMessage: string;

  if(isAxiosError<ServerError>(e)){
    errorMessage = e.response ? e.response.data.errorMessages[0].message : e.message
  } else {
    errorMessage = (e as Error).message
  }
  dispatch(SetAppErrorAC(errorMessage))
}

//types
type ServerError = {
  errorMessages: {
    field: string
    message: string
  }[]
}
