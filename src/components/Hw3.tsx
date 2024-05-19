import React, { useContext } from 'react'
import ThemeContext from './Hw1'

export default function Hw3() {
    
    const { color, toggleColor } = useContext(ThemeContext);
  return (
    <div>
        <h2>Hw3</h2>
        <button style={{ backgroundColor :color }} onClick={toggleColor}>
                Themed Button
        </button>
        <p>mau nen hien tai:{color}</p>
    </div>
  )
}
