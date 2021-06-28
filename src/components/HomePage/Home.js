import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className='home'>
           <div className='container'>
               <div className='row'id='rows'>
                   <div className='col-md-7'id='text-colum'>
                       <h1>Launch beautiful websites directly from Sketch</h1>
                       <p>It is a long established fact that a reader will be 
                           distracted by 
                          the readable content of a page when looking at its layout.
                        </p>
                        <button type='button'className='btn btn-primary btn-help-2 mt-4'>Clickto learn more</button>
                   </div>
                   <div className='col-md-5'id='home-img-div'>
                       <img className='image-home'src='tabs.svg'alt='image1' />
                   </div>

               </div>

                <div className='row'id='card-row'>
                  <div className='main-card'>
                   <div className='Card-X'>
                     <img className='card-img'src='team-01.jpg' />
                        <ul>
                          <li>Jhon Alex</li>
                          <li className='sub-title'>CEO of Facebook</li>
                        </ul>            
                     </div>
                      <div>
                        <p className='last-card-paragraph'>Various versions have evolved over the years, sometimes 
                          by accident, sometimes on purpose </p>
                       </div>
                   </div>

                   <div className='main-card'>
                   <div className='Card-X'>
                     <img className='card-img'src='team-03.jpg' />
                        <ul>
                          <li>Rock darda</li>
                          <li className='sub-title'>CEO of instagram</li>
                        </ul>            
                     </div>
                      <div>
                        <p className='last-card-paragraph'>Various versions have evolved over the years, sometimes 
                          by accident, sometimes on purpose </p>
                       </div>
                   </div>
                 </div>                   
           </div>
          
        </div>
    )
}

export default Home
