import React from "react"
import MainCarosel from "../../HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../HomeSectionCarosel/HomeSectionCarosel";

const HomePage = () => {
    return (
        <div>
           <MainCarosel/>
           <div className='space-y-10 py-20 flex flex-col justify-center'>
            <HomeSectionCarosel/>
            <HomeSectionCarosel/>
            <HomeSectionCarosel/>
            <HomeSectionCarosel/>
           </div>
        </div>
    )
}

export default HomePage;