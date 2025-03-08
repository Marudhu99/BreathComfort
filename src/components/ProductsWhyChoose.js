import React from 'react';
import { Container, Row } from 'react-bootstrap';

const cards = [
    {
        image : "",
        title: "Trusted Multi-Brand Dealer",
        description: "Premium solutions from industry leaders like Mitsubishi Electric, Blue Star, and Daikin, ensuring quality and reliability.",
    },
    {
        image : "",
        title: "Expert Installation & Support",
        description: "Certified technicians providing professional installation, maintenance, and round-the-clock support.",
    },
    {
        image : "",
        title: "Customizable Solutions",
        description: "Tailored AC and ventilation solutions designed to meet specific requirements across various industries.",
    }
]
const ProductWhyChoose = () => {
    return (
        <>
            <section className="py-5 bg-light">
                <Container>
                    <div className="text-center mb-4">
                        <h2 className="fw-bold mb-3">Why Choose Breath Comfort?</h2>
                    </div>
                    <Row>
                        {cards.map((card, index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <div className="expertise-card p-4 shadow text-center h-100 rounded-3 ">
                                    <div className="expertise-image">
                                        <img src={card.image} alt="" className="w-100 h-100 object-fit-cover" />
                                    </div>
                                    <h3 className="fw-bold my-3">{card.title}</h3>
                                    <p className="text-muted">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ProductWhyChoose;