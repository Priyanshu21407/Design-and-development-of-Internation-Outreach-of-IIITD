import React from "react";

import '../styles/facultydevelopment.css'

function FacultyDevelopment () {
    
    return (
        <div className="container">
            <div className="main-title">
                <h1 className="heading">Faculty Development</h1>
            </div>

            <div className="section objectives-section">
                <h1 className="section-title">Objectives of the Program</h1>
                <ul className="list">
                    <li><i className="icon">🎯</i> To equip faculty members with innovative teaching methodologies and effective pedagogical techniques that improve student engagement and learning outcomes.</li>
                    <li><i className="icon">📚</i> To encourage and support faculty in conducting high-quality research, publishing in reputed journals, and securing research grants.</li>
                    <li><i className="icon">🎓</i> To provide opportunities for continuous professional development through workshops, seminars, and collaborative projects, thereby advancing faculty careers.</li>
                    <li><i className="icon">💡</i> To assist faculty in designing and updating curricula that meet the evolving needs of the industry and academia, ensuring that programs remain relevant and rigorous.</li>
                    <li><i className="icon">🌟</i> To develop leadership skills among faculty members, enabling them to mentor students and junior colleagues effectively and to take on leadership roles within the institution.</li>
                </ul>
            </div>

            <div className="section benefits-section">
                <h1 className="section-title">Benefits</h1>
                <ul className="list">
                    <li><i className="icon">📈</i> Gain access to a variety of professional development opportunities, including workshops, seminars, and conferences that enhance your teaching, research, and leadership skills.</li>
                    <li><i className="icon">🤝</i> Connect with peers, experts, and industry professionals, fostering relationships that can lead to collaborative projects and research opportunities.</li>
                    <li><i className="icon">📝</i> Receive guidance and resources to boost your research activities, from securing funding to publishing your work in high-impact journals.</li>
                </ul>
            </div>

            <div className="section resources-section">
                <h1 className="section-title">Resources</h1>
                <div className="resource" onClick={() => {}}>
                    <h2>Teaching Resources</h2>
                    <p>Discover resources for teaching</p>
                </div>
                <div className="resource" onClick={() => {}}>
                    <h2>Mentoring Resources</h2>
                    <p>Discover resources for mentoring and institution's initiatives</p>
                </div>
                <div className="resource" onClick={() => {}}>
                    <h2>Publication Guide</h2>
                    <p>Discover resources regarding guidance in publication of papers</p>
                </div>
            </div>
        </div>


    );

}

export default FacultyDevelopment;