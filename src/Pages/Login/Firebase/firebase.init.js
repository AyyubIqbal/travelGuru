import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const AuthenticationInitialization = () => {
    initializeApp(firebaseConfig);
}

export default AuthenticationInitialization;