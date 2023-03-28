import React, { useEffect, useState } from "react";
import { dbService } from "fbase";
import {
    collection,
    addDoc,
    query,
    onSnapshot,
    orderBy,
} from "firebase/firestore";
import Nweet from "components/Nweet";

const Home = ({ userObj }) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);

    useEffect(() => {
        const q = query(
            collection(dbService, "nweets"),
            // Sort data by created time
            orderBy("createdAt", "desc")
        );
        // get real-time data using snapshot
        // snapshot: 'listener' that notify when there is a change in the database
        // collection의 모든 nweet을 data()를 사용해 내용을 가져옴
        onSnapshot(q, (snapshot) => {
            const nweetArr = snapshot.docs.map((document) => ({
                id: document.id,
                ...document.data(),
            }));
            setNweets(nweetArr);
        });
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        // firestore에 text,date,id를 저장하고 input초기화
        await addDoc(collection(dbService, "nweets"), {
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
        });
        setNweet("");
    };

    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNweet(value);
    };

    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="What's on your mind?"
                    maxLength={120}
                    value={nweet}
                    onChange={onChange}
                />
                <input type="submit" value="Nweet" onClick={onSubmit} />
            </form>
            <div>
                {nweets.map((nweet) => (
                    <Nweet
                        key={nweet.id}
                        nweetObj={nweet}
                        isOwner={nweet.creatorId === userObj.uid}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
