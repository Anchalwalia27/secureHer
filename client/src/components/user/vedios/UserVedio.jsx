import { useRef } from "react";

function VideoControl() {
  const videoRef = useRef(null);

  const playVideo = () => videoRef.current.play();
  const pauseVideo = () => videoRef.current.pause();
  const openFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-start justify-center min-h-screen bg-gray-900 text-white p-8">
      {/* Left Side: Video */}
      <div className="w-full md:w-2/3">
        <video
          ref={videoRef}
          className="w-full rounded-lg shadow-lg cursor-pointer"
          controls
          onClick={openFullscreen}
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="mt-4 space-x-4">
          <button
            onClick={playVideo}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
          >
            Play
          </button>
          <button
            onClick={pauseVideo}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
          >
            Pause
          </button>
        </div>
      </div>

      {/* Right Side: Video Description */}
      <div className="w-full md:w-1/3 md:ml-8 mt-6 md:mt-0 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-2">Video Title</h2>
        <p className="text-gray-300">
          This is a sample video demonstrating how to play, pause, and open it in full-screen mode. Click on the video to watch it in full screen.
        </p>
        <ul className="mt-4 text-gray-400">
          <li>🎬 High-quality video</li>
          <li>🎥 Click to open full screen</li>
          <li>⚡ Smooth controls</li>
        </ul>
      </div>
    </div>
  );
}

export default VideoControl;
