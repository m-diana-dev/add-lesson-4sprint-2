import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { selectDecks } from '../decks-selectors.ts'
import { useEffect, useLayoutEffect, useState } from 'react'
import { fetchDecksTC } from '../decks-thunks.ts'

export const useFetchDecks = () => {
  const [isLading, setIsLoading] = useState(false)
  const dispatch = useAppDispatch()
  const decks = useAppSelector(selectDecks)

  //отработает до отрисовки
  useLayoutEffect(() => {
    setIsLoading(true)
    dispatch(fetchDecksTC()).finally(()=>{
      setIsLoading(false)
    })

  }, [dispatch])

  return {
    decks,
    isLading
  }
}
