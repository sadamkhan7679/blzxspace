import React from 'react'
import "./PaginationBox.css"

function PaginationBox({ fn, char }) {
  return (
    <button class="pgBox" onClick={fn}>
      {char}
    </button>
  )
}

export default PaginationBox
