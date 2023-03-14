import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const loginWithGoogleProvider = async () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(token, user);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loginToFirebase = async (userCredentials) => {
  const { email, password } = userCredentials;

  return signInWithEmailAndPassword(auth, email, password)
    .then((user) => user)
    .catch((error) => {
      console.log(error.message);
    });
};

export const registerToFirebase = async (userCredentials) => {
  const { email, password, fullName } = userCredentials;

  return createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      updateProfile(user, {
        displayName: fullName,
      })
        .then(() => {
          console.log("Registered successfully!");
        })
        .catch((error) => {
          console.log("Something went wrong!!!");
        });
    })
    .catch((error) => {
      console.log("Something went wrong!!!");
    });
};
