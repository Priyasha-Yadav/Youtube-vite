import './MainContent.css'

import Contents from '../Contents/Contents.jsx'
import Top from '../Top/Top.jsx'
function MainContent(){
    return(
        <>
       <div className='mainc'>
   
        <Top />  
      <Contents />
      </div>
        </>
    )
}

export default MainContent