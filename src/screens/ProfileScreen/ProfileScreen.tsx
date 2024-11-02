import {FlatList, Image, Text, View} from 'react-native';
import React from 'react';
import ProfileHeader from './ProfileHeader';
import user from '../../assets/data/user.json';
import FeedGridView from '../../components/FeedGridView/FeedGridView';

const ProfileScreen = () => {
  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
