
import Link from 'next/link'

export default function Service3() {
    return (
        <>
            <section className="service-section-3 pb-0 fix section-padding bg-cover" style={{ backgroundImage: 'url("assets/img/service/service-bg-3.jpg")' }}>
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title ">
                            <h2 class="text-uppercase">
                            Unleash the Power of Innovation
                            </h2>
                        </div>
                        {/* <Link href="/service" className="theme-btn">
                            See all Services
                            <i className="fa-solid fa-arrow-right-long" />
                        </Link> */}
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="service-card-items">
                                <div className="service-image">
                                    <img src="/assets/img/service/02.jpg" alt="service-img" />
                                </div>
                                <div className="icon-2">
                                    <img src="/assets/img/service/icon/s-icon-1.svg" alt="img" />
                                </div>
                                <div className="service-content">
                                    <div className="icon">
                                        <img src="/assets/img/service/icon/s-icon-1.svg" alt="img" />
                                    </div>
                                    <h4>
                                        <Link href="/service-details">Tailored AV Solution</Link>
                                    </h4>
                                    <p class="text-justify">
                                    Forget one-size-fits-all. We design 
                                    personalized audio visual experiences 
                                    that are as unique as your space, 
                                    delivering the perfect setup for 
                                    boardrooms, home theatres, and 
                                    everything in between.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="service-card-items">
                                <div className="service-image">
                                    <img src="/assets/img/service/02.jpg" alt="service-img" />
                                </div>
                                <div className="icon-2">
                                    <img src="/assets/img/service/icon/s-icon-1.svg" alt="img" />
                                </div>
                                <div className="service-content">
                                    <div className="icon">
                                        <img src="/assets/img/service/icon/s-icon-1.svg" alt="img" />
                                    </div>
                                    <h4>
                                        <Link href="/service-details"> Effortless Integration</Link>
                                    </h4>
                                    <p class="text-justify">
                                    We ensure seamless integration of all 
                                    your AV equipment—from speakers to 
                                    screens—so you can enjoy a flawless, 
                                    hassle-free experience every time.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="service-card-items">
                                <div className="service-image">
                                    <img src="/assets/img/service/02.jpg" alt="service-img" />
                                </div>
                                <div className="icon-2">
                                    <img src="/assets/img/service/icon/s-icon-1.svg" alt="img" />
                                </div>
                                <div className="service-content">
                                    <div className="icon">
                                        <img src="/assets/img/service/icon/s-icon-2.svg" alt="img" />
                                    </div>
                                    <h4>
                                        <Link href="/service-details"> Immersive Experience</Link>
                                    </h4>
                                    <p class="text-justify">
                                    Deliver immersive experiences through 
                                    seamless 
                                    AV integration, smart 
                                    automation, and cutting-edge control 
                                    solutions—transforming spaces into 
                                    dynamic, interactive environments
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                <div className="cta-banner-2 section-padding">
                    
                </div>
            </section>
        </>
    )
}
