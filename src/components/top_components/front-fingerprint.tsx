import React from 'react';
import { UIHeader } from '../sub_components/header';
import { BoldInput, BoldSubmit, BorderlessInput } from '../sub_components/inputs';
import Geolocation from '../sub_components/geolocation';
import UserAgent from '../sub_components/user-agent';

interface CheckTransferForUserProps {
    color: string
}
const CheckTransferForUser: React.FunctionComponent<CheckTransferForUserProps> = () => {
    return (
        <>
            <UIHeader />
            <div className="mt-32 m-auto text-center">
                <h1 className='bg-blue-700 text-white inline-block p-2 px-6 rounded-full opacity-80'>Check User Threat Score</h1>
                <div className='w-4/12 m-auto shadow-lg mt-4 rounded-md bg-white'>
                    <BoldInput inputType='text' placeholder='Enter user first and last name'/>
                    <BorderlessInput inputType='text' placeholder='::: Enter amount :::'/>
                    <BoldSubmit value='Compute Threat Score' />
                </div>
                <Geolocation />
                <UserAgent />
            </div>
        </>
    );
};

export default CheckTransferForUser;
