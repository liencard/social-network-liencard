import React, { useState }  from 'react';
import { useObserver } from 'mobx-react-lite';
import { useStores } from "../../hooks";
import Post from '../../models/Post';
import Header from '../Header/Header';
import style from "./AddPost.module.css";

const FormPost = () => {
 
    const { dataStore } = useStores();
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState('');
    const [tags, setTag] = useState('');

    const handleSubmitPost = e => {
        e.preventDefault();
    
        dataStore.addPost(new Post({ 
            description,
            user: 'User',
            picture: './assets/img/travel3.jpg',
            location,
            tags,
            avatar: './assets/img/avatar.png',
            time: '1s ago'
        }));
        setDescription("");
        setLocation('');
        setTag('');
    }

    return useObserver(() => (
      <>
        <Header title={'Add Post'} />

        <form className={style.form} onSubmit={handleSubmitPost}>
          <label className={style.form__label}>Description</label>
          <input
            className={style.form__input}
            type="text"
            id="description"
            name="description"
            placeholder="Write a description"
            value={description}
            onChange={e => setDescription(e.currentTarget.value)}
          />
          <label className={style.form__label}>Location</label>
          <input
            className={style.form__input}
            type="text"
            id="location"
            name="location"
            placeholder="Add a location"
            value={location}
            onChange={e => setLocation(e.currentTarget.value)}
          />
          <label className={style.form__label}>Tags</label>
          <input
            className={style.form__input}
            type="text"
            id="tag"
            name="tag"
            placeholder="Add a tag"
            value={tags}
            onChange={e => setTag(e.currentTarget.value)}
          />
          <button className={style.form__button}>post</button>
        </form>
      </>
    ));
};

export default FormPost;
