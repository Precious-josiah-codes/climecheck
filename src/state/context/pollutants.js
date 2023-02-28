import { createContext, useEffect, useReducer, useRef, useState } from "react";
// import { pollutantsReducer, pollutantData } from "../reducer/pollutants";
import { db, auth, provider } from "../../firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

import {
  doc,
  onSnapshot,
  updateDoc,
  arrayUnion,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
export const pollutantsContext = createContext();

const PollutantsProvider = ({ children }) => {
  const [pollutants, setPollutants] = useState({
    PM1: 0.23,
    PM25: 930,
    PM10: 90,
    CO: 32,
    CO2: 30.3,
    TVOC: 21,
    FLAME: 23.3,
  });
  const [profile, setProfile] = useState({});
  const [addingDevice, setAddingDevice] = useState(false);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  // safe pollutant reading
  const isSafe = {
    PM1: 10,
    PM25: 5,
    PM10: 9,
    CO: 2,
    CO2: 3,
    TVOC: 21,
    FLAME: 23,
  };

  const modalOverlay = useRef(null);
  const modal = useRef(null);

  const updatePollutants = () => {
    setPollutants({
      PM1: 0.2,
      PM25: 0,
      PM10: 0,
      CO: 3,
      CO2: 0.3,
      TVOC: 1,
      FLAME: 2.3,
    });
  };

  const openAddDeviceModal = (isOpen) => {
    console.log("hello barbie");
    // modal class
    const modalCl = modal.current.classList;
    const overlayCl = modalOverlay.current.classList;

    if (isOpen) {
      overlayCl.remove("hidden");
      setTimeout(() => {
        modalCl.remove("opacity-0");
        modalCl.remove("-translate-y-full");
        modalCl.remove("scale-150");
      }, 100);
    } else {
      modalCl.add("-translate-y-full");
      setTimeout(() => {
        modalCl.add("opacity-0");
        modalCl.add("scale-150");
      }, 100);
      setTimeout(() => overlayCl.add("hidden"), 300);
    }
  };

  // check of user is signed in and return their uid
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(uid, "gottay");
        setUserId(uid);
        getUserProfile(uid);
        // ...
      } else {
        console.log(userId, "this is the user id");
        navigate("/auth/sign_up");
        // User is signed out
        // ...
      }
    });
  }, []);

  // useEffect for getting device pollutants  //
  useEffect(() => {
    const unsub = onSnapshot(
      doc(db, "pollutants", "JUbyJYjbjvtzD9awuPDT"),
      (doc) => {
        let readings = doc.data().readings;
        let currentReading = readings[readings.length - 1];
        setPollutants(currentReading);
        console.log(currentReading);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  // const get the user profile
  const getUserProfile = (userId) => {
    const unsub = onSnapshot(doc(db, "users", userId), (doc) => {
      setProfile(doc.data());

      console.log(doc.data(), "user profile");
    });

    return () => {
      unsub();
    };
  };

  // add device to user profile
  const addDevice = async (deviceName, sensorNumber) => {
    setAddingDevice(true);
    // if(s)
    console.log(deviceName, sensorNumber);
    const useProfileRef = doc(db, "users", userId);

    // Atomically add a new region to the "regions" array field.
    await updateDoc(useProfileRef, {
      devices: arrayUnion({
        deviceName,
        sensorNumber,
      }),
    });
  };

  // sign in user
  const authenticateUser = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        createUserProfile(user.uid, user.displayName, user.email);
        console.log(user, "hey auth");
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  // create the user profile
  const createUserProfile = async (uid, username, email) => {
    // Add a new document in collection "cities"
    await setDoc(doc(db, "users", uid), {
      username,
      initial: username[0],
      email,
      devices: [],
    }).then(() => {
      // redirect the user
      navigate("/");
    });
  };

  const adReadings = async () => {
    const pollutantRef = doc(db, "pollutants", "JUbyJYjbjvtzD9awuPDT");

    // Atomically add a new region to the "regions" array field.
    await updateDoc(pollutantRef, {
      readings: arrayUnion({
        PM1: 0.23,
        PM25: 23,
        PM10: 1,
        CO: 32,
        CO2: 0.3,
        TVOC: 21,
        FLAME: 23.3,
      }),
    });
  };

  // adReadings();

  // getPollutants();

  const data = {
    pollutants,
    updatePollutants,
    modalOverlay,
    modal,
    openAddDeviceModal,
    isSafe,
    adReadings,
    profile,
    addDevice,
    authenticateUser,
    userId,
  };

  return (
    <pollutantsContext.Provider value={data}>
      {children}
    </pollutantsContext.Provider>
  );
};

export default PollutantsProvider;
