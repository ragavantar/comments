import React, { useState } from 'react';


const NewComment = ({ addComments }) => {
    let [text, setText] = useState('')
    return (  
        <div>
        <textarea className="add" placeholder="add comments" value={text} onChange={e => setText(e.target.value)} />
        <button className="addBtn" onClick={() => addComments(text)}> Add comment </button>
        </div>
    );
}
 
export default NewComment;