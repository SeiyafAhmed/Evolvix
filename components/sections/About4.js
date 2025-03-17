
import Link from 'next/link'

export default function About4() {
    return (
        <>
            <section className="about-section section-padding fix bg-cover pt-0 mb-2" id="about">
                <div className="container">
                    <div className="about-wrapper-2 style-2">
                        <div className="row">
                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <div className="about-content">
                                    <div className="section-title">
                                        {/* <span className="wow fadeInUp">ABOUT INFOTECK</span> */}
                                        <h2 className="wow fadeInUp  mt-3 " data-wow-delay=".3s">
                                            ABOUT 
                                            <div class="col text-logo"></div>
                                        </h2>
                                    </div>
                                    <p className="mt-3 mt-md-0 wow fadeInUp text-justify" data-wow-delay=".5s">
                                    Evolvix is a specialized Audio-Visual (AV) and Control Systems programming company dedicated to delivering seamless, high
performance solutions for businesses, institutions, and industries. 
                                    </p>
                                    <div className="icon-area wow fadeInUp" data-wow-delay=".7s">
                                        <ul className="list">
                                            <li>
                                                <i className="fa-regular fa-circle-check" />
                                                AV automation
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-check" />
                                                DSP programming
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-check" />
                                                system integration
                                            </li>
                                        </ul>
                                        <ul className="list">
                                            <li>
                                                <i className="fa-regular fa-circle-check" />
                                                clients experience intuitive
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-check" />
                                                efficient
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-circle-check" />
                                                future-ready technology solutions
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div className="about-button wow fadeInUp" data-wow-delay=".9s">
                                        <Link href="/about" className="theme-btn">
                                            Explore More
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                                    </div> */}
                                </div>
                            </div>
                            
                            <div className="col-lg-6">
                                <div className="about-image-2 wow fadeInUp" data-wow-delay=".4s">
                                    <img src="/assets/img/about/08.png" alt="about-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
