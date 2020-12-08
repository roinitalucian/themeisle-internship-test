import React, { useState } from 'react';
import Box from '../box/Box';
import PopUp from '../popUp/popUp'
import './Container.css';

const Container = () => {

    const [data, setData] = useState({selectedObject: {}, database: [], showPopUp: false});

    useState(() => {
        fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts')
            .then(response => response.json())
            .then(d => setData({...data, database: d}));
    }, []);

    const selectEntry = (entry) => {
        // console.log(entry.avatar);
        setData({...data, selectedObject: entry, showPopUp: true});
    };

    const hidePopUp = () => {
        setData({...data, showPopUp: false});
    }

    return (
        <div>
            <div className='box-container'>
                {data.database.map((item, index) => (
                    <Box
                        title={item.title}
                        content={item.content}
                        image={item.thumbnail.small}
                        author={item.author.name}
                        role={item.author.role}
                        date={item.date}
                        key={index}
                        selectHandler={selectEntry}
                        avatar={item.author.avatar}
                        large={item.thumbnail.large}
                    />
                ))}
            </div>
            {data.showPopUp ? <div className='overlayColor' /> : ' '}
            {data.showPopUp ? <PopUp entry={data.selectedObject} closeHandler={hidePopUp} /> : ' '}
        </div>
    
    );
};

export default Container;