import React from 'react'

const GoogleMap = () => {
    return (
        <div className="google-map-area section text-center section-padding-bottom">
            <div className="container">
                <div className="contact-map-area" data-aos="fade-up">
                    <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=terakoya%20academia&t=&z=13&ie=UTF8&iwloc=&output=embed"aria-hidden="false"></iframe>
                </div>
            </div>
        </div>
    )
}

export default GoogleMap;
