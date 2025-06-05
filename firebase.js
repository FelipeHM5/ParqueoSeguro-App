import { initializeApp } from "firebase/app";
import  { initializeAuth , getReactNativePersistence  }  from   "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";


const firebaseConfig = {
  apiKey: "AIzaSyCOBFSxbw5j-t0E-AMNf8nzyfAOg4T_NWk",
  authDomain: "parqueoseguroapp.firebaseapp.com",
  projectId: "parqueoseguroapp",
  storageBucket: "parqueoseguroapp.firebasestorage.app",
  messagingSenderId: "446129521207",
  appId: "1:446129521207:web:17c468bc6cc006402c35b2",
  measurementId: "G-Y300BD4RQ5"
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
 });