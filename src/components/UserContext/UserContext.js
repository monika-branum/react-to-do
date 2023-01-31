const { createContext, useState } = require('react');
const { getUser } = require('../services/auth');
//make sure to go back to create user providerrr
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser);
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
