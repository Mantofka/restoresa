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
  try {
    const response = await signInWithPopup(auth, googleProvider);
    const { uid, displayName, email } = response.user;
    return { uid, displayName, email };
  } catch ({ message }) {
    if (message.includes("auth/popup-closed-by-user")) return null;

    throw Error("Something went wrong. Please try again in a moment.");
  }
};

export const loginToFirebase = async (userCredentials) => {
  const { email, password } = userCredentials;
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    const {
      user: { displayName, uid },
    } = response;
    return { email, displayName, uid };
  } catch ({ message }) {
    if (
      message.includes("auth/wrong-password") ||
      message.includes("auth/user-not-found")
    ) {
      throw new Error("Email or password is incorrect.");
    }
    throw Error("Something went wrong. Please try again in a moment.");
  }
};

export const registerToFirebase = async (userCredentials) => {
  const { email, password, fullName } = userCredentials;

  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    updateProfile(auth.currentUser, {
      displayName: fullName,
    });
    const {
      user: { displayName, uid },
    } = user;
    return { fullName, email, uid };
  } catch (error) {
    throw Error("Something went wrong. Please try again in a moment.");
  }
};
