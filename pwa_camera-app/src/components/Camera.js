"use client";

import { useRef, useEffect } from 'react';

const Camera = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Error accessing the camera: ', err);
      }
    };

    startCamera();
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{
          width: '100%',
          transform: 'scaleX(-1)', // This line mirrors the video horizontally
          }}
      />
    </div>
  );
};

export default Camera;