import classes from './NewPost.module.css';
import { useState } from 'react';
function NewPost({onCancel, onAddPost}) {
    const [enteredBody, setEnteredBody] = useState("");
  
    function changeBodyHandler(event) {
      setEnteredBody(event.target.value);
    }
  
    const [enteredName, setEnteredName] = useState("");
  
    function changeNameHandler(event) {
      setEnteredName(event.target.value);
    }

    function submitHandler(event) {
      event.preventDefault();
      const postData = {
        body: enteredBody,
        author: enteredName
      };
      onCancel();
      onAddPost(postData);
    }


  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeNameHandler}/>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
