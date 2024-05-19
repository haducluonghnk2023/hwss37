import React,{useState , useCallback} from 'react'
import ThemeContext from './Hw1'
import SomeComponent from './SomeComponent'
import Hw3 from './Hw3'

export default function Hw2() {
    const [color, setColor] = useState('blue');
    const toggleColor = useCallback(() => {
        setColor((prevColor) => (prevColor === 'blue' ? 'red' : 'blue'));
      }, []);
  return (
    <div>
        <h2>Hw2</h2>
        <ThemeContext.Provider value={{ color, toggleColor }}>
            <SomeComponent></SomeComponent>
            <Hw3></Hw3>
        </ThemeContext.Provider>
    </div>
  )
}
