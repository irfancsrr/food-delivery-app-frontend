import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import './FoodDisplay.css'

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
      <h3>Top Dishes near you</h3>
      <div className="food-display-list">
        {/* Agar food_list empty ya undefined hai to skeleton dikhaye */}
        {!food_list || food_list.length === 0 ? (
          <div className="skeleton-wrapper">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="skeleton-card">
                <div className="skeleton-img shimmer"></div>
                <div className="skeleton-text shimmer"></div>
                <div className="skeleton-text short shimmer"></div>
              </div>
            ))}
          </div>
        ) : (
          food_list.map((item, index) => {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              )
            }
          })
        )}
      </div>
    </div>
  )
}

export default FoodDisplay
