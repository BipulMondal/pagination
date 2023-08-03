import React, { useState, useEffect } from "react";

import universities from "../constants/universities.json";


function Pagination() {
  //user currently present this page
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageNumber, setCurrentPageNumber] = useState(0)
  console.log("currentPageNumber", currentPageNumber);

    //no of records display on the page
    const [recordPerPage] = useState(10);
    const [recordPageNumber] = useState(10);

    const indexOfLastRecord = currentPage * recordPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordPerPage;


  //record display to the current page
  const currentRecords = universities.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  // console.log('currentRecord', currentRecords);


  const nPages = Math.ceil(universities.length / recordPerPage);
  // console.log('npages', nPages)

  const pageNumber = [...Array(nPages + 1).keys()].slice(1);
  // console.log('pagenumber' , pageNumber)

  const indexOfLastPageNumber = currentPageNumber + recordPageNumber;
  const indexOffFirstPageNumber = indexOfLastPageNumber - recordPageNumber;

  console.log(indexOffFirstPageNumber);
  console.log(indexOfLastPageNumber);

  // const buttonNumbers = pageNumber.slice(0, 10)
  const buttonNumbers = pageNumber.slice(
    indexOffFirstPageNumber,
    indexOfLastPageNumber
  )
 
  console.log('buttonNumbers' , buttonNumbers)

  const prevPage = () => {
    if (currentPage !== 1) 
    setCurrentPage(currentPage - 1);
    setCurrentPageNumber(currentPageNumber - 1)
  };

  const nextPage = () => {
    if (currentPage !== nPages)
    setCurrentPage(currentPage + 1);
    setCurrentPageNumber(currentPageNumber + 1)
    // console.log('buttonNumbers' , buttonNumbers)
  };


  return (
    <>
      <div className="h-auto p-2.5 w-1/2 mx-auto bg-purple-100">
        {currentRecords.map((item, index) => {
          return <h1 key={index} className=' mt-4 text-left'><span className="m-6">University name :</span> {item.name}</h1>;
        })}
      </div>

      <div className="flex mt-10 mx-auto w-1/2 ">
        <div className="mr-4 ml-4 font-bold">
          {currentPage === 1 ? (<button style={{color:'gray'}} disabled>Previous</button>):(<button onClick={prevPage}>Previous</button>)}
        </div>

        <div className="flex items-center justify-center space-x-2 ">

          {buttonNumbers.slice(0,3).map((data, index) => {
            return (
                <div key={index} className="">
                <button className="h-8 w-8 rounded rounded-full bg-yellow-100 border-2 border-pink-500 flex justify-center" onClick={() => setCurrentPage(index+1)}>
                  {data}
                </button>
              </div> 
              
              );
            })}
            <span>&hellip;</span>

            {buttonNumbers.slice(7,10).map((data, index) => {
            return (
              <div key={index} className="">
                <button className="h-8 w-8 rounded rounded-full bg-yellow-100 border-2 border-pink-500 flex justify-center" onClick={() => setCurrentPage(index+8)}>
                  {data}
                </button>

              </div>
              
              );
            })}
        </div>

        <div>
          <button className="mr-4 ml-4 font-bold" onClick={nextPage}>Next</button>
        </div>
      </div>
    </>
  );
}

export default Pagination;
