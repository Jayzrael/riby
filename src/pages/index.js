import styled from "styled-components";
import '../index.css'
import Testify from '../component/Testify'
import Marquee from 'react-fast-marquee'
import { AiFillTwitterCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Home = () => {

   const Enable = styled.h1`
   position: absolute;
   width: 518px;
   height: 159px;
   left: 181px;
   top: 240px;
   text-align: start;
   
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
   top: -50px;
 background: url(/Pattern.png);
   `


  return (
    <>
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
            <Marquee className="marq1" behavior="scroll" direction="left" speed={80}>
              <img src="/Interswitch 1.png" alt="" />
              <img src="/Providus 1.png" alt="" /> 
              <img src="/UnionBank 1.png" alt="" />
              <img src="/Sterling 1.png" alt="" />
              <img src="/grill.png" alt="" />
              <img src="/bank.png" alt="" />
              <img src="/UnionBank 1.png" alt="" />
              <img src="/Sterling 1.png" alt="" />
            </Marquee>
            <Marquee className="marq2" behavior="scroll" direction="right" speed={80}>
             <img src="/Interswitch 1.png" alt="" />
             <img src="/Providus 1.png" alt="" />           
             <img src="/UnionBank 1.png" alt="" />
             <img src="/Sterling 1.png" alt="" />
             <img src="/grill.png" alt="" />
             <img src="/bank.png" alt="" />
             <img src="/UnionBank 1.png" alt="" />
             <img src="/Sterling 1.png" alt="" />
           </Marquee>
         
              <h2 className='par'>What People Are Saying About Us</h2>
              <Testify />
         </div>            
      </div>
    

        





        

   <div className='foot'>
      <footer>
        <h1 className='hello'>Say Hello </h1>
        <h3 className='loc'>Block G, House 4, Moore Road, Yaba, Lagos.</h3>
        <img src="/phone.png" alt="" className="fone" />
        <h3 className='num'> 01-2914247 </h3>
        <h3 className='num1'> 08092222109 </h3>
        <img src="/mail.png" alt="" className='mole' />
        <h3 className='mail'>info@riby.me</h3>
        <h3 className="follow">Follow Us: </h3>
        <img src="/book.png" alt="" className="book" />
        <a href="https://instagram.com/ribyhq/"><img src="/hole.png" alt="" className="hole" /></a>
        <a href="https://www.linkedin.com/company/riby-finance/"><img src="/inked.png" alt="" className="inked" /></a>
        <img src="/tweet.png" alt="" className="tweet" />
        <img src="/emm.png" alt="" className="emm" />
        <img src="/call.png" alt="" className="call" />
        <a href="https://www.youtube.com/channel/UC4R1hiwCXMQT-_VFS6Q0LcA"><img src="/tube.png" alt="" className="tube" /></a>
        <h1 className="quick">Quick Links</h1>
        <h3 className="q1">About Us</h3>
        <h3 className="q2">Blogs</h3>
        <h3 className="q3">Contact Us</h3>
        <h3 className="q4">Partners & Programs</h3>
        <h3 className="q5">Career</h3>
        <h3 className="q6">Terms of use</h3>
        <h3 className="q7">Privacy Notice</h3>
        <h1 className="news">Newsletter</h1>
        <h4 className="sb">Be the first to know about our news.</h4>
        <label for="email_input">Enter your email address:</label>
        <input type="email" name="email" id="email_input" placeholder="Enter your mail"></input>
        <input type="submit" className="xbtn" value='Subscribe' />

        <hr className="dij" />
        <h3 className="cop">©2016-2022 Riby. RC: 1214343</h3>


      </footer>
   </div>


</>

  )
}

export default Home