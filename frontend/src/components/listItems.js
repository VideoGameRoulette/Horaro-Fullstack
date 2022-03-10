import React, { Fragment, useState, useEffect } from 'react';

const ListItems = ({ clientid = '2e116leerr180d7a6a' }) => {
    const [horaro, setData] = useState({});
    const [isLoaded, setLoaded] = useState(false);

    const getItems = async () => {
        try {
            const data = await fetch("/api/schedule/" + clientid)
                .then((response) => response.json());
            setData(data);
            setLoaded(true);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => { getItems(); }, []);

    useEffect(() => { console.log("Horaro Items Fetched! - ", horaro); }, [horaro]);

    function getTime({ scheduled_t }) {
        if (scheduled_t == 0) {
            return '';
        }
        var d = new Date(scheduled_t * 1000), // Convert the passed timestamp to milliseconds
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2), // Add leading 0.
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh == 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time =
            h.toString().padStart(2, '0') +
            ':' +
            min.toString().padStart(2, '0') +
            ampm;
        return time;
    }

    function getTimeLength({ length_t }) {
        let min = length_t / 60;
        return min + ' mins'
    }

    const renderPage = () => {
        if (!isLoaded) {
            return (
                <Fragment key="polls">
                    <h1>No Items Fetched</h1>
                </Fragment>
            );
        }
        return (
            <Fragment key="polls">
                <h1 className="text-center border border-sky-500 bg-sky-900 text-white">Item List</h1>
                <table className="m-auto w-full">
                    <thead>
                        <tr>
                            <th className="border border-sky-300 bg-sky-700 text-white">Time</th>
                            <th className="border border-sky-300 bg-sky-700 text-white">Length</th>
                            {horaro.columns.map((column, idx) => (
                                <th key={`h${idx}`} className="border border-sky-300 bg-sky-700 text-white">{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {horaro.items.map((item, idx) => (
                            <tr key={`dr${idx}`} >
                                <td className="text-center border border-sky-300 bg-slate-500 text-white">{getTime(item)}</td>
                                <td className="text-center border border-sky-300 bg-slate-500 text-white">{getTimeLength(item)}</td>
                                {item.data.map((d, i) => (
                                    <td className="text-center border border-sky-300 bg-slate-500 text-white">{d}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    };

    return (
        renderPage()
    );

};

export default ListItems;