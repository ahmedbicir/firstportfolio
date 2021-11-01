import React from 'react'
import sawir from '../image/bicir.jpg';
import html from '../image/html.png';
import css from '../image/css.png';
import js from '../image/js.png';
import php from '../image/php2.png';

function About() {
   return (
      <div className="head">
         <div className="bio">
            <img src={sawir} />

            <div className="bio_sawir">
               <h1>why choose me?</h1>
               <p>I  am a Web Designer, Web Developer with over 2years of experience. Experienced with all stages</p>
               <p>of the development cycle for dynamic and static web projects.developing and designing user interfaces,</p>
               <p>testing,debugging and training staff.proven ability in optimizing  web functionalities that improve data</p>
               <p> retrieval and workflow efficiencies.I am solution driven web developer ,finding solutions and determining customer</p>
               <p>Click on the image to download it:</p>
               <p>I’m a freelance designer & developer based in Kenya.</p>

            </div>
         </div>
         <section className="skills_container">
            <h1>Skills</h1>
            <div className="skills">

               <section class="firstone">
                  <p>html</p>
                  <div>
                     <article>90%</article>

                  </div>
                  <p>css</p>
                  <div>
                     <article>90%</article>

                  </div>
                  <p>Js</p>

                  <div>
                     <article>90%</article>

                  </div>
               </section>
               {/* <!-- second one --> */}
               <section class="second">
                  <p>React</p>
                  <p>ahmed</p>
                  <div>
                     <article>60%
                     </article>
                  </div>
                  <p>Sass</p>
                  <div>
                     <article>70%
                     </article>
                  </div>
                  <p>Python</p>

                  <div>
                     <article>60%
                     </article>
                  </div>
               </section>
               <section class="third">
                  <p>php</p>
                  <div>
                     <article>60%
                     </article>
                  </div>
                  <p>sql</p>
                  <div>
                     <article>70%
                     </article>
                  </div>
                  <p>laravel</p>

                  <div>
                     <article>60%
                     </article>
                  </div>
               </section> <section class="fourth">
                  <p>C</p>
                  <div>
                     <article>60%
                     </article>
                  </div>
                  <p>C++</p>
                  <div>
                     <article>70%
                     </article>
                  </div>
                  <p>Java</p>

                  <div>
                     <article>60%
                     </article>
                  </div>
               </section>

            </div>

         </section>
         <section className="contact">
            <h1>Simple Hellow Could Lead  To  Million Things
            </h1>
            <h2>Dont Hesitate To Email Me</h2>
            <a href="mailto:youngbicir@gmail.com?subject = Feedback&body = Message">
               <button>Send Me Email</button>
            </a>
            {/* <button>Contact us</button> */}
         </section>

      </div>
   )
}

export default About
