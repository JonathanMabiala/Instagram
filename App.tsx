import {StyleSheet, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeSreen';
import CommentsScreen from './src/screens/CommentsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';

const App = () => {
  return (
    <View style={styles.app}>
      {/* <HomeScreen /> */}
      {/* <CommentsScreen /> */}
      {/* <ProfileScreen /> */}
      <EditProfileScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
