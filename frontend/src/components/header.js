import React, { Fragment, useState } from 'react';
import HeaderLogo from './headerLogo';

const Header = () => {
    const [id, setID] = useState('0');

    function sendID() {
        if (id === '0') return;
        window.location = `/?id=${id}`;
    };

    return (
        <Fragment key="header">
            <div className="container h-16 bg-sky-900 m-auto mb-8 flex items-center">
                <div className="flex justify-start items-center w-6/12 gap-4">
                    <HeaderLogo title='Horaro Assistant' />
                </div>
                <div className="flex justify-end w-6/12">
                    <input className="h-8 bg-sky-700 rounded border border-sky-300 text-white pl-2 mr-2" type="text" placeholder="Campaign ID" onChange={(e) => setID(e.target.value)} />
                    <button className="rounded border border-indigo-300 bg-sky-500 p-1 mr-2" onClick={() => sendID()}>Refresh</button>
                </div>
            </div>
        </Fragment>

    );
};

export default Header;