import {FlatList, Image, Text, View} from 'react-native';
import React from 'react';
import ProfileHeader from './ProfileHeader';
import user from '../../assets/data/user.json';
import FeedGridView from '../../components/FeedGridView/FeedGridView';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  UserProfileNavigationProp,
  MyProfileRouteProp,
  UserProfileRouteProp,
  MyProfileNavigationProp,
} from '../../types/navigation';

const ProfileScreen = () => {
  const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();
  const navigation = useNavigation<
    UserProfileNavigationProp | MyProfileNavigationProp
  >();

  const userId = route.params?.userId;
  // query the user with userID
  //navigation.setOptions({title: user.username});
  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
