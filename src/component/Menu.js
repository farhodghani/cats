import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    const [style, setStyle] = useState(false);
  return (
    <div className='menu'>
        <Link style={{textDecoration: 'none'}} to='/'>
            <span 
                style={{backgroundColor: !style && '#1e88e5'}} 
                onClick={()=>setStyle(false)}
            >Все котики</span>
        </Link>
        <Link style={{textDecoration: 'none'}} to='/favorites'>
            <span 
                style={{backgroundColor: style && '#1e88e5'}}
                onClick={()=>setStyle(true)}
            >Любимые котики</span></Link>
    </div>
  )
}
