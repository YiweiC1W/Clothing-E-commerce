import React from 'react';
import './map.style.scss'

class MapPage extends React.Component {

    render() {
        return (
            <div className='map'>
                <input placeholder='Enter Your Postcode or Address' />
                <img src='https://cdn8.openculture.com/2017/11/15230237/Vinyl-2-e1510817749492.png' alt='map'/>

                <div className='row'>
                    <img
                        className="storeResult-image supermarkets"
                        alt="SUPERMARKETS"
                        src="https://cdn0.woolworths.media/wowssr/browser/assets/images/storelocator/icon_pin_wow.svg"/>
                    <div  className="storeResult-details">
                        <div  className="storeResult-heading">
                            <div  className="storeResult-name"><strong
                            >Melbourne</strong></div>
                            <div  className="storeResult-distance"
                            > 0.08 km
                            </div>
                        </div>
                        <address  className="storeResult-address">
                            <div >231 Bourke St,</div>
                            <div >Melbourne</div>
                        </address>
                        <div  className="storeResult-openingHours"><strong > Open today 7:00
                            AM - 10:00 PM </strong></div>
                        <a  className="storeResult-getDirectionsLink"
                            href="/shop/tripplanner?destination=11-29%20Kokaribb%20Road,%20Carnegie,%20VIC,%203163,%20Australia"> Get
                            Directions </a>

                    </div>
                    <button className='select-button'>SELECT</button>
                </div>

                <div className='row'>
                    <img
                        className="storeResult-image supermarkets"
                        alt="SUPERMARKETS"
                        src="https://cdn0.woolworths.media/wowssr/browser/assets/images/storelocator/icon_pin_wow.svg"/>
                    <div  className="storeResult-details">
                        <div  className="storeResult-heading">
                            <div  className="storeResult-name"><strong
                            >Carnegie</strong></div>
                            <div  className="storeResult-distance"
                            > 0.78 km
                            </div>
                        </div>
                        <address  className="storeResult-address">
                            <div >11-29 Kokaribb Road,</div>
                            <div >Carnegie</div>
                        </address>
                        <div  className="storeResult-openingHours"><strong > Open today 7:00
                            AM - 10:00 PM </strong></div>
                        <a  className="storeResult-getDirectionsLink"
                            href="/shop/tripplanner?destination=11-29%20Kokaribb%20Road,%20Carnegie,%20VIC,%203163,%20Australia"> Get
                            Directions </a>

                    </div>
                    <button className='select-button'>SELECT</button>
                </div>

                <div className='row'>
                    <img
                        className="storeResult-image supermarkets"
                        alt="SUPERMARKETS"
                        src="https://cdn0.woolworths.media/wowssr/browser/assets/images/storelocator/icon_pin_wow.svg"/>
                    <div  className="storeResult-details">
                        <div  className="storeResult-heading">
                            <div  className="storeResult-name"><strong
                            >Boxhill</strong></div>
                            <div  className="storeResult-distance"
                            > 2.78 km
                            </div>
                        </div>
                        <address  className="storeResult-address">
                            <div >121 Where Road,</div>
                            <div >Boxhill</div>
                        </address>
                        <div  className="storeResult-openingHours"><strong > Open today 7:00
                            AM - 12:00 PM </strong></div>
                        <a  className="storeResult-getDirectionsLink"
                            href="/shop/tripplanner?destination=11-29%20Kokaribb%20Road,%20Carnegie,%20VIC,%203163,%20Australia"> Get
                            Directions </a>

                    </div>
                    <button className='select-button'>SELECT</button>
                </div>

                </div>
        );
    }
}

export default MapPage;

