import {Image, StyleSheet, Text, View} from 'react-native';
import {useForm} from 'react-hook-form';
import React from 'react';
import user from '../../assets/data/user.json';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {TextInput} from 'react-native';
interface ICustomInput {
  label: string;
  multiline?: boolean;
}
const CustomInput = ({label, multiline}: ICustomInput) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput placeholder="hello" style={styles.input} multiline={multiline} />
  </View>
);

const EditProfileScreen = () => {
  const onSubmit = () => {
    console.log('submit');
  };

  return (
    <View style={styles.page}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Text style={styles.textButton}>Change profile photo</Text>

      <CustomInput label="Name" />
      <CustomInput label="Username" />
      <CustomInput label="Website" />
      <CustomInput label="Bio" multiline />

      <Text onPress={onSubmit} style={styles.textButton}>
        Submit
      </Text>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {width: '30%', aspectRatio: 1, borderRadius: 100},
  textButton: {
    color: colors.primary,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,

    margin: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  label: {
    width: 75,
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderBottomWidth: 1,
  },
});
