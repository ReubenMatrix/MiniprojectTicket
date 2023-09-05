import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Tickets.css';
import '../featured/Featured'
import { DateRange } from 'react-date-range';
import { faBed, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';

import Featured from '../featured/Featured';
import { useNavigate } from 'react-router-dom';
import PropertyList from '../propertylist/PropertyList';


const Tickets = () => {
  const [destination, setDestination] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    people: 0,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const navigate=useNavigate()

  const handleSearch = () => {
    navigate('/list',{state:{ destination, date, options}})

    };


  return (
    <>
      <div className='headerSearch'>
        <div className='headerSearchItem'>
          <FontAwesomeIcon icon={faBed} className='headerIcon' />
          <input type='text' placeholder='Where are you going?' className='headerSearchInput' onChange={(e) => setDestination(e.target.value)} />
        </div>

        <div className='headerSearchItem'>
          <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
          <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
          {openDate && <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className='date'
            minDate={new Date()}
          />}
        </div>

        <div className='headerSearchItem'>
          <FontAwesomeIcon icon={faPerson} className='headerIcon' />
          <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.people} people`}</span>
          {openOptions && <div className='options'>
            <div className='optionItem'>
              <span className='optionText'>Persons</span>
              <div className='optionCounter'>
                <button disabled={options.people <= 1} className='optionCounterButton' onClick={() => handleOption('people', 'd')}>-</button>
                <span className='optionCounterNumber'>{options.people}</span>
                <button className='optionCounterButton' onClick={() => handleOption('people', 'i')}>+</button>
              </div>
            </div>
          </div>}
        </div>

        <div className='headerSearchItem'>
          <button className='headerBtn' onClick={handleSearch}>Search</button>
        </div>
      </div>

    
      <div className='featuredsec'>
        <Featured/>
      </div>

      <div className='propertysec'>
      <h1 className='homeTitle'>Places to check-in</h1> 
        <PropertyList/>
      </div>

    </>
  );
};

export default Tickets;
