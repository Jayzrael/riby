import './Aboutpage-section1.css'

const AboutpageSection1 = ({ heading, text1, text2 }) => {
   return (
      <>
         <div className="aboutContent">
            <div className="aboutpage-section1-image">
               {/* <img src="/Betatogether.png" alt="" className="aboutContentImg" /> */}
            </div>
            <div className="aboutContentText">
               <h3>{heading}</h3>
               <p>
                  {text1}
               </p>
               <p>
                  {text2}
               </p>
            </div>
         </div>
      </>
   )
}

export default AboutpageSection1