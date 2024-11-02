import {StyleSheet, Text, View, FlatList} from 'react-native';
import comments from '../../assets/data/comments.json';
import React from 'react';
import Comment from '../../components/comment';
import Input from './Input';

const CommentsScreen = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={comments}
        renderItem={({item}) => (
          <Comment comment={item} includeDetails={true} />
        )}
        style={{padding: 10}}
      />
      <Input />
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({});
