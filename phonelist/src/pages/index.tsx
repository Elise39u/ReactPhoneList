import React from 'react'
import Menu from '../components/NavMenu.tsx'
import PhoneNumberOverview from '../components/phonenumbers/Overview.tsx'

const phoneNumbers = [
    4444444444,
    2222222222,
    4444444444,
    1111111111,
    2222222222,
    3333333333,
    3333333333,
    1234567890,
];


function PhoneIndex() {
    return(
        <div>
            <Menu /> 
            <PhoneNumberOverview numbers={phoneNumbers} />
        </div>
    )
}

export default PhoneIndex