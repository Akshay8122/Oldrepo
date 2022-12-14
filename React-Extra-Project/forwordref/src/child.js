//1st way 
// import React from 'react'

// const child = React.forwardRef ((prop,myvalue) => {
//     return (
//         <div>
//             <input type="text" ref={myvalue}  />
//             <h1>{prop.title}</h1>
//         </div>
//     )
//   }) 
// export default child;

import React,{forwardRef} from 'react';

const child = (prop,myvalue) => {
    return(
        <div>
            <input type="text" ref={myvalue} />
        </div>
    )
}
export default forwardRef(child);