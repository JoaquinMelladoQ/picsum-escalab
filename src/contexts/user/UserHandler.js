import React, { 
  createContext, 
  useState, 
  useContext
} from 'react';

export const UserContext = createContext();

const UserHandler = ({ children }) => {
  const [photo, setPhoto] = useState('');
  const [info, setInfo] = useState('');
  const [web, setWeb] = useState('');
  const [userName, setUserName] = useState('');

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
        setUserName
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
