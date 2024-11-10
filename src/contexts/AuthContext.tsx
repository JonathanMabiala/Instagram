import {GetCurrentUserOutput} from 'aws-amplify/auth/cognito';
import {getCurrentUser} from 'aws-amplify/auth';
import {Hub} from 'aws-amplify/utils';
import {HubCallback} from '@aws-amplify/core';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

type UserType = null | undefined | GetCurrentUserOutput;

type AuthContextType = {
  user: UserType;
};

export const AuthContext = createContext<AuthContextType>({
  user: undefined,
});

const AuthContextProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<UserType>(undefined);

  const checkUser = async () => {
    try {
      const authUser = await getCurrentUser();
      setUser(authUser);
      console.log('Current user', authUser);
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener: HubCallback = data => {
      const {event} = data.payload;
      if (event === 'signedOut') {
        setUser(null);
      }

      if (event === 'signedIn') {
        checkUser();
      }
      console.log('Listener: ', listener);
    };
    const hubListenerCancel = Hub.listen('auth', listener);

    //Stop listening
    return () => hubListenerCancel();
  }, []);
  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
