import React from 'react'
import SprintList from '../../containers/SprintList/SprintList'

// ID = 1 recently used board
// ID = 2 main board
const MainBoard = (props) => (
    <div style={mainBoardStyle}>
        <div><SprintList title="Recently Viewed" id="1" ></SprintList></div>
        <div> 
            <SprintList title="Your Sprints" id="2" ></SprintList>
        </div>
    </div>
);

const mainBoardStyle = {
    top: 45,
    position: "relative",
}

export default MainBoard;