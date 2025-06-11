import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CVFormComponent } from './components/CVFormComponent'
import { CVPreviewComponent } from './components/CVPreviewComponent'
import { HeaderComponent } from './components/HeaderComponent'

function App() {
  const [CV, setCV] = useState({})

  return (
    <>
        <HeaderComponent/>
        <CVPreviewComponent cv={CV}/>
        <CVFormComponent setCV={setCV}/>
    </>
  )
}

export default App
