import {BrowserRouter, Routes, Route} from 'react-router-dom'

import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

function App(){
  return(
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<h1>Home Page</h1>}/>
      <Route path='/login' element = {< LoginPage /> }/>
      <Route path='/register' element = {<RegisterPage/>}/>
      <Route path='/documents' element = {<h1>Documents Page</h1>}/>
      <Route path='/add-document' element = {<h1>New Document</h1>}/>
      <Route path='/documents/:id' element = {<h1>Update Document</h1>}/>
      <Route path='/profile' element = {<h1>profile</h1>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App