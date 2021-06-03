import React, {useState, useEffect} from 'react'
import axios from 'axios'
import People from './People';
import Paginate from './Paginate';


function Product() {
const [loading, setLoading]= useState(false);
const [totalPost, setTotalPost]=useState();
const[currentPage, setCurrentPage]=useState(1);
const[additionalData, setadditionalData]= useState(false);
const[dataFromApi, setdataFromApi]=useState([]);
const [searchTerm, setSearchTerm] = useState("");


const dataPerPage= 10;

//get data from API
useEffect(()=>{
async function getData() {
    setLoading(true);
     const results = [];
     let url = 'https://swapi.dev/api/people/';
//loop until all data is collected
     do {
       const res = await axios.get(url);
       const data = res.data;
        
       const totalCount=res.data.count;
       url = data.next;
       results.push(...data.results);
       setTotalPost(totalCount);
      
     } while(url)
setdataFromApi(results);

   console.log(results);
   setLoading(false);
 }

getData();

}, []);

//additional data about the characters
function moreData(){

setadditionalData(true);

}


//display only 10 data in one page

const indexOfLastData= currentPage*dataPerPage;
const indexOfFirstData=indexOfLastData-dataPerPage;
const currentData=dataFromApi.slice(indexOfFirstData,indexOfLastData);

//paginate function
const paginate=(pageNumber)=>{

setCurrentPage(pageNumber);

}



//search function

function searchHandler(rows){

return rows.filter((row)=>(row.name.toLowerCase().indexOf(searchTerm)>-1))

}

return(
    <div className="bg-gray-800 flex flex-col p-2 ">
       
<h1 className="text-white text-3xl animate-fade-in-down font-serif">Starwar Characters</h1>

<div class="p-10">
  <div class="bg-white flex items-center rounded-full shadow-xl">
        <input class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" onChange={e => setSearchTerm(e.target.value)} value={searchTerm}/>
    
        <div class="p-4">
          <button class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
      </div>
    
  </div>
</div>


{/*If not searched display data paginated, else display the search result*/}
{(searchTerm==="")?(searchHandler(currentData).map((data)=>{return(<People key={data.name} name={data.name} moreData={moreData}  additionalData={additionalData}  loading={loading} height={data.height} eyecolor={data.eye_color} haircolor={data.hair_color} gender={data.gender} />)}))
:
(searchTerm && searchHandler(dataFromApi).map((data)=>{return(<People key={data.name} name={data.name} moreData={moreData}  additionalData={additionalData}  loading={loading} height={data.height} eyecolor={data.eye_color} haircolor={data.hair_color} gender={data.gender} />)}))}

    
       
   <Paginate postPerPage={dataPerPage} totalPost={totalPost} paginate={paginate}  />
      </div>     
    
    )
}


export default Product
