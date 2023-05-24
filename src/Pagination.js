import React from 'react'

export default function pagination( {gotoNextPage, gotoPrevPage}) {
  return (
    <>
    {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
    {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </>
  )
}
