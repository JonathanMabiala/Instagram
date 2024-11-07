import Navigation from './src/navigation';
import {Amplify} from 'aws-amplify';
import config from './src/aws-exports';
import AuthContextProvider from './src/contexts/AuthContext';
import {Authenticator} from '@aws-amplify/ui-react-native';

Amplify.configure(config);
const App = () => {
  return (
    <Authenticator.Provider>
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </Authenticator.Provider>
  );
};

export default App;
