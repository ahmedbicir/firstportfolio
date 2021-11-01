
import logo from '../image/design.png';
import image from '../image/webicon.png';
import images from '../image/press.png';
import sawir from '../image/bicir.jpg';
import fawzi from '../image/fawzi.jpg';
import tukke from '../image/tukke.jpg';
import babikir from '../image/babikir.jpg'
import React from 'react';

function Home() {
  return (


    <div className="head">
      <section className="Background">

        <div>
          <p>hi!.i am <span>ahmed Mohamed</span></p>
          <p> a developer</p>

        </div>
      </section>
      <h1>What i do</h1>
      <div className="design">
        <div>
          <img src={logo} />
          <h1>Web Design</h1>
          <p>There are few things in design that are more subjective—or more important—than the use of color. A color that can evoke one reaction in one person may evoke the opposite reaction in another, due to culture, prior association, or even just personal preference</p>
        </div>
        <div>
          <img src={image} />
          <h1>WEB DEVELOPMENT</h1>
          <p>I develop websites  and systems by following the development life cycle</p>
          <p>.designing,implementing,testing  deploying and maintaining</p>

        </div>
        <div>
          <img src={images} />
          <h1>WORDPRESS</h1>
          <p> Welcome to the world's most popular website builder. 40% of the web is.</p>

          <p>  built on WordPressit is  easy to learn and develop website wtihin short period of tim</p>

        </div>
      </div>

      <div className="testimonials">
        <h1>testmonials</h1>
        <div className="design">
          <div>
            <img src={fawzi} />
            <h1>farah Fazi</h1>
            <p>indeed my employees praised you  for the work done it few days. thank you very mcuh  for your help.</p>
          </div>

          <div>
            <img src={tukke} />
            <h1>Mohamed Tuke</h1>
            <p>your great guidance and kind assistance  is always remembered.</p>

          </div>
          <div>
            <img src={babikir} />
            <h1>babikir </h1>
            <p>you will remain in our memories as one of our favourite  teacher and a great inspirer</p>

          </div>
        </div>
      </div>

    </div>
  )
}


export default Home