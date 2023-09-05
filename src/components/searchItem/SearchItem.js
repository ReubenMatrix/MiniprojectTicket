import React from 'react'
import './SearchItem.css'

// const SearchItem = () => {
//   return (
//     <div className='searchItem'>
//       <img
//       src='https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
//       alt=''
//       className='siImg'
//       />
//       <div className='siDesc'>
//         <h1 className='siTitle'>German Art Gallery</h1>
//         <span className='siDistance'>500m from center</span>
//         <span className='siTaxiOp'>Free airport taxi</span>
//         <span className='siCancelOp'>Free cancellation</span>
//         <span className='siCancelOpSubtitle'>You can cancel later, so lock in this great price today!</span>
//       </div>
//       <div className='siDetails'>
//         <div className='siRating'>
//           <span>Excellent</span>
//           <button>8.9</button>
//         </div>
//         <div className='siDetailsTexts'>
//           <span className='siPrice'>₹3,500</span>
//           <span className='siTaxOp'>Includes taxes and fees</span>
//           <button className='siCheckButton'>See availability</button>
//         </div>
//       </div>
     
//     </div>
//   )
// }

const SearchItem = (props) => {
  // You can access the props inside the component function
  const { imageUrl, title, distance, taxiOption, cancelOption, cancelOptionSubtitle, rating, price, taxOption } = props;

  return (
    <div className='searchItem'>
      <img
        src={imageUrl}
        alt=''
        className='siImg'
      />
      <div className='siDesc'>
        <h1 className='siTitle'>{title}</h1>
        <span className='siDistance'>{distance}</span>
        <span className='siTaxiOp'>{taxiOption}</span>
        <span className='siCancelOp'>{cancelOption}</span>
        <span className='siCancelOpSubtitle'>{cancelOptionSubtitle}</span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
          <span>{rating}</span>
          <button>8.9</button>
        </div>
        <div className='siDetailsTexts'>
          <span className='siPrice'>{price}</span>
          <span className='siTaxOp'>{taxOption}</span>
          <button className='siCheckButton'>See availability</button>
        </div>
      </div>
    </div>
  );
};

// Usage of the SearchItem component with props
// const App = () => {
//   return (
//     <div>
//       <SearchItem
//         imageUrl='https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
//         title='German Art Gallery'
//         distance='500m from center'
//         taxiOption='Free airport taxi'
//         cancelOption='Free cancellation'
//         cancelOptionSubtitle='You can cancel later, so lock in this great price today!'
//         rating='Excellent'
//         price='₹3,500'
//         taxOption='Includes taxes and fees'
//       />
//     </div>
//   );
// };

// export default App;








export default SearchItem;
