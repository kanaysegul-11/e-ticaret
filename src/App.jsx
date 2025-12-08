import { useState } from 'react'
import './App.css'
import PageConteiner from './conteiner/PageConteiner'
import Header from './component/header'
import RouterConfig from './config/RouterConfig'
import Loading from './component/Loading'


function App() {

  return (
    <div>
      <PageConteiner>
        <Loading />
        <Header />
        <RouterConfig />
      </PageConteiner>
    </div>
  )
}

export default App
