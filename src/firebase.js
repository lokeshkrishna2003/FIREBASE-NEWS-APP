
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

// Create an app source
const firebaseConfig = {
apiKey: "AIzaSyD6vKl33Z8uClYoriKhEAXSWo51JLCAsn8",
    authDomain: "newsapp-6d6f2.firebaseapp.com",
    projectId: "newsapp-6d6f2",
    storageBucket: "newsapp-6d6f2.appspot.com",
    messagingSenderId: "884203606539",
    appId: "1:884203606539:web:7f8c5ae3f1aa1c5cf12d0e",
    measurementId: "G-BZCWLGS0X3"
};

// Initializing firebase
export const app = initializeApp(firebaseConfig);

// Initializing auth
export const auth = getAuth(app);



