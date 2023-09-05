
import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import HomeSectionProduct from '../HomeSectionProduct/HomeSectionProduct';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';

const HomeSectionCarosel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };
    const items = [{
        "firstName": "John1",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "age": 45,
        "weight": 67,
        "admin": true
    }, {
        "firstName": "John2",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "age": 45,
        "weight": 67,
        "admin": true
    }, {
        "firstName": "John4",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "age": 45,
        "weight": 67,
        "admin": true
    },{
        "firstName": "John3",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "age": 45,
        "weight": 67,
        "admin": true
    }].map((item) => <HomeSectionProduct item={item} />)
    return (
        <div className=" border border-black">
            <div className="relative p-5 border">
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    infinite
                    responsive={responsive}
                    disableDotsControls
                />
                <Button variant="contained" className="z-50 bg-white" sx={{position:'absolute',top:"8rem",right:"0rem",transform:"translateX(50%) rotate(90deg)",bgcolor:"white"}} aria-label="next">
                    <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)",color:"black"}}/>
                </Button>
                <Button variant="contained" className="z-50 bg-white" sx={{position:'absolute',top:"8rem",left:"0rem",transform:"translateX(50%) rotate(90deg)",bgcolor:"white"}} aria-label="next">
                    <KeyboardArrowLeftIcon sx={{transform:"rotate(-90deg)",color:"black"}}/>
                </Button>
            </div>
        </div>
    )
}

export default HomeSectionCarosel;