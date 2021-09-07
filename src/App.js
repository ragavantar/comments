import logo from './logo.svg';
import './App.css';

import Comments from './components/comments';
import { DEFAULT_COMMENTS } from './constants';
import { useEffect, useState } from 'react';
import { getData, setData } from './utils/localStorage';

import { get, set } from 'lodash';

import NewComment from './components/NewComments';


function App() {

  let [comments, setComments] = useState([]);

  let [newComment, setNewComment] = useState('comments');

  useEffect(() => {
    let data = getData();
    setComments(data || DEFAULT_COMMENTS);
  }, [])

  const saveComments = () => {
    // setData('comments', comments)
  }

  const addComment = (text) => {
    comments.push({ id: +new Date(), description: text });
    setComments(comments);
    console.log(comments)
    setNewComment('');
    saveComments();
  }

  const deleteComment = (key) => {
    console.log('delete', key);
    set(comments, key, null)
    console.log(comments);
    setComments(comments);
  }

  const replyComment = (key, text) => {
    let comm = get(comments, key);
    comm.replies.push({id: +new Date(), description: text});
    console.log(comments);
    setComments(comments);
  }

  const editComment = (key, text) => {
    let comm = get(comments, key);
    comm.description = text;
    console.log(comments);
    setComments(comments);
  }

  const getElements = () => {
    let elements = [];
    const build = (data = [], level = 1, key='') => {
      data.forEach((element, index) => {

          let k = key === ''? index : key+'.'+index
        const actions = {
          reply: (text) => replyComment(k, text),
          delete: (text) => deleteComment(k),
          edit: (text) => editComment(k, text)
        }

        elements.push(<Comments {...element} level={level} actions={actions}/>)
        build(element.replies, level + 1, key+index)
      });
    }
    build(comments)
    return elements;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Skillo villa comments task</h1>
      </header>
      <div>
        <NewComment addComments={addComment}/>
        {/* <textarea className="add" placeholder="add comments" value={newComment} onChange={e => setNewComment(e.target.value)} />
        <button className="addBtn" onClick={addComments}> Add comment </button> */}
        {/* <Comments /> */}
        {getElements()}
      </div>
    </div>
  );
}

export default App;
