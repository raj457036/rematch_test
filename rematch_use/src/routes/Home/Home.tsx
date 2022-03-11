import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState, Store } from "src/store";
import { db } from "../../core/configs/firebase.config";

function CounterComponent() {
  console.log("Counter Rerender");

  const counter = useSelector((state: RootState) => state.counter);

  return (
    <h1>
      Counter: {counter.value} | Last Action: {counter.lastAction}
    </h1>
  );
}

type Props = {};

function LightStatus({}: Props) {
  console.log("Light Status Rerender");

  const status = useSelector((state: RootState) => state.lightStatus.turnedOn);

  return <div>LightStatus: {status ? "On" : "Off"}</div>;
}

function Home() {
  // const [loading, setLoading] = useState(true);
  // const [profiles, setProfiles] = useState<any[]>([]);
  // const collectionRef = collection(db, "profiles");
  // const queryRef = query(collectionRef, orderBy("created", "desc"));

  // useEffect(() => {
  //   const unsubscribe = onSnapshot(queryRef, (snapshot) => {
  //     setProfiles(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     setLoading(false);
  //   });

  //   return () => unsubscribe();
  // }, []);

  // const addUser = async () => {
  //   setLoading(true);

  //   await addDoc(collectionRef, {
  //     uid: "Some New UID " + Math.random() * 10000,
  //     name: "Some New Name",
  //     role: "Some New Role",
  //     created: Timestamp.now(),
  //   });
  //   // setLoading(false);
  // };

  const dispatch = useDispatch<Dispatch>();
  console.log("Home Rerender");
  // if (loading) return <h1>Loading</h1>;
  return (
    <div>
      {/* <button onClick={addUser}>Add User</button> */}
      <button onClick={() => dispatch.counter.INCREMENT()}>Increment</button>
      <button onClick={() => dispatch.counter.DECREMENT()}>Decrement</button>
      <button
        onClick={() =>
          dispatch({
            type: "lightStatus/TURN_ON",
          })
        }
      >
        Turn On Light
      </button>
      <button onClick={() => dispatch.lightStatus.TURN_OFF()}>
        Turn Off Light
      </button>
      <CounterComponent />
      <LightStatus />
      {/* <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <pre>{JSON.stringify(profile, null, 4)}</pre>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Home;
