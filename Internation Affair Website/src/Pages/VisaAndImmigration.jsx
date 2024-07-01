import React, { useState } from "react";
import '../styles/VisaAndImmigration.css'


function VisaAndImmigration () {

    const [FAQ, setFAQ] = useState([]);
    const [FAQtoggle, setFAQtoggle] = useState(-1)
    
    useState (()=> {
        setFAQ(
            [
            {qs: "Do I have to leave the India when the entry visa in my passport expires?",
                as: "sample answer" },
            {qs : "What happens if my entry visa expires while I’m in the India?",
                as : "sample answer"},
            {qs: "What if I get a new passport, but my entry visa is still valid in my old one?",
                as: "sample answer"},
            {qs: "What if I lose my passport with the valid entry visa?",
                as: "sample answer"},
            {qs: "I have other questions about my visa.",
                as: "sample answer"}
            ]
        )

    },[])

    return (
        <div class = "root">
            <div class="Container-1">
                <h1>
                    Introduction
                </h1>
                <div style = {{display: 'flex', justifyContent: 'space-between'}}>

                    <p>
                        Sample Data On introduction
                    </p>
                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO0VLGoGWGCQ5Sl3TdFGza2FuTdrZ8ZhLX6Q&s"
                    style={{'border-radius': '10px', 'margin-right': '16px'}} />
                </div>
            </div>
            <div class="Container-2">
                <h1>
                    Types of Visas
                </h1>
                <ul>
                <li>Type 1</li>
                <li>Type 2</li>
                <li>Type 3</li>
                </ul>

            </div>
            <div class="Container-3">
                <h1>
                    Application Process
                </h1>
                <p>Following is the process for Visa Application : </p>
                <ul>
                    <li>Step1</li>
                    <li>Step2</li>
                    <li>Step3</li>
                    <li>Step4</li>
                    <li>Step5</li>
                </ul>
            </div>
            <div class="Container-4"> 
                <h1>
                    Important Deadlines
                </h1>
                <ul>
                    <li>Deadline 1: </li>
                    <li>Deadline 2: </li>
                    <li>Deadline 3: </li>
                </ul>
                
            </div>
            <div class="Container-5">
                <h1>
                    FAQs
                </h1>
                {FAQ.length?<>
                    {FAQ.map((items,index) => (
                        <div key={index} onClick={()=> {FAQtoggle==index? setFAQtoggle(-1) : setFAQtoggle(index)}}>
                            {items.qs}
                            <br></br>
                            {FAQtoggle==index? <><br></br>{items.as}</> : <></>}
                            </div>
            ))}
            </> : <>NO FAQS</>}
                

            </div>
        </div>
    )


}

export default VisaAndImmigration