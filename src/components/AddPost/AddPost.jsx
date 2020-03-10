import React, { useState }  from 'react';
import { useObserver } from 'mobx-react-lite';
import { useStores } from "../../hooks";
import Post from '../../models/Post';
import Header from '../Header/Header';
import style from "./AddPost.module.css";

const FormPost = () => {
 
    const { dataStore } = useStores();
    const [description, setContent] = useState("");

    const handleSubmitPost = e => {
        e.preventDefault();
    
        dataStore.addPost(new Post({ 
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
        <>
            <Header title={"Add Post"} />

            <form className={style.form} onSubmit={handleSubmitPost}>
                <input className={style.form__input__description} type="text" id="description" name="description"
                    placeholder="Write a description" value={description} onChange={e => setContent(e.currentTarget.value)} />
                <button className={style.form__button}>post</button>
            </form>
        </>
    ));
};

export default FormPost;
