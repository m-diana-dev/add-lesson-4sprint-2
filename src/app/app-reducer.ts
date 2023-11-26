export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'APP/SET-APP-STATUS':
      return {...state, status: action.status}
    default:
      return state
  }
}


//AC
export const SetAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-APP-STATUS' as const, status})

//types
type ActionsType = ReturnType<typeof SetAppStatusAC>
