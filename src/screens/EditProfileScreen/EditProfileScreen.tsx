import {Image, StyleSheet, Text, View} from 'react-native';
import {useForm, Controller, Control} from 'react-hook-form';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import React, {useState} from 'react';
import user from '../../assets/data/user.json';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {TextInput} from 'react-native';
import {IUser} from '../../types/models';

const URL_REGEX =
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

type IEditableUserFields = 'name' | 'username' | 'website' | 'bio';
type IEditableUser = Pick<IUser, IEditableUserFields>;

interface ICustomInput {
  control: Control<IEditableUser, object>;
  label: string;
  name: IEditableUserFields;
  multiline?: boolean;
  rules?: object;
}

const CustomInput = ({
  control,
  name,
  label,
  multiline = false,
  rules = {},
}: ICustomInput) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View style={{flex: 1}}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder="hello"
              style={[
                styles.input,
                {borderColor: error ? colors.error : colors.border},
              ]}
              multiline={multiline}
            />
            {error && (
              <Text style={{color: colors.error}}>
                {error.message || 'Error'}
              </Text>
            )}
          </View>
        </View>
      );
    }}
  />
);

const EditProfileScreen = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<null | Asset>(null);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user.website,
      bio: user.bio,
    },
  });

  const onSubmit = (data: IEditableUser) => {
    console.log('submit', data);
  };

  //console.log('Errors', errors);

  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, errorCode, errorMessage, assets}) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
          setSelectedPhoto(assets[0]);
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <Image
        source={{uri: selectedPhoto?.uri || user.image}}
        style={styles.avatar}
      />
      <Text onPress={onChangePhoto} style={styles.textButton}>
        Change profile photo
      </Text>

      <CustomInput
        name="name"
        control={control}
        rules={{required: 'Name is required'}}
        label="Name"
      />
      <CustomInput
        name="username"
        control={control}
        rules={{
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Username should contain atleast 3 characters',
          },
        }}
        label="Username"
      />
      <CustomInput
        name="website"
        control={control}
        rules={{
          required: 'Website is required',
          pattern: {value: URL_REGEX, message: 'Provide a valide website'},
        }}
        label="Website"
      />
      <CustomInput
        name="bio"
        control={control}
        rules={{
          maxLength: {
            value: 200,
            message: 'Bio should be less than 200 characters',
          },
        }}
        label="Bio"
        multiline
      />

      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
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
    borderColor: colors.border,
    borderBottomWidth: 1,
  },
});
