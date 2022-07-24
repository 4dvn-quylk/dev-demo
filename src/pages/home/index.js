import { VideoCard } from '../../components/video-card';
import { useAppStore } from '../../stores';

const HomePage = () => {
  const [{ listVideos }] = useAppStore();
  return (
    <div style={{ margin: `24px 0` }}>
      {listVideos.map((item, idx) => (
        <VideoCard
          key={item.id}
          {...item}
          title={`#${idx + 1} - ${item.title}`}
        />
      ))}
    </div>
  );
};

export default HomePage;
