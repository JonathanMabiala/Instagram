import {StyleSheet, FlatList, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeSreen';

const App = () => {
  return (
    <View style={styles.app}>
      <HomeScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
