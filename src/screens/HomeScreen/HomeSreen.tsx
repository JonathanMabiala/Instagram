import {
  StyleSheet,
  FlatList,
  View,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import FeedPost from '../../components/FeedPost';
import posts from '../../assets/data/posts.json';
import {useState, useRef} from 'react';

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id);
      }
    },
  );
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => (
          <FeedPost post={item} isVisible={activePostId === item.id} />
        )}
        showsVerticalScrollIndicator={false}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  );
};

export default HomeScreen;
