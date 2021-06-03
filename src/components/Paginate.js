import React from 'react'
import {Link} from 'react-router-dom'
function Paginate({postPerPage, totalPost, paginate}) {
const pageNumbers=[];
//loop the number of pages to be added for pagination
for(let i=1; i<=Math.ceil(totalPost/postPerPage); i++){
pageNumbers.push(i);


}
    return (

        <div className="bg-gray-800 px-4 py-3 flex items-center justify-between  sm:px-6 ">
 
  
      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
       
       
{pageNumbers.map(number=>{return(

        <Link to="#"  key={number}  onClick={()=>paginate(number)} href="#" aria-current="page" className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
          {number}
        </Link>
        
        )})}
        
      </nav>
    </div>
  
        
)
  

    
}

export default Paginate



