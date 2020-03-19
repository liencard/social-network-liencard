import DataStore from "../stores/DataStore";
import UiStore from "../stores/UiStore";
import Post from "../models/Post";
import Comment from "../models/Comment";
import User from "../models/User";

import { createContext } from "react";

const rootStore = { dataStore: new DataStore(), uiStore: new UiStore() };

const user1 = new User({
    name: "Tom De Waele",
    store: rootStore.dataStore,
    avatar: './assets/img/avatar1.jpg'
});

const user2 = new User({
    name: "Henk Van Daele",
    store: rootStore.dataStore,
    avatar: './assets/img/avatar2.jpg'
});

const user3 = new User({
    name: "Helena De Smet",
    store: rootStore.dataStore,
    avatar: './assets/img/avatar1.jpg'
});

const user4 = new User({
    name: "Lotte Pyfferoen",
    store: rootStore.dataStore,
    avatar: './assets/img/avatar2.jpg'
});

const p1 = new Post({
    description:
        'Zon, zee, strand! Morbi nec rutrum magna. Curabitur et malesuada nunc.',
    user: user1,
    picture: './assets/img/travel1.jpg',
    location: 'Greenland',
    tags: ['scenery', 'rowing', 'lake'],
    time: '6h ago'
});

const p2 = new Post({
  description:
    'Zonsondergang uit Cyprus. Morbi sed nisl quis urna ornare euismod. Suspendisse sed vestibulum massa.',
  user: user2,
  picture: './assets/img/travel2.jpg',
  location: 'Norway',
  tags: ['peaceful', 'mountains', 'hiking'],
  time: '1h ago'
});

p1.comments = [
    new Comment({
        user: user4,
        comment: 'Wauw staat ook op mijn travellist!!',
        time: '33min ago'
    }),
    new Comment({
        user: user2,
        comment: 'Oh tof, veel plezier 😛',
        time: '6min ago'
    })
]

p2.comments = [
    new Comment({
        user: user1,
        comment: 'Wauw staat ook op mijn travellist!!',
        time: '8h ago'
    }),
    new Comment({
        user: user3,
        comment: 'Amuseer jullie daar ☀',
        time: '2 days ago'
    })
]

rootStore.uiStore.setCurrentUser(user1);
rootStore.dataStore.seed([p1, p2]);

export const storesContext = createContext(rootStore);
