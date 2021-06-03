import React ,{useState} from 'react'

function People({name, height, haircolor, eyecolor, gender, additionalData, moreData, loading}) {
     const [readMore,setReadMore]=useState(false);

     //additional info about characters
    const extraContent=<div class="flex flex-col w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 ">
        <li class="text-white-900 dark:text-gray-300 font-semibold">height:{height}</li>
 <li class="text-white-900 dark:text-gray-300 font-semibold">haircolor:{haircolor}</li>
<li class="text-white-900 dark:text-gray-300 font-semibold"> eyecolor:{eyecolor}</li>
        <li class="text-white-900 dark:text-gray-300 font-semibold">gender:{gender}</li>
      </div>
    
    
if(loading){
return(<h2>loading...</h2>)

}



    return (
<div class="flex h-full bg-gray-800">
<main class="flex flex-col w-full bg-gray-800 overflow-x-hidden overflow-y-auto mb-14 ">
        <div class="flex w-full mx-auto px-6 py-8">
          <div class="flex flex-col w-full h-full text-gray-900 text-xl">
            <div onClick={()=>{setReadMore(!readMore)}} class="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600 rounded">{name}
             
             </div>
             {readMore && extraContent}
          </div>
        </div>
      </main>

</div>


)



}





        {/* <ul>
               
<a className="read-more-link" >{name}</a>


  
 </ul>
 */}





       
    



export default People
