import React from 'react';
import { useParams } from 'react-router-dom';

export default function VideoDetail() {
    const {videoId} = useParams() // 객체에 어떤 param 값이 있는지 전달해준다.
    console.log("videoId >>" , videoId);
    return (
        <div>
            VideoDetail 
        </div>
    );
}

