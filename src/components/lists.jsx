import React from 'react';
import List from './list';

const Lists = (props) => (
            <>
            <ul>
                {props.contents.map(content=>
                    <List
                        key={content.id}
                        content={content}
                    />
                )}
            </ul>
            </>
    );

export default Lists;