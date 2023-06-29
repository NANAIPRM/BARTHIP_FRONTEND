import React from 'react'

function DrinkBar({ item, onClick }) {
  return (
    <button onClick={onClick}>
      <img
        src={item.image}
        alt={item.name}
        className="w-[150px] sm:min-w-[70px] mx-auto lg:w-[400px] h-[52px]"
      />
    </button>
  )
}

export default DrinkBar
