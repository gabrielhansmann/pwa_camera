"use client";

import dynamic from 'next/dynamic';

// Dynamically import the Camera component to ensure it only runs on the client-side
const Camera = dynamic(() => import('../../components/Camera'), { ssr: false });

const CameraPage = () => {
  return (
    <div>
      <h1>Camera Access</h1>
      <Camera />
    </div>
  );
};

export default CameraPage;