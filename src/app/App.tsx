import './App.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { Decks } from '../features/decks/Decks.tsx'
import { GlobalError } from './GlobalError/GlobalError.tsx'
import { useAppSelector } from './store.ts'
import { LinearLoader } from '../common/components/Loader/LinearLoader.tsx'
import { selectAppStatus } from './app-selectors.ts'

export const App = () => {
  const appStatus = useAppSelector(selectAppStatus)

  return (
    <div>
      {appStatus === 'loading' && <LinearLoader />}
      <Decks />
      <GlobalError />
      <footer>FOOTER</footer>
    </div>
  )
}
