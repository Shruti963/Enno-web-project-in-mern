// import React from 'react';
import './TeamSection.css';
import team1 from "./images/team-1.jpg";
import team2 from "./images/team-2.jpg";
import team3 from "./images/team-3.jpg";


const teamMembers = [
    {
        name: 'Walter White',
        role: 'Chief Executive Officer',
        image: team1,
        delay: 100,
        social: ['twitter-x', 'facebook', 'instagram', 'linkedin']
    },
    {
        name: 'Sarah Jhonson',
        role: 'Product Manager',
        image: team2,
        delay: 200,
        social: ['twitter-x', 'facebook', 'instagram', 'linkedin']
    },
    {
        name: 'William Anderson',
        role: 'CTO',
        image: team3,
        delay: 300,
        social: ['twitter-x', 'facebook', 'instagram', 'linkedin']
    }
];
const TeamSection = () => {
    return (
        <>
            <div id="team" className="Head-title ">
                <span>Section Title</span>
                <h1>team</h1>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            <section className="container mainteam">
                <div className={`row gy-5`}>
                    {teamMembers.map((member, index) => (
                        <div
                            className="col-lg-4 col-md-6"
                            data-aos="fade-up"
                            data-aos-delay={(index + 1) * 100}
                            key={index}
                        >
                            <div className="member">
                                <div className="pic">
                                    <img src={member.image} className="img-fluid" alt={member.name} />
                                </div>
                                <div className="memberInfo">
                                    <h4>{member.name}</h4>
                                    <hr />
                                    <div className="member-data d-flex justify-content-between">
                                        <span>{member.role}</span>
                                        <div className="social">
                                            {member.social.map((platform, i) => (
                                                <a href="#" key={i}><i className={`bi bi-${platform}`}></i></a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default TeamSection;
