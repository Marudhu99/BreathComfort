import React from 'react';
import { Container, Row} from "react-bootstrap";

const expertise = [
    {
        image: require("../assets/images/Split_Air_Conditioner.jpg"),
        title: "Split Air Conditioners",
        description: "Energy-efficient split AC systems with advanced cooling technology and smart climate control features."
    },
    {
        image: require("../assets/images/Window_Air_Conditioner.jpg"),
        title: "Window Air Conditioners",
        description: "Compact window-mounted units perfect for single rooms, featuring quick installation and reliable performance."
    },
    {
        image: require("../assets/images/Package_Air_Conditioners.jpg"),
        title: "Package Air Conditioners",
        description: "Complete cooling solutions for commercial spaces with integrated air handling and temperature control."
    },
    {
        image: require("../assets/images/Ductable_Air_Conditioners.jpg"),
        title: "Ductable Air Conditioners",
        description: "High-capacity ducted systems for whole-building climate control with advanced air distribution."
    },
    {
        image: require("../assets/images/VRF & VRV Systems.jpg"),
        title: "VRF & VRV Systems",
        description: "State-of-the-art variable refrigerant flow systems for precise zonal temperature management."
    },
    {
        image: require("../assets/images/Chillers.jpg"),
        title: "Chillers",
        description: "State-of-the-art variable refrigerant flow systems for precise zonal temperature management."
    },
    {
        image: require("../assets/images/Cold_Room_Systems.jpg"),
        title: "Cold Room Systems",
        description: "Specialized cooling solutions for storage facilities and industrial refrigeration needs."
    },
    {
        image: require("../assets/images/Clean_Room_Systems.jpg"),
        title: "Clean Room Systems",
        description: "Precision air handling units for controlled environments and laboratory facilities."
    },
]

const Expertise = () => {
    return (
        <>
            <section className="py-5 bg-light">
                <Container>
                    <div className="text-center mb-4">
                        <h2 className="fw-bold mb-3">Explore Our Premium Air Conditioning & Ventilation Solutions</h2>
                    </div>
                    <Row>
                        {expertise.map((exp, index) => (
                            <div key={index} className="col-md-3 mb-4">
                                <div className="expertise-card shadow text-start h-100 rounded-3">
                                    <div className="expertise-image ">
                                        <img src={exp.image} alt="" className="w-100  " style={{maxHeight:200}}/>
                                    </div>
                                    <div className='card-body  p-3'>
                                        <h4 className="fw-bold my-3">{exp.title}</h4>
                                        <p className="text-muted">{exp.description}</p>
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

export default Expertise;