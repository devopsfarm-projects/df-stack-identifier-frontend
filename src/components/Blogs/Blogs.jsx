import React, { useState } from 'react';
import ReactPlayer from 'react-player';

function Blog() {
  const videos = [
    'https://www.youtube.com/watch?v=6KK66lX_T6E',
    'https://youtu.be/e83aLXN60Hw?si=aKlc8l8Ij3h_dzJk',
    'https://youtu.be/gI1bdrPZVWM?si=sw6Gr1SNjwKD4Rx2',
    'https://youtu.be/HTqVz0xZ-EY?si=qwN4CgR5e1yODaYU',
    'https://youtu.be/EDAbvIDZhZA?si=eRqlYN2e1W7AFZKI',
    'https://youtu.be/xd0JeipvppQ?si=laCn4CwfowPs3Tjb',
    'https://youtu.be/LfG39ddEKo4?si=6FUWGUhzsFtuXSoV',
    'https://youtu.be/eEHwm0LCDTQ?si=3OVEeom6YfuY0CFR',
    'https://youtu.be/vpiXtumc-Uo?si=KlcOxqNm9lGT9Mb6',
    'https://youtu.be/aTUQksA8LVE?si=jveBevJJOT-VOd86',
    'https://youtu.be/loy2KJQFJ40?si=LCz-esKhBiTKddQ4',
    'https://youtu.be/7-wFPVoPj_k?si=bMFg7g9Zf6w13fEA',
    'https://youtu.be/rZrZuVFSjkw?si=KnEhUljfRMlRHrXk',
    'https://youtu.be/cYpLhGbU-EY?si=BbmkS4l7RJAA6sb2',
    'https://youtu.be/oa56ckjJnPY?si=z8tuQs6LSJ1Ygsd-',
    'https://youtu.be/CbpPyHAA6TU?si=lpL7BvAY9m27i3II',
    'https://youtu.be/eChIEA8CvgE?si=JttoA3iqHxUToi77',
    'https://youtu.be/JzZH2co-S7c?si=Y0wfHtq0fdEgRC16',
    'https://youtu.be/eEHwm0LCDTQ?si=3OVEeom6YfuY0CFR',
    'https://youtu.be/-vcxfZlnJ8g?si=Jv6yjYGM0DgifCuy',
    'https://youtu.be/6KK66lX_T6E?si=WjZZUkWSTWPEN0N3',
    'https://youtu.be/loy2KJQFJ40?si=LCz-esKhBiTKddQ4',
    'https://youtu.be/6KK66lX_T6E?si=WjZZUkWSTWPEN0N3'
  ];

  const [playingIndex, setPlayingIndex] = useState(0); // Set initial state to 0 for the first video

  const handlePlay = (index) => {
    setPlayingIndex(index);
  };

  return (
    <div className="flex flex-col items-center py-8 dark:bg-black pt-24">
      <h1 className="text-3xl font-bold mb-8 text-white">Blog Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
        {videos.map((url, index) => (
          <div key={index} className={`w-full h-96 ${playingIndex === index ? 'col-span-3' : ''}`}>
            <ReactPlayer
              className="react-player"
              url={url}
              controls
              width="100%"
              height="100%"
              playing={playingIndex === index}
              onPlay={() => handlePlay(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
