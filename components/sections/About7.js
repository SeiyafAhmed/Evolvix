
import Link from 'next/link'

export default function About7() {
    return (
        <>
            <section className="about-section section-padding fix bg-cover pt-0 mb-2" id="about">
                <div className="container">
                    <div className="about-wrapper-2 style-2">
                        <div className="row">
                            
                            <div className="col-lg-6">
                                <div className="about-image-2 wow fadeInUp " data-wow-delay=".4s">
                                    <img src="/assets/img/about/09.png" alt="about-img" />
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <div className="about-content">
                                    <div className="section-title">
                                        {/* <span className="wow fadeInUp">ABOUT INFOTECK</span> */}
                                        <h2 className="wow fadeInUp row text-uppercase text-center" data-wow-delay=".3s">
                                            Why <div class="col text-logo-1"></div> 
                                            
                                        </h2>
                                    </div>
                                    <div className="icon-area wow fadeInUp" data-wow-delay=".7s">
                                        <ul className="list" class="text-justify">
                                            <li class="mb-3">
                                                    <i className="fa-regular fa-circle-check"/>
                                                    <b>Custom Control Interfaces:</b> Seamless integration with QSC, 
                                                Crestron, Extron, Biamp, AMX, and more for optimized 
                                                performance
                                                
                                            </li>
                                            <li class="mb-3">
                                                <i className="fa-regular fa-circle-check" />
                                                <b>Precision Audio Optimization:</b> S Smart tuning, noise suppression, 
                                                and acoustic enhancement for crystal-clear sound
                                            </li>
                                            <li class="mb-3">
                                                <i className="fa-regular fa-circle-check" />
                                                <b> Smart Control at Your Fingertips:</b> Seamlessly manage AV, 
                                                    lighting, and automation with intuitive, touch-enabled control for 
                                                    effortless operation
                                            </li>
                                            <li class="mb-3">
                                                <i className="fa-regular fa-circle-check"/>
                                                <b>Multi-Zone Audio for Maximum Flexibility</b> Customize audio 
                                                zones for any space—perfect for both luxury homes and large 
                                                commercial settings
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
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
