import React from 'react'
import Navbar from './Navbar.js'
import Carrusel from './Carrusel.js'
import ListarPost from './ListarPost';


function Home() {
return(
  <div>
  <div className="container"> 
   <Carrusel />
  <br/>
   <div className="alert alert-dark" role="alert">
   <h4>Para agregar un nuevo post debe iniciar sesion o registrarse</h4></div>  
  <ListarPost />
  <br/>
   </div>
  </div>
  )


}

export default Home;
