import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);
  };

  // useCallback은 조심해서 사용해야함  한번만들면 메모리상에 계속 보관하기 때문에 메모리에 많은 영향을 갈 수 있음
  // 그래서 꼭 써야할때만 쓰는 것이 좋음
  const search = useCallback(query => {
      setSelectedVideo(null);
      youtube
        .search(query) //
        .then(videos => setVideos(videos));
    }, []);

  useEffect(()=>{
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos));
  }, [youtube]);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <section className={styles.content}>
      {selectedVideo && (
        <div className={styles.detail}>
          <VideoDetail video={selectedVideo} />
        </div>
      )}
        <div className={styles.list}>
          <VideoList 
            videos={videos} 
            onVideoClick={selectVideo} 
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
