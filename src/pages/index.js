import styled from "styled-components";
import '../index.css'
import Testify from '../component/Testify'
import Footer from '../component/Footer'
import Marquee from 'react-fast-marquee'
import { AiFillTwitterCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Consent from '../component/Consent'

const Home = () => {

   const Enable = styled.h1`
   position: absolute;
   width: 518px;
   height: 159px;
   left: 181px;
   top: 240px;
   text-align: start;
   margin-top:-50px;
   
   font-family: 'Poppins', sans-serif;
   font-style: normal;
   font-weight: 700;
   font-size: 35px;
   line-height: 52px;
   
   color: #0F0738;
   
   text-shadow: 0px 8px 0px rgba(0, 0, 0, 0.1);
   `

   const Dip = styled.div`
   width: 1512px;
   height: 896.64px;
   left: -1px;
 background: url(/Pattern.png);
   `


  return (
     <>
        <div className="marze">
    <Dip>
        <Enable>ENABLING ACCESS TO COLLECTIVE GROWTH FOR BANKED AND UNBANKED.</Enable>
    </Dip>
    <div className="small">
       <h6>A group-based digital platform focused on enabling access to collective growth for 63 million banked and unbanked Nigerians. Building affordable and accessible digital platform to promote collective growth.</h6>
    </div>
    <div>
       <button className='btn'><Link to="/contact" className="btn-link">Contact us</Link></button>
    </div>
    <div className='box1'>
       <img src="/Frame.png" alt="" className="frame1" />
       <h1>Save Consistently</h1>
       <p className='smart'>We encourage individual/group regular savings and contribution from members at various frequency best suited for them. Daily, weekly or monthly depending on their income</p>
    </div>
    <div className='box2'>
       <img src="/Frames.png" alt="" className="frame2" />
       <h1>Borrow Easily</h1>
       <p className='smart'>We connect Individuals, cooperatives and savings group members to external funding and loan packages outside their individual or group savings to support their various businesses. </p>
    </div>
    <div className='box3'>
       <img src="/Framess.png" alt="" className="frame3" />
       <h1>Invest Together</h1>
       <p className='smart'>Investment plans and options are available for savings made by Individuals, cooperatives and groups. Put your savings to work and earn awesome returns.</p>
           </div>
           </div>



        
       
        <div>
              <section className="lady">
         <img src="/Rectangle.png" alt="" className="block" />
         <img src="/fresh.png" alt="" className="rek" />        
         <h1 className='rio'>Our Business Offerings</h1>
         <div className="block1">
            <h3>Cooperative Management</h3>            
           
            <p>We have Years of Experience Providing Technology and Management Solutions for Cooperatives, Savings Group and Associations.</p>
               <h5><Link to="/" className="lm-link">Learn More</Link></h5>
               <img src="/Vector2.png" alt="" className="vtr" />
            
         </div>

         <div className="block2">
            <h3>Agent Network Business</h3>            
           
            <p>Our agents are trained and equipped to provide micro banking services within their location or community. This is aimed at providing more value and service offering to boost revenue generation for the agents in addition to cooperative services being offered to the cooperatives and the general public.. </p>
            <h5><Link to="/" className="lm-link">Learn More</Link></h5>
               <img src="/Vector2.png" alt="" className="vtr1" />
            
         </div>

         <div className="block3">
            <h3>Financial Inclusion Programs</h3>            
           
            <p>We partner with various organizations and seek grants for a sustainable delivery of economic opportunity programs tailor-made to foster a healthy economic living of the people at the bottom of the economic pyramid across the country.</p>
               <h5><Link to="/" className="lm-link">Learn More</Link></h5>
               <img src="/Vector2.png" alt="" className="vtr2" />
            
         </div>
              </section>
              </div>

        






      <div className="container">
         <div className='third'>
            <h1 className='kri'>Our Products</h1>
            

            <div className='agbox'>
              <img src="/RibyAg.png" alt="" className="agimg" />
               <button className="btnag">Visit Product</button>
            </div>
            <div className="cpbox">
              <img src="/Ribycp.png" alt="" className="cpimg" />
               <button className="btncp">Visit Product</button>

               <div className='ribox'>
               <img src="/rimage.png" alt="" className="riimg" /> 
               <button className="btnag">Visit Product</button>
            </div>
            <div className="gobox">
               <img src="/gomage.png" alt="" className="goimg" />
               <button className="btncp">Visit Product</button>
            </div>
            </div>
         </div>
      </div>


        






        
      <div className='sct4'>
        <h1 className='per'>Our Partners</h1>
        <div className="marq">  
              <Marquee className="marq1" behavior="scroll" direction="left" speed={100}>
              <img src="/partners/29-298755_mercy-corps-logo-png.png" alt="" />
              <img src="/partners/bank of industry logo.png" alt="" /> 
              <img src="/partners/echo logo.png" alt="" />
              <img src="/partners/efina logo.png" alt="" />
              <img src="/partners/fincra logo.png" alt="" />
              <img src="/partners/Flutterwave.png" alt="" />
              <img src="/partners/google-developers-launchpad.png" alt="" />
                 <img src="/partners/green capital.jpg" alt="" />
                 <img src="/partners/Growth capital.png" alt="" />
                 <img src="/partners/I8+id46_bf9Gs+UsjHIbe5y8lBTCg6S2ZQOWTLhYA72Clto4uVRgHDoBL749RVJXYpUxoOTEcPLVlVNgc7PFv1Jt+srNJHE+MaL6AjDeWJJ38OvLd16G91C3IU6wrTAa+5BqAwlhDG_Knwy98583X50IdZkAFs1D8Du2MvYDdrJqcbWc+xZ_WRsOZIAOsfkEsfUizIMccgZzpnzdPl67A4+F_L1.jpg" alt="" />
                 <img src="/partners/ILO logo.png" alt="" />
                 <img src="/partners/interswitch.jpg" alt="" />
                 <img src="/partners/Lofty-Heights_logo-2.jpg" alt="" />
                 <img src="/partners/lux logo.png" alt="" />
                 <img src="/partners/microtraction.png" alt="" />
                 <img src="/partners/nepc logo.png" alt="" />
                 <img src="/partners/norishing africa.jpg" alt="" />
                 <img src="/partners/Passion incubator.png" alt="" />
                 <img src="/partners/Providus-Bank-Limited-Logo.png" alt="" />
                 <img src="/partners/sterling-logo.png" alt="" />
                 <img src="/partners/Verve-logo.jpg" alt="" />
                 <img src="/partners/vfd group.jpg" alt="" />
                 <img src="/partners/VFD-Group.png" alt="" />
            </Marquee>
            <Marquee className="marq2" behavior="scroll" direction="right" speed={100}>
            <img src="/partners/29-298755_mercy-corps-logo-png.png" alt="" />
              <img src="/partners/bank of industry logo.png" alt="" /> 
              <img src="/partners/echo logo.png" alt="" />
              <img src="/partners/efina logo.png" alt="" />
              <img src="/partners/fincra logo.png" alt="" />
              <img src="/partners/Flutterwave.png" alt="" />
              <img src="/partners/google-developers-launchpad.png" alt="" />
                 <img src="/partners/green capital.jpg" alt="" />
                 <img src="/partners/Growth capital.png" alt="" />
                 <img src="/partners/I8+id46_bf9Gs+UsjHIbe5y8lBTCg6S2ZQOWTLhYA72Clto4uVRgHDoBL749RVJXYpUxoOTEcPLVlVNgc7PFv1Jt+srNJHE+MaL6AjDeWJJ38OvLd16G91C3IU6wrTAa+5BqAwlhDG_Knwy98583X50IdZkAFs1D8Du2MvYDdrJqcbWc+xZ_WRsOZIAOsfkEsfUizIMccgZzpnzdPl67A4+F_L1.jpg" alt="" />
                 <img src="/partners/ILO logo.png" alt="" />
                 <img src="/partners/interswitch.jpg" alt="" />
                 <img src="/partners/Lofty-Heights_logo-2.jpg" alt="" />
                 <img src="/partners/lux logo.png" alt="" />
                 <img src="/partners/microtraction.png" alt="" />
                 <img src="/partners/nepc logo.png" alt="" />
                 <img src="/partners/norishing africa.jpg" alt="" />
                 <img src="/partners/Passion incubator.png" alt="" />
                 <img src="/partners/Providus-Bank-Limited-Logo.png" alt="" />
                 <img src="/partners/sterling-logo.png" alt="" />
                 <img src="/partners/Verve-logo.jpg" alt="" />
                 <img src="/partners/vfd group.jpg" alt="" />
                 <img src="/partners/VFD-Group.png" alt="" />
           </Marquee>
         
              <h2 className='par'>What People Are Saying About Us</h2>
              <Testify />
         </div>            
        </div>
        <Consent />
      <Footer />
</>

  )
}

export default Home