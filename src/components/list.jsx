import React from 'react';

const List = (props) => (
        <>
            <img src={props.content.snippet.thumbnails.medium.url}/>
            <div>{props.content.snippet.title}</div>
            <div>{props.content.snippet.channelTitle}</div>
        </>
    );

export default List;