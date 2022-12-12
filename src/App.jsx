import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import cons1 from './cons1.jpg';
import h1 from './h1.jpg';
import h2 from './h2.jpg';
import h3 from './h3.jpg';
import lowmrp from './lowmrp.jpg';
import budget from './budget.jpg';
import choice from './choice.jpg';
import maintenance from './maintenance.jpg';
import onsite from './onsite.jpg';


function App() {
  const [count, setCount] = useState(0)

  return (
     
    <div className="App">
      <div className='Header'>
          <h1>Our Services</h1>
          <div className='Kk'>
              <p>For those lucky enough to be solved in Construction and Building it's an incredible joy to be involved in bringing forth from mere drawings and ideas a structure that will stand for many lifetimes.</p>
          </div>
       </div>
       
       
        <div className='container'>
          <div className='Bb'>
             <img src={cons1} alt="Logo" />
          <div className='tt'>
             <h2>WE BUILD YOUR DREAMS</h2>
          </div>
          </div>
         
          <div className='mm'>
            <h2>Services you get by joining us</h2>
          </div>
          <div className='qw'> 
             <p>WeBuild is one of the prestigious construction company in South India with a reputation for building exceptional homes and villas. We have over a decade of experience in building construction and have gained specialization in making the gorgeous house at an affordable price.

Currently, we provide our services in Coimbatore.</p>
          </div>
          <div className='we'>
            <h1>Why Choose us to build your home?</h1>
          </div>
      </div>
        
        <div className='hj'>
    <div className='z'>

      <div class="polaroid">
  <img src={budget} alt="all"/>
  <div class="container">
    <h3>Project completion within budget</h3>
  <p>We will deliver your home at a price which we promised you. There will be no cost overruns. No extra amount of money will be included in your bill without your approval.</p>
  </div>
  </div>
   </div>

    <div className='x'> 

      <div class="polaroid">

  <img src={lowmrp} alt="all"/>
  <div class="container">
    <h3>Get products lower than MRP</h3>
  <p>Since we are in the construction industry for over a decade, we have build a very good relationship with our suppliers. We will ensure that you will get all the materials required for making your house at a lesser price.</p>
</div>
</div>

    </div>

<div className='c'>

      <div class="polaroid">
  <img src={choice} alt="all"/>
  <div class="container">
    <h3>View sample products</h3>
  <p>All materials such as tiles, electrical products, kitchen items, bathroom stuff etc will be shown to you for inspection before approval.</p>
</div>
</div>
</div>

<div className='v'>


      <div class="polaroid">
  <img src={maintenance} alt="all"/>
  <div class="container">
    <h3>Maintenance service</h3>
  <p>You will have option to choose annual home maintenance service. This service will help to expand the life of your property.</p>
</div>
</div>

 </div>
 
 <div className='b'>

      <div class="polaroid">
  <img src={onsite} alt="all"/>
  <div class="container">
    <h3>On site photos</h3>
  <p>Photos of the construction site will be shared on a day to day basis so that you can track the progress of our work.</p>
</div>
</div>
 </div>
  

</div>
       <div>
        <h2>helo</h2>
       </div>


    </div>

    

  )
}

export default App
