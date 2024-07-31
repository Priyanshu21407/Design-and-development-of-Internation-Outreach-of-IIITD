import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import '../styles/Partners.css'

function Partners() {

    const [Centers, setCenters] = useState([]);
    const [Institutes, setInstitutes] = useState([]);

    useEffect(()=> {
        setCenters(
            [
                {name: 'Center A', description: 'Sample Description'},
                {name: 'Center B', description: 'Sample Description'},
                {name: 'Center C', description: 'Sample Description'},
            ]
        )

        setInstitutes(
            [
                {name: 'Institute A', description: 'Sample Description'},
                {name: 'Institute B', description: 'Sample Description'},
                {name: 'Institute C', description: 'Sample Description'},
                {name: 'Institute D', description: 'Sample Description'},
                {name: 'Institute E', description: 'Sample Description'},
            ]

        )
    },[])


    return (
        <div style={{paddingTop: '6%'}}>
            <div class = "container-1">
                <div class = "content-1">
                    <h1>
                        Our Partners
                    </h1>
                    <p>
                        <ul>
                            <li>Innovation.</li>
                            <li>Knowledge.</li>
                            <li>Opportunities.</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div class = "container-2">
                <h1>
                    Our Partner Centers
                </h1>
                {Centers.length?<>
                    {Centers.map((items,index) => (
                        <div key={index}>
                            {items.name}
                            <hr></hr>
                            <br></br>
                            {items.description}
                        </div>
            ))}
            </> : <>Loading...</>}
            </div>
            <div class = "container-2">
                <h1>
                    Our Partner Institutions
                </h1>
                {Institutes.length?<>
                    {Institutes.map((items,index) => (
                        <div key={index}>
                                {items.name}
                                <hr></hr>
                            <br></br>
                            {items.description}
                        </div>
            ))}
            </> : <>Loading...</>}
            </div>
        </div>
    )
    
}

export default Partners