// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from '@firebase/firestore';
import {FireBaseConfig} from '../utils/contants'

const app = initializeApp(FireBaseConfig);//established a connection to Firebase
const auth = getAuth(app);
const db = getFirestore(app)

export {auth,db}