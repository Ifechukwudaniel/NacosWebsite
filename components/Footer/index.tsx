import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footercontent">
            <div className="footerillustration"><img src="images/footerImage.png" loading="lazy" width="337" sizes="(max-width: 479px) 100vw, 337px" srcSet="images/footerImage-p-500.png 500w, images/footerImage-p-800.png 800w, images/footerImage-p-1080.png 1080w, images/footerImage.png 1131w" alt="" className="footerimage"/></div>
            <div className="footerlinks">
                <h4 className="footertitle">Quick Links</h4>
                <div className="looterlinkswrapper">
                <div className="footerlinkslist">
                    <a href="/" className="footerlinkitem">Home</a>
                    <a href="/gallery" className="footerlinkitem">Gallery</a>
                    <a href="/blogs" className="footerlinkitem">Blog</a>
                    <a href="/event" className="footerlinkitem">Event</a>
                </div>
                <div className="footerlinkslist">
                    <a href="/store" className="footerlinkitem">Store</a>
                    <a href="/payDues" className="footerlinkitem">Pay Dues</a>
                    <a href="/election" className="footerlinkitem">Start Voting</a>
                </div>
                </div>
            </div>
            <div className="footercontact">
                <h4 className="footertitle">Contact</h4>
                <div className="looterlinkswrapper">
                <div className="footerlinkslist">
                    <div className="contacttext">Nwabueze Okenna<br/>President<br/>0816-728-392</div>
                </div>
                </div>
            </div>
            </div>
            <div className="copyright">
            <h3 className="copyrighttext">Copyright NACOS 2021</h3>
            </div>
        </div>
    );
}

export default Footer;
