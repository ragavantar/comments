import React, { useState } from 'react';
import './styles.css';

import NewComment from '../NewComments';

import { DEFAULT_PROFILE_IMG, DEFAULT_PROFILE_NAME, MARGIN_LEFT } from '../../constants'

const Comments = ({ img = DEFAULT_PROFILE_IMG, name = DEFAULT_PROFILE_NAME, description = "", level = 0, actions = {} }) => {
    let [reply, showReply] = useState(false)
    return ( 
        <div className={'comment'} style={{marginLeft: level * MARGIN_LEFT}}>
            <img src={img || DEFAULT_PROFILE_IMG} alt={`${name} user profile picture`} />
            <div>{name}</div>
            <div>{description}</div>
            <div>
                <span onClick={()=>showReply(true)}>Reply</span>
                <span onClick={actions.edit}>Edit</span>
                <span onClick={actions.delete}>Delete</span>
            </div>
            {
                reply && 
                <NewComment addComment = {actions.reply}/>
            }
        </div>
     );
}
 
export default Comments;