 import './NetflixIndexComponent.css';
 import NetflixHeaderComponents from './NetflixHeaderComponents';
import NetflixMainComponents from './NetflixMainComponents';
import NetflixRegisterComponents from './NetflixRegisterComponents';
 export default function NetflixIndexComponents(){
    return(
       <div className="container-fluid">
              <div className='box'>
               <header>
                  <NetflixHeaderComponents/>
               </header> 
              <section className="d-flex justify-content-center align-items-center h-100">
  <main>
   <NetflixMainComponents />
   <NetflixRegisterComponents/>
  </main>
</section>


              </div>
       </div>
    );
  }