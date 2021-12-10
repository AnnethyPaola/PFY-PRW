import React from 'react'
import Navbar from './Navbar.js'
import Carrusel from './Carrusel.js'
import ListarPost from './ListarPost';
import AgregarPost from './AgregarPost'

import firebaseConfig from './Confi/firebase2.js'
import {getAuth, signOut} from "firebase/auth";
const auth = getAuth(firebaseConfig);


function Home() {
return(
  <div>
  <button onClick={()=> signOut(auth)}> Cerrar sesion</button>
  <div className="container"> 
   <Carrusel />
   <br/>
   <div className="alert alert-dark" role="alert">
   <h1>AGREGAR NUEVO POST</h1></div>  
   <AgregarPost />
  <br/>
  <ListarPost />
  <br/>
   </div>
  </div>
  )


}

export default Home;
