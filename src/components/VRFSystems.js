import React from 'react';
import { Container, Row } from 'react-bootstrap';

const vrfsystems = [
    {
        image :require( "../assets/images/VRF Outdoor Units.png"),
        title: "VRF Outdoor Units",
        description: "High-performance outdoor units delivering exceptional energy efficiency and reliable operation for your building's climate control needs.",
        bulletList:[
          "Inverter Technology",
          "Modular Design",
          "Smart Connectivity",
            
        ]
    },
    {
        image :require("../assets/images/VRF Indoor Units.png") ,
        title: "VRF Indoor Units",
        description: "Versatile indoor units designed to complement any interior while providing optimal comfort and air distribution.",
        bulletList:[
            "Ceiling Cassettes",
            "Wall-Mounted Units",
            "Ducted Systems",
            
        ]
    },
    {
        image :require( "../assets/images/Smart Controllers.png"),
        title: "Smart Controllers",
        description: "Advanced control systems providing intuitive operation and comprehensive system management capabilities.",
        bulletList:[
            "Wireless Controls",
            "Central Management",
            "Energy Monitoring",
        ]
    }
]
const VRFSystems = () => {
    return (
        <>
            <section className="py-5 bg-light">
                <Container>
                    <div className="text-center mb-4">
                        <h2 className="fw-bold mb-3">High-Performance VRF Systems for Every Space
                        </h2>
                    </div>
                    <Row>
                        {vrfsystems.map((system, index) => (
                            <div key={index} className="col-md-4 mb-4 ">
                                <div className="expertise-card  shadow text-start rounded-3">
                                    <div className="expertise-image">
                                        <img src={system.image} alt="" className="w-100 h-100 object-fit-cover " style={{maxHeight:200,backgroundPosition:"center",backgroundSize:"cover"}}/>
                                    </div>
                                    <div className='p-4'>
                                        <h4 className="fw-bold my-3">{system.title}</h4>
                                        <p className="text-muted">{system.description}</p>
                                        {system.bulletList?.length > 0 && (
                                        <ul>
                                            {system.bulletList.map((item, i) => (
                                                <li key={i} className='text-muted'>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default VRFSystems;