import React from 'react'
import { useState } from "react";
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'

const AddJob = () => {

   const [input, setInput] = useState([{ skill: "" }]);

   const [showForm, setShowForm] = useState(false);

   const handleShowForm = () => {
      setShowForm(!showForm);
   };

   const handleInputChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...input];
      list[index][name] = value;
      setInput(list);
   };

   const handleInputRemove = (index) => {
      const list = [...input];
      list.splice(index, 1);
      setInput(list);
   };

   const handleInputAdd = () => {
      setInput([...input, { skill: "" }]);
   };







   return (
      <div className="add-job">
         <h1>Post new job</h1>
         <div className="add-position">
            <h2>Add New</h2>
            <button className="add-btn" onClick={handleShowForm}>+</button>
         </div>
         {showForm && (
            <div>
               <section className="addJob-form">
                  <label htmlFor="Job role">Job role</label>
                  <input type="text" placeholder="Frontend developer" />
               </section>
               <section className="addJob-form">
                  <label htmlFor="Job description">Job description</label>
                  <textarea name="Job-description" id="description-text" cols="30" rows="10" placeholder='write here...'></textarea>
               </section>
               <section className="addJob-form">
                  <form className="App" autoComplete="off">
                     <div className="form-field">
                        <label htmlFor="skill">Skill</label>
                        {input.map((singleSkill, index) => (
                           <div key={index} className="services">
                              <div className="first-division">
                                 <input
                                    name="service"
                                    type="text"
                                    id="service"
                                    // value={singleSkill.skill}
                                    onChange={(e) => handleInputChange(e, index)}

                                 />
                                 {input.length - 1 === index && input.length < 8 && (
                                    <button
                                       type="button"
                                       onClick={handleInputAdd}
                                       className="add-btn"
                                    >
                                       <span>+</span>
                                    </button>
                                 )}
                              </div>
                              <div className="second-division">
                                 {input.length !== 1 && (
                                    <button
                                       type="button"
                                       onClick={() => handleInputRemove(index)}
                                       className="remove-btn"
                                    >
                                       <span>-</span>
                                    </button>
                                 )}
                              </div>
                           </div>
                        ))}
                     </div>
                  </form>

               </section>
               <input class="submit-btn" type="submit" value="Submit" />
            </div>
         )}
      </div>

   )
}

export default AddJob