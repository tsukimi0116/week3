import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import firebaseConfig from './firebaseConfig';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new EmailAuthProvider();



export { auth, provider, firebase, signInWithEmail };
