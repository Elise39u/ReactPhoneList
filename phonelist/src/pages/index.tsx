import React from 'react'
import Menu from '../components/NavMenu.tsx'
import PhoneNumberOverview from '../components/phonenumbers/Overview.tsx'

const phoneNumbers = [
    1234567890,
    1234567890,
    1234567890,
    1234567890,
    1234567890,
    1234567890,
    1234567890,
    1234567890,
    1234567890,
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