import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { useState } from 'react';
import Userlogdetails from './Components/Context/Context';
import Cnav from './Components/CNavbar/companynav'
import Login from './Components/Loginform/From';
import Home from './Components/Home/Home1'
import './App.css';

function App() {
  const [islogin,ch]=useState(false)
  function changereq(){
    console.log('achnagerequ')
     ch(!islogin)
  }

return <Userlogdetails.Provider value={{islogin,change:changereq}}>
   <BrowserRouter >
  <div className='main'>
<Cnav logdet={islogin} /><Switch>
  <Route exact path='/' component={Login}/>
  <Route exact path='/Home' component={Home}/>
</Switch>
</div>
</BrowserRouter>
</Userlogdetails.Provider>

}

export default App;
