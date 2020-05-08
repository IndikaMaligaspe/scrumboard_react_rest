import React from 'react'
import SprintList from '../../containers/SprintList/SprintList'

const MainBoard = (props) => (
    <div>
        <div>Recently Viewed</div>
        <div> 
            <SprintList></SprintList>
        </div>
    </div>
);

export default MainBoard;