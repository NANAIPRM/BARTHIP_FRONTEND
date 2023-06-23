import React from 'react'

function DrinkBar({ item, onClick }) {
  return (
    <button onClick={onClick}>
      <img
        src={item.image}
        alt={item.name}
        className="w-[40px] h-[52px] py-1 hover:bg-gray-300"
      />
    </button>
  )
}

export default DrinkBar
