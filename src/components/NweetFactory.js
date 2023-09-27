import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { dbService } from "fbase";

const NweetFactory = ({ userObj }) => {
    const [nweet, setNweet] = useState("");

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
    );
};

export default NweetFactory;
