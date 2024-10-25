import React from 'react';
import MyContent from './MainDesign';

const CenterContent =()=>{
    return(
    <>
    <div className='homepage-content'>
    <div className='main-image'>
    <MyContent 
        imageSrc="https://www.whitehouse.gov/wp-content/uploads/2024/10/P20241003CS-1121.JPG.jpg?resize=1270,847"
        altTxt="President Biden"
        imgUrl="https://www.whitehouse.gov/briefing-room/speeches-remarks/2024/10/01/remarks-by-president-biden-on-his-administrations-continued-response-efforts-to-hurricane-helene/"

        headerTxt="Remarks by President Biden on his Administration’s Continued Response Efforts to Hurricane Helene"
        headerUrl="https://www.whitehouse.gov/briefing-room/speeches-remarks/2024/10/01/remarks-by-president-biden-on-his-administrations-continued-response-efforts-to-hurricane-helene/"
    />
    </div>
    </div>
    </>
    )
}

export default CenterContent;