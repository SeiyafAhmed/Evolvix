
import Link from 'next/link';

var data = `{
    "content":[
        {
            "n":1,
            "image": "/assets/img/about/09.png",
            "head": " Custom Audio-Visual Systems That Redefine Your Space",
            "description": " Imagine a space where every visual is crystal clear and every sound is immersive. With Evolvix, that vision becomes reality. We specialize in high-performance AV systems that integrate flawlessly into your environment, whether for business, entertainment, or relaxation",
            "points": [
                ["Tailored Control Solutions:", "Seamless integration with QSC, Crestron, Extron, Biamp, AMX, and more for optimized performance."],
                ["Precision Audio Optimization:", " Smart tuning, noise suppression, and acoustic enhancement for crystal-clear sound"],
                ["Smart Control at Your Fingertips", "Seamlessly manage AV, lighting, and automation with intuitive, touch-enabled control for effortless operation"],
                [" Multi-Zone Audio for Maximum Flexibility:", " Customize audio zones for any space—perfect for both luxury homes and large commercial settings"]
            ]
        },
        {
            "n":2,
            "image": "/assets/img/about/09.png",
            "head": " Smart Control Systems That Empower Your Space",
            "description": " Take control of your environment in the most sophisticated way possible. With Evolvix’s advanced control programming, we make your space work smarter, not harder, so you can focus on what matters most",
            "points": [
                [" Custom Control Interfaces:", "Seamless integration with QSC, Crestron, Extron, Biamp, AMX, and more for optimized performance."],
                ["Precision Audio Optimization:", " Smart tuning, noise suppression, and acoustic enhancement for crystal-clear sound"],
                ["Smart Control at Your Fingertips", "Seamlessly manage AV, lighting, and automation with intuitive, touch-enabled control for effortless operation"],
                [" Multi-Zone Audio for Maximum Flexibility:", " Customize audio zones for any space—perfect for both luxury homes and large commercial settings"]
            ]
        },
        {
            "n":3,
            "image": "/assets/img/about/09.png",
            "head": " Custom Audio-Visual Systems That Redefine Your Space",
            "description": " Imagine a space where every visual is crystal clear and every sound is immersive. With Evolvix, that vision becomes reality. We specialize in high-performance AV systems that integrate flawlessly into your environment, whether for business, entertainment, or relaxation",
            "points": [
                ["Tailored Control Solutions:", "Seamless integration with QSC, Crestron, Extron, Biamp, AMX, and more for optimized performance."],
                ["Precision Audio Optimization:", " Smart tuning, noise suppression, and acoustic enhancement for crystal-clear sound"],
                ["Smart Control at Your Fingertips", "Seamlessly manage AV, lighting, and automation with intuitive, touch-enabled control for effortless operation"],
                [" Multi-Zone Audio for Maximum Flexibility:", " Customize audio zones for any space—perfect for both luxury homes and large commercial settings"]
            ]
        },
        {
            "n":4,
            "image": "/assets/img/about/09.png",
            "head": " Custom Audio-Visual Systems That Redefine Your Space",
            "description": " Imagine a space where every visual is crystal clear and every sound is immersive. With Evolvix, that vision becomes reality. We specialize in high-performance AV systems that integrate flawlessly into your environment, whether for business, entertainment, or relaxation",
            "points": [
                ["Tailored Control Solutions:", "Seamless integration with QSC, Crestron, Extron, Biamp, AMX, and more for optimized performance."],
                ["Precision Audio Optimization:", " Smart tuning, noise suppression, and acoustic enhancement for crystal-clear sound"],
                ["Smart Control at Your Fingertips", "Seamlessly manage AV, lighting, and automation with intuitive, touch-enabled control for effortless operation"],
                [" Multi-Zone Audio for Maximum Flexibility:", " Customize audio zones for any space—perfect for both luxury homes and large commercial settings"]
            ]
        },
        {
            "n":5,
            "image": "/assets/img/about/09.png",
            "head": " Custom Audio-Visual Systems That Redefine Your Space",
            "description": " Imagine a space where every visual is crystal clear and every sound is immersive. With Evolvix, that vision becomes reality. We specialize in high-performance AV systems that integrate flawlessly into your environment, whether for business, entertainment, or relaxation",
            "points": [
                ["Tailored Control Solutions:", "Seamless integration with QSC, Crestron, Extron, Biamp, AMX, and more for optimized performance."],
                ["Precision Audio Optimization:", " Smart tuning, noise suppression, and acoustic enhancement for crystal-clear sound"],
                ["Smart Control at Your Fingertips", "Seamlessly manage AV, lighting, and automation with intuitive, touch-enabled control for effortless operation"],
                [" Multi-Zone Audio for Maximum Flexibility:", " Customize audio zones for any space—perfect for both luxury homes and large commercial settings"]
            ]
        }

    ]   
}`;


var mydata = JSON.parse(data);



export default function About6() {
    return (
        <>{
        mydata["content"].map(element => {
            return(
                <>            
                <section className="about-section section-padding fix bg-cover pt-0 mb-2" id="about">
                <div className="container">
                    <div className="about-wrapper-2 style-2">
                        <div className="row">
                            { (element["n"] % 2 == 0) && (
                                <>
                                
                                <div className="col-lg-6">
                                    <div className="about-image-2 wow fadeInUp " data-wow-delay=".4s">
                                        <img src={element["image"]} alt="about-img" />
                                    </div>
                                </div>
                                </>
                            )}
                            
                            <div className="col-lg-6 mt-4 mt-lg-0">
                                    <div className="about-content">
                                        <div className="section-title">
                                            {/* <span className="wow fadeInUp">ABOUT INFOTECK</span> */}
                                            <h2 className="wow fadeInUp row text-uppercase text-center" data-wow-delay=".3s">
                                                {/* <div class="col text-logo"></div>  */}
                                                {element["head"]}
                                            </h2>
                                        </div>
                                        <p className="mt-3 mt-md-0 wow fadeInUp text-justify" data-wow-delay=".5s">
                                            {element["description"]}
                                        </p>
                                        <div className="icon-area wow fadeInUp" data-wow-delay=".7s">
                                            <ul className="list" class="text-justify">
                                                {element["points"].map(e=>{
                                                    return(
                                                        <>
                                                        <li>
                                                            <i className="fa-regular fa-circle-check" />
                                                            <b>{e[0]}</b> {e[1]}
                                                        </li>
                                                        </>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            { (element["n"] % 2 == 1) && (
                                <>
                                
                            <div className="col-lg-6">
                                <div className="about-image-2 wow fadeInUp " data-wow-delay=".4s">
                                    <img src={element["image"]} alt="about-img" />
                                </div>
                            </div>
                            
                                </>
                            )}
                            
                        </div>
                    </div>
                </div>
            </section>
            </>)
            })}
        </>
    )
    

}
