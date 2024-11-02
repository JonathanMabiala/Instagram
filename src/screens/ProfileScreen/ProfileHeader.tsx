import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './Styles';
import Button from '../../components/Button';
import user from '../../assets/data/user.json';

const ProfileHeader = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        {/* Profile image */}

        <Image source={{uri: user.image}} style={styles.avatar} />

        {/* Posts, followers, following number */}
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text style={styles.numberText}>Posts</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>198</Text>
          <Text style={styles.numberText}>Followers</Text>
        </View>

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>298</Text>
          <Text style={styles.numberText}>Following</Text>
        </View>
      </View>

      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.name}>{user.bio}</Text>

      {/* Button */}
      <View style={{flexDirection: 'row'}}>
        <Button
          text={'Edit Profile'}
          onPress={() => console.warn('On Edit Profile')}
        />

        <Button
          text={'Another button'}
          onPress={() => console.warn('On another button')}
        />
      </View>

      {/* GriddView Posts */}
    </View>
  );
};

export default ProfileHeader;
