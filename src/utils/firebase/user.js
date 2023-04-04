import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  reauthenticateWithCredential,
  updatePhoneNumber,
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
      user: { uid },
    } = user;
    return { fullName, email, uid };
  } catch (error) {
    throw Error("Something went wrong. Please try again in a moment.");
  }
};

export const changeUserPassword = async (userCredentials) => {
  const { email, currentPassword } = userCredentials;

  // const credential = await EmailAuthCredential.credential(
  //   email,
  //   currentPassword
  // );
  // console.log(credential);

  // const credential = EmailAuthCredential.credential(email, currentPassword);
  // console.log(credential);
  const user = auth.currentUser;
  console.log(user);
  await reauthenticateWithCredential(user, { email, password: currentPassword })
    .then(() => {
      console.log("wowww");
    })
    .catch((err) => console.log(err));
};

export const changeUserPhoneNumber = async (newNumber) => {
  updatePhoneNumber(auth.currentUser, {
    phoneNumber: newNumber,
  })
    .then(() => {
      console.log("Updated successfully.");
    })
    .catch((err) => console.warn("Whoops, something went wrong"));
};
