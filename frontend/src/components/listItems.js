import React, { Fragment, useState, useEffect } from 'react';

const ListItems = ({ clientid = '0' }) => {
    const [items, setData] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

    const getItems = async () => {
        try {
            const { data } = await fetch("/api/schedule/" + clientid)
                .then((response) => response.json());
            setData(data);
            setLoaded(true);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => { getItems(); }, []);

    useEffect(() => { console.log("Horaro Items Fetched! - ", items); }, [items]);

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
                <h1 className="text-center border border-indigo-500 bg-indigo-900 text-white">Item List</h1>
                <table className="m-auto w-full">
                    <thead>
                        <tr>
                            <th className="border border-indigo-300 bg-indigo-700 text-white">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, idx) => (
                            <tr key={idx}>
                                <td className="text-center border border-indigo-300 bg-indigo-500 text-white">{item.id}</td>
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