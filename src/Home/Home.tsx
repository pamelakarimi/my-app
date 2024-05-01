import {getDocs, collection} from 'firebase/firestore';
import {db} from '../Config/Firebase';
import { useState, useEffect } from 'react';
import { Post } from './Post';

export interface post{
    id: string;
    userId: string;
    title: string;
    username: string;
    description: string;
}


export const Home = () =>{
    const [postsList, setPostsList] =  useState <post[] | null>(null);
    const postRef = collection(db, "posts");

const getPosts =  async () =>{
    const data =  await getDocs(postRef);
    setPostsList (data.docs.map((doc) => ({...doc.data(), id: doc.id})) as post[]
    );
};

useEffect (() => {
    getPosts();
}, [] );

    return <div>{postsList?.map((post) =>
    <Post Post ={post} />
    )}</div>;
};