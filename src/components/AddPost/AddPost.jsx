import React, { useState }  from 'react';
import { useStores } from "../../hooks";
import Post from '../../models/Post';
import Header from '../Header/Header';
import style from "./AddPost.module.css";

const FormPost = () => {
 
  const { dataStore } = useStores();
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState('');
  const [tags, setTags] = useState('');
  const [picture, setPicture] = useState('assets/travel1.jpg');

  const handleSubmitPost = e => {
    e.preventDefault();

    dataStore.addPost(new Post({ 
        description,
        user: 'User',
        picture,
        location,
        tags,
        // avatar: './assets/img/avatar.png',
        time: '1s ago'
    }));
    setDescription("");
    setLocation('');
    setTags('');
    setPicture('');
  }

    const handleSubmitTags = e => {
      const input = e.currentTarget.value;
      const inputTags = input.split(`,`);
      setTags(inputTags);
    }

    const handleSubmitPicture = target => {
      const file = target.files[0];
      const reader = new FileReader();

      const handleLoadReader = e => {
        setPicture(e.currentTarget.result)
      }

      reader.addEventListener('load', handleLoadReader);
      reader.readAsDataURL(file);
    }
  

    return (
      <>
        <Header title={'Add Post'} />

        <form className={style.form} onSubmit={handleSubmitPost}>
          <label className={style.form__label}>Picture</label>
          <input
            className={style.form__input}
            type="file"
            placeholder="Write a description"
            onChange={(e) => handleSubmitPicture(e.currentTarget)}
            accept=".jpg, .jpeg, .png" required
          />
          <label className={style.form__label}>Description</label>
          <input
            className={style.form__input}
            type="text"
            id="description"
            name="description"
            placeholder="Write a description"
            value={description}
            onChange={e => setDescription(e.currentTarget.value)}
            required
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
            required
          />
          <label className={style.form__label}>Tags (plaats komma tussen de tags)
          <input
            className={style.form__input}
            type="text"
            id="tag"
            name="tag"
            placeholder="Add a tag"
            value={tags}
            onChange={e => handleSubmitTags(e)}
          /></label>
          <button className={style.form__button}>post</button>
        </form>
      </>
    );
};

export default FormPost;
