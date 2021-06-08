import React, { 
  createContext, 
  useState, 
  useContext
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

const UserHandler = ({ children }) => {
  const [photo, setPhoto] = useState('');
  const [info, setInfo] = useState('');
  const [web, setWeb] = useState('');
  const [userName, setUserName] = useState('');

  const storeData = async () => {
    try {
      await AsyncStorage.multiSet([['info1', info], ['web1', web], ['userName1', userName]])
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const valueInfo = await AsyncStorage.getItem('info1') 
      const valueWeb = await AsyncStorage.getItem('web1') 
      const valueUserName = await AsyncStorage.getItem('userName1') 
      if (valueInfo !== null) {
        setInfo(valueInfo);
      }
      if (valueWeb !== null) {
        setWeb(valueWeb);
      }
      if (valueUserName !== null) {
        setUserName(valueUserName);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UserContext.Provider
      value={{
        photo,
        setPhoto,
        info,
        setInfo,
        web,
        setWeb,
        userName,
        setUserName,
        getData,
      }}>
      {children}
    </UserContext.Provider>
  )
};

export default UserHandler;

export const useUserInformation = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('Error at context')
  }
  return context;
};
