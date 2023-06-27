import { getDatabase, ref, set, onValue } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  // Add your Firebase configuration here      
    apiKey: "AIzaSyD3WsCOPj2TFEoL6y2p_fW8bq-Fx-dQfO8",
    authDomain: "odin-projects-86d96.firebaseapp.com",
    projectId: "odin-projects-86d96",
    storageBucket: "odin-projects-86d96.appspot.com",
    messagingSenderId: "348930972852",
    appId: "1:348930972852:web:0e7b16f5a030031b07cbe1",
    measurementId: "G-P90F9T6FD5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get database and authentication instances
const database = getDatabase();
const auth = getAuth();

// Reference to projects data in the database
const projectsRef = ref(database, "projects");

// Listen for changes in projects data
onValue(projectsRef, (snapshot) => {
  const projectsData = snapshot.val();
  // Use the projects data
});

// Function to sign in user with email and password
function signIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // User signed in
    })
    .catch((error) => {
      // Handle sign-in error
    });
}
