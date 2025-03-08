import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const HomeAbout = () => {
    return (
        <>
            <section id="about" className="py-5">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Text Content */}
                        <div className="col-md-6">
                            <h2 className="fw-bold mb-4">Who We Are?</h2>
                            <p className="text-secondary mb-3">
                                BCAS is a leading air conditioning sales & service provider with over
                                18 years of experience. We take pride in being a trusted partner of
                                Mitsubishi Electric and a multi-brand dealer, ensuring top-quality solutions.
                            </p>
                            <p className="text-secondary mb-4">
                                Our dedication to customer service has helped us build long-lasting
                                relationships, making us the go-to choice for air conditioning needs.
                            </p>
                            <a href="#c" className="btn" style={{ backgroundColor: "#3c348d", color: "white" }}>Learn More About Us</a>
                        </div>

                        {/* Image */}
                        <div className="col-md-6 mt-3">
                            <div className="rounded overflow-hidden">
                                <img
                                    src="https://public.readdy.ai/ai/img_res/0a8af7ee8cdc6fc945240df92a3f690e.jpg"
                                    alt="Professional Team"
                                    className="img-fluid rounded"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeAbout;