import React from 'react';

const Video = () => {
  return (
    <div>
    <div className="container">
      <h3 className="text-dark text-center p-3">MAXIMEYES DRAMA MAGNETIC LASHES & EYELINER</h3>
    </div>

    <div className="container" style={{ backgroundColor: '#e9d9e2', borderRadius: '10px', height: '500px' }}>
      <iframe
        title="YouTube Video"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/vVCxBGBwJ50"
        frameBorder="0"
        allowFullScreen
      />
    </div>
    </div>
  );
};

export default Video;
