import CustomButton from '../CustomButton';
import {signInWithRedirect} from 'aws-amplify/auth';
import {Alert} from 'react-native';
import 'aws-amplify/auth/enable-oauth-listener';

const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    try {
      signInWithRedirect({provider: 'Facebook'});
    } catch (error) {
      Alert.alert('Oops', (error as Error).message);
    }
  };

  const onSignInGoogle = () => {
    try {
      signInWithRedirect({provider: 'Google'});
    } catch (error) {
      Alert.alert('Oops', (error as Error).message);
    }
  };

  const onSignInApple = () => {
    console.warn('onSignInApple');
  };

  return (
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;
