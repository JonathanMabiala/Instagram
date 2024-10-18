import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import fonts from '../../theme/fonts';
import React from 'react';
import styles from './styles';
import colors from '../../theme/colors';
import {IComment} from '../../types/models';

interface IcommentProps {
  comment: IComment;
}
const Comment = ({comment}: IcommentProps) => {
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={{fontWeight: fonts.weight.bold}}>
          {' '}
          {comment.user.username}
        </Text>
        {comment.comment}
      </Text>
      <AntDesign name={'hearto'} style={styles.icon} color={colors.black} />
    </View>
  );
};

export default Comment;
