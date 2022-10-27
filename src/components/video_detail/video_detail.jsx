import styles from './video_detail.module.css';
import React from 'react';

const VideoDetail = ({video, video: { snippet }}) => (
	<section className={styles.detail}>
		<iframe 
			className={styles.video}
			type="text/html"
			width="100%" 
			height="500px"
			src={`https://www.youtube.com/embed/${video.id}`}
			frameborder="0" 
			allowfullscreen
		></iframe>
		{/* {video.snippet.}이 반복되니까 위에  video: { snippet } 쓰고 video.을 지워서 사용해도 됨 */}
		<h2>{snippet.title}</h2>  
		<h3>{snippet.channelTitle}</h3>
		<pre className={styles.description}>{snippet.description}</pre>
	</section>
);

export default VideoDetail;