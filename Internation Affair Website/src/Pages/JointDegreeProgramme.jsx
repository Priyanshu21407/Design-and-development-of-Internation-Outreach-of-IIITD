import React, { useEffect, useState } from "react";
import '../styles/jointdegree.css'

 function JointDegreeProgramme() {
    const [programs, setPrograms] = useState([]);
    const [toggle, settoggle] = useState(0)

    useEffect(()=> {
        setPrograms(
            [
                {name: 'Program A', description: 'Sample Description'},
                {name: 'Program B', description: 'Sample Description'},
                {name: 'Program C', description: 'Sample Description'},
            ]
        )},[])

        return (
          <div className="container">
          <div className="sectionn-intro">
            <h1 className="title">Joint Degree Program</h1>
            {/* <p className="intro">Explore unique opportunities to earn dual qualifications</p> */}
          </div>
          <div className="section">
            <h1 className="title">Dual-Degree Programs</h1>
            {programs.length ? (
              <>
                {programs.map((items, index) => (
                  <div key={index} className="program-card">
                    <h2 className="program-name">{items.name}</h2>
                    <p className="program-description">{items.description}</p>
                    <a href="#" className="program-link">Program Structure</a>
                  </div>
                ))}
              </>
            ) : (
              <>Loading...</>
            )}
          </div>
          <div className="section">
            <div className="dropdown">
              <div className="dropdown-header" onClick={() => { settoggle(!toggle) }}>
                <h1 className="title">Eligibility Criteria</h1>
                <img src="https://icons.veryicon.com/png/o/miscellaneous/small-monochrome-icon/drop-down-arrow-4.png" alt="Dropdown Icon" className={`dropdown-icon ${toggle ? 'toggle' : ''}`}/>
              </div>
              <div className={`dropdown-content ${toggle ? 'show' : ''}`}>
                <p className="eligibility-criteria">Eligibility criteria description</p>
              </div>
            </div>
          </div>
        </div>
        
        
          );
     
 }

 export default  JointDegreeProgramme