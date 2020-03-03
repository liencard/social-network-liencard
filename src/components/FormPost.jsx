import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import { useObserver } from 'mobx-react-lite';
import Post from '../models/Post';

const FormPost = ({ store }) => {

    const [description, setContent] = useState("");

    const handleSubmitPost = e => {
        e.preventDefault();
    
        store.addPost(new Post({ 
            description,
            user: 'User',
            picture: './assets/img/cyprus.png',
            location: 'Cyprus',
            avatar: './assets/img/cyprus.png',
            time: '1s ago'
        }));
        setContent("");
    }

    return useObserver(() => (
        <form className="form" onSubmit={handleSubmitPost}>
            <input className="form__input__description" type="text" id="description" name="description" placeholder="Write a description" value={description} onChange={e => setContent(e.currentTarget.value)} />
            <button className="form__button">post</button>
        </form>

    ));
};

FormPost.propTypes = {
    store: PropTypes.object.isRequired
};

export default FormPost;
