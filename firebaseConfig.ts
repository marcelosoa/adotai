import { initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence, initializeAuth } from 'firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBfvmfnuzafJ3s4AX4wiFECsreB1ae5GRU",
  authDomain: "meleva-dd2a9.firebaseapp.com",
  projectId: "meleva-dd2a9",
  storageBucket: "meleva-dd2a9.appspot.com",
  messagingSenderId: "749642381716",
  appId: "1:749642381716:web:520770ab8a7c62462b3781"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})
export const auth = getAuth(app)
