import React, { useState } from 'react'

function StickyWall() {

    const [sticky, setSticky] =useState();
    const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"];
    //const [backgroundColors, setBackgroundColors] = useState(colors[0]);

    const handleAddWall = () => {
        setSticky(true);
    }

  return (
    <div className='p-2 m-2 bg-primary-light'>
       {/*generate a random index within the range of your background Colors array, and you apply the corresponding class to the div element*/}
      <div className={`${colors[Math.floor(Math.random() * colors.length)]}`}>hello there</div>
      <div>
        <button onClick={()=>handleAddWall} >+</button>
      </div>
    </div>
  )
}

export default StickyWall
