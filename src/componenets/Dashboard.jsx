import { useContext } from 'react';
import { UserContext } from './../context/UserContext';

function Dashboard() {

  const { isLoggedIn,  setLoggedIn } = useContext(UserContext);
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard