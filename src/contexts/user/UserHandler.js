import React, { 
  createContext, 
  useState, 
  useContext
} from 'react';

export const UserContext = createContext();

const UserHandler = ({ children }) => {
  const [photo, setPhoto] = useState('');

  return (
    <UserContext.Provider
      value={{
        photo,
        setPhoto
      }}>
      {children}
    </UserContext.Provider>
  )
};

export default UserHandler;

export const useUserInformation = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUserInformation debe ser usado dentro de UserHandler')
  }
  return context;
};
