import * as posts from './posts';
import * as users from './users';
import firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
  projectId: 'nebula-aluben',
}

firebase.initializeApp(firebaseConfig);

export {posts, users, firebase};