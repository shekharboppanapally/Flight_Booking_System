import React, { useState } from 'react';
import "../StyleSheets/SearchFlights.css"
import CalendarIcon from "../calendar.svg"
import Calendar from "react-calendar";

const SearchFlights = () => {
    const [dep_date, ondepDateChange] = useState(new Date());
    const [ret_date, ondretChange] = useState(new Date());
    const [dep_display, ondepDisplayChange] = useState(false);
    const [ret_display, onretDisplayChange] = useState(false);

    const listFlights = ["Indigo - Rs. 8254", "Air India - Rs. 8254", "Luftansa - Rs. 8254"]
    return ( 
        <div className='MainDiv'>
    <div className='OuterSearchBoxDiv'>
        <h1> Book Your Flight</h1>
        <div className='InnerSearchBoxDiv'>
            <div className='FromDiv Inner'>
                <p>FROM</p>
                <select name="places" id="place">
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Banglore">Banglore</option>
                </select>
            </div>
            <div className='ToDiv Inner'>
                <p>TO</p>
                <select name="places" id="place">
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Banglore">Banglore</option>
                </select>
            </div>
            <div className='DepartureDate Inner'>
                <p>Departure Date</p>
                <img src={CalendarIcon} alt="Img" onClick={()=>{
                    ondepDisplayChange(!dep_display)
                }}/>
                <p> {dep_date.toDateString()}</p>
                <Calendar className={dep_display ? "Display" : "NoDisplay"} onChange={ondepDateChange} value={dep_date}/>
            </div>
            <div className='ReturnDate Inner'>
                <p>Return Date</p>
                <img src={CalendarIcon} alt="Img" onClick={()=>{
                    onretDisplayChange(!ret_display)
                }}/>
                <p> {ret_date.toDateString()}</p>
                <Calendar  className={ret_display ? "Display" : "NoDisplay"} onChange={ondretChange} value={ret_date}/>
            </div>
            <div className='ClassDiv Inner'>
                <p> Traveller Class</p>
                <select name="classes" id="classes">
                    <option value="Economy">Economy</option>
                    <option value="Business">Business</option>
                    <option value="FirstClass">First Class</option>
                </select>
            </div>
            <div className='SearchDiv Inner'>
                <button className="SearchBsuttoßn"> Search</button>
            </div>
        </div>  
    </div> 
    <div className='ListFlights'>
    {listFlights.map((flight)=>{
        return(
            <div className='FlightDiv'>
                <p>{flight}</p>
            </div>
        )
    })}
</div>
</div> 
    );
}
 
export default SearchFlights;