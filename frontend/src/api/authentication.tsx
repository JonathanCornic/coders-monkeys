import { auth } from "@/config/firebase-config";
import { getFirebaseErrorMessage } from "@/utils/getFirebaseErrorMessage";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const firebaseCreateUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { data: userCredential.user };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    const errorMessage = getFirebaseErrorMessage(
      "createUserWithEmailAndPassword",
      firebaseError.code
    );
    return {
      error: {
        code: firebaseError.code,
        message: errorMessage,
      },
    };
  }
};

export const firebaseSignInUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { data: userCredential.user };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    const errorMessage = getFirebaseErrorMessage(
      "signInWithEmailAndPassword",
      firebaseError.code
    );
    return {
      error: {
        code: firebaseError.code,
        message: errorMessage,
      },
    };
  }
};

export const firebaseLogOutUser = async () => {
  try {
    await signOut(auth);
    return { data: true };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    const errorMessage = getFirebaseErrorMessage(
      "firebaseLogOutUser",
      firebaseError.code
    );
    return {
      error: {
        code: firebaseError.code,
        message: errorMessage,
      },
    };
  }
};

export const sendEmailToResetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { data: true };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    const errorMessage = getFirebaseErrorMessage(
      "sendEmailToResetPassword",
      firebaseError.code
    );
    return {
      error: {
        code: firebaseError.code,
        message: errorMessage,
      },
    };
  }
};

export const sendEmailVerificationProcedure = async () => {
  if (auth.currentUser) {
    try {
      await sendEmailVerification(auth.currentUser);
      return { data: true };
    } catch (error) {
      const firebaseError = error as FirebaseError;
      const errorMessage = getFirebaseErrorMessage(
        "sendEmailVerificationProcedure",
        firebaseError.code
      );
      return {
        error: {
          code: firebaseError.code,
          message: errorMessage,
        },
      };
    }
  } else {
    return {
      error: {
        code: "unknow",
        message: "Une erreur est survenue",
      },
    };
  }
};

export const uptadeUserIdentificationData = async (uid: string, data: any) => {
  const result = await fetch(
    "https://us-central1-coders-monkeys-f3a92.cloudfunctions.net/updateUser",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: uid,
        data: data,
      }),
    }
  );
  if (!result.ok) {
    const errorResponse = await result.json();
    const firebaseError = errorResponse as FirebaseError;
    const errorMessage = getFirebaseErrorMessage(
      "uptadeUserIdentificationData",
      firebaseError.code
    );
    return {
      error: {
        code: firebaseError.code,
        message: errorMessage,
      },
    };
  }
  return { data: true };
};
