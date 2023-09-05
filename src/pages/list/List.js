import React, { useState } from 'react';
import './List.css';
import { format, setDate } from 'date-fns';
import Navbar from '../../components/navbar/Navbar';
import { useLocation } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchitem/SearchItem';

const List = () => {
  const location = useLocation();
  const destination = location.state?.destination || ''; // Use optional chaining to handle possible absence of state data
  const date = location.state?.date || [{ startDate: new Date(), endDate: new Date() }];
  const options = location.state?.options || { people: 0 };
  const [openDate, setOpenDate]=useState(false)
  return (
    <div>
      <Navbar />
      <div>
        <div className='listContainer'>
          <div className='listWrapper'>
            <div className='listSearch'>
              <h1 className='lsTitle'>Search</h1>
              <div className='lsItem'>
                <label>Destination</label>
                <input type='text' value={destination} readOnly />
              </div>
              <div className='lsItem'>
                <label>Check-in Date</label>
                <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
                {openDate && <DateRange onChange={(item)=>setDate([item.selection])} minDate={new Date()}  ranges={date}/>}
              </div>

              <div className='lsItem'>
                <label>Options</label>
                <div className='lsOptions'>

           
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Min price <small>per night</small>
                  </span>
                  <input type='number' className='lsOptionInput'/>
                </div>

                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Max price <small>per night</small>
                  </span>
                  <input type='number' className='lsOptionInput'/>
                </div>

                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                   People
                  </span>
                  <input type='number' min={1} className='lsOptionInput' placeholder={options.people}/>
                </div>

    

              </div>
              </div>
              <button>Search</button>
            </div>
            <div className='listResult'>
              <SearchItem
                imageUrl='https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
                title='German Art Gallery'
                distance='500m from center'
                taxiOption='Free airport taxi'
                cancelOption='Free cancellation'
                cancelOptionSubtitle='You can cancel later, so lock in this great price today!'
                rating='Excellent'
                price='₹3,500'
                taxOption='Includes taxes and fees'
              />
              <SearchItem
                imageUrl='https://images.unsplash.com/photo-1621886292650-520f76c747d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
                title='Baltimore museum'
                distance='500m from center'
                taxiOption='Free airport taxi'
                cancelOption='Free cancellation'
                cancelOptionSubtitle='You can cancel later, so lock in this great price today!'
                rating='Excellent'
                price='₹5,500'
                taxOption='Includes taxes and fees'
              />
              <SearchItem
                imageUrl='https://images.unsplash.com/photo-1526285849717-482456cd7436?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                title='Vatican Museum'
                distance='500m from center'
                taxiOption='Free airport taxi'
                cancelOption='Free cancellation'
                cancelOptionSubtitle='You can cancel later, so lock in this great price today!'
                rating='Excellent'
                price='₹8,500'
                taxOption='Includes taxes and fees'

              />
              <SearchItem
                imageUrl='https://images.unsplash.com/photo-1575223970966-76ae61ee7838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                title='Italian art sculpture'
                distance='500m from center'
                taxiOption='Free airport taxi'
                cancelOption='Free cancellation'
                cancelOptionSubtitle='You can cancel later, so lock in this great price today!'
                rating='Good'
                price='₹8,500'
                taxOption='Includes taxes and fees'
              />
              <SearchItem
                imageUrl='https://images.unsplash.com/photo-1620589125117-af1d850a302b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                title='Museum of modern art'
                distance='500m from center'
                taxiOption='Free airport taxi'
                cancelOption='Free cancellation'
                cancelOptionSubtitle='You can cancel later, so lock in this great price today!'
                rating='Good'
                price='₹8,500'
                taxOption='Includes taxes and fees'
              /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;




