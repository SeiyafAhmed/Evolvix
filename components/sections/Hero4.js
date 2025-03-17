
import Link from 'next/link'
import VideoPopup from '../elements/VideoPopup'

export default function Hero4() {
    return (
        <>
            <section className="hero-section hero-4 bg-cover" style={{ backgroundImage: 'url("assets/img/section-bg.jpg")' }}>
                <div className="container">
                    <div className="row g-4 align-items-center">
                        
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="hero-image">
                                <img src="/assets/img/hero/hero-5.png" alt="hero-img" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <h6 className="wow fadeInRight">Applying Audio Visualization</h6>
                                <div className="wow fadeInLeft hero-logo" data-wow-delay=".3s"></div>
                                <p className="wow fadeInUp" data-wow-delay=".5s">
                                Revolutionizing Your Space with Cutting-Edge Audio-Visual & Control Solutions
                                </p>
                                <div className="hero-button">
                                    <Link href="/about" className="theme-btn wow fadeInUp" data-wow-delay=".7s">
                                        Explore More
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </Link>
                                    <VideoPopup style={3}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
