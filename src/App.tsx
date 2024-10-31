import { useState } from 'react'
import { EmailEditor } from './editor/email-editor'
import { StoreContext } from './store/store-context';
import { RootStore } from './store/root-store';
import './styles/global.css'

function App() {
  const [rootStore] = useState(new RootStore());
  return (
    <StoreContext.Provider value={rootStore} >
    <EmailEditor />
    </StoreContext.Provider>
  )
}

export default App
