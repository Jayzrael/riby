import React from 'react'
import styled from "styled-components";
import '../index.css'

const section1 = () => {

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
       <button className='btn'>Contact us</button>
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
        </>
  )
}

export default section1