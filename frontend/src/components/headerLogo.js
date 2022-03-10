import React, { Fragment } from 'react';
import { CalendarIcon } from '@heroicons/react/solid'

const HeaderLogo = ({ title }) => {
    return (
        <Fragment key="logo">
            <div className="w-16 h-16 flex justify-center items-center bg-sky-700">
                <CalendarIcon className="h-8 text-white" alt="fundky logo" />
            </div>
            <div className="h-16 text-white flex items-center text-xl font-sans font-black">{title}</div>
        </Fragment>
    );
}

export default HeaderLogo;