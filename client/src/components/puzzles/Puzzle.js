import React from  'react';

const Puzzle = (props) => {
  // if(!props.listOfSites)
  // return "........loading Puzzles. Know any good Moth jokes?"

  



  return (
    <div>
    <ul className="component-list">
      {props.listOfSites}
      <iframe src="https://www.websudoku.com/" frameborder="0">Sudoku</iframe>
    </ul>
    <div>

    </div>
    </div>

  )

}


export default Puzzle;
//https://www.websudoku.com/
