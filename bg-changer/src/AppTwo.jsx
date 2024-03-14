import { useState } from 'react'
import './App.css'

function AppTwo() {
  const [color, setColor] = useState('olive')
  return (
    <div className='background'
    style={{backgroundColor: color}}
    >
      <div className='bar-position'>
        <div className='bar-content'>
          <button 
          className='buttons'
          style={{backgroundColor: 'red'}}
          onClick={() => setColor('red')}
          >Red</button>
          <button 
          className='buttons'
          style={{backgroundColor: 'green'}}
          onClick={() => setColor('green')}
          >Green</button>
          <button 
          className='buttons'
          style={{backgroundColor: 'blue'}}
          onClick={() => setColor('blue')}
          >Blue</button>
          <button 
          className='buttons'
          style={{backgroundColor: 'olive'}}
          onClick={() => setColor('olive')}
          >Olive</button>
          <button 
          className='buttons'
          style={{backgroundColor: 'gray'}}
          onClick={() => setColor('gray')}
          >Gray</button>
          <button 
          className='buttons'
          style={{backgroundColor: 'yellow'}}
          onClick={() => setColor('yellow')}
          >Yellow</button>
          <button 
          className='buttons'
          style={{backgroundColor: 'pink'}}
          onClick={() => setColor('pink')}
          >Pink</button>
          <button className='buttons'
          style={{backgroundColor: 'purple'}}
          onClick={() => setColor('purple')}
          >Purple</button>
          <button 
          className='buttons'
          style={{backgroundColor: 'lavender'}}
          onClick={() => setColor('lavender')}
          >Lavender</button>
          <button 
          className='buttons'
          style={{backgroundColor: 'white'}}
          onClick={() => setColor('white')}
          >White</button>
          <button 
          className='buttons'
          style={{backgroundColor: 'black'}}
          onClick={() => setColor('black')}
          >Black</button>
        </div>
      </div>  
    </div>
  )
}

export default AppTwo
