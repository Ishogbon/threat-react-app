import React from 'react';
import UAParser, { type IResult } from 'ua-parser-js';

const UserAgent: React.FC = () => {
    const parseUserAgent = (): IResult => {
        const userAgentString = navigator.userAgent;
        const parser = new UAParser();
        return parser.setUA(userAgentString).getResult();
    };

    const userAgentData = parseUserAgent();
    console.log(userAgentData);
    return (
        <div>
            <h1>Browser Information</h1>
            <p>Browser Name: {userAgentData.browser.name}</p>
            <p>Browser Version: {userAgentData.browser.version}</p>
        </div>
    );
};

export default UserAgent;
