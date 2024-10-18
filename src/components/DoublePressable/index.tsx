import {View, Text, Pressable} from 'react-native';
import React, {Children, ReactNode} from 'react';

interface IDoublePressable {
  onDoublePress?: () => void;
  children: ReactNode;
}
const DoublePressable = ({
  onDoublePress = () => {},
  children,
}: IDoublePressable) => {
  let lastTap = 0;
  const handleDoublePress = () => {
    const now = Date.now(); // timestamp
    if (now - lastTap < 400) {
      onDoublePress();
    }
    lastTap = now;
  };
  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
};

export default DoublePressable;
