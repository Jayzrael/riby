import './Career-Section2.css'
import { Link } from 'react-router-dom'

const Section2 = () => {

   const CareerCards = [
      {
         imageUrl: '',
      },
      {
         imageUrl: '',
      },
      {
         imageUrl: '',
      },
      {
         imageUrl: '',
      }
   ]

   return (
      <>
         <section className="career-section2">
            <div className="section2-images"></div>
            <div className="text-content">
               <h1>Come Work With Us</h1>
               <p>
                  We're looking for great minds to join our #BETTERTOGETHER growing team.
               </p>
               <p>
                  At Riby, we are always looking for talented individuals who aligns with our mission to enabling access to collective growth for 63 million banked and unbanked Nigerians.
               </p>
               <button className="see-all-openings"><Link to="/JobPosting"> See All Openings</Link></button>
            </div>

         </section>
      </>
   )
}

export default Section2