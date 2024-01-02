import LoginForm from './components/login/login'
import User from './components/users/user'
import ListMeeting from './components/meeting/listMeetings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ListService from './components/servicelogic/listService';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="admin" element={<LoginForm />}>
            <Route path="services" element={<ListService/>} />
            <Route path="meetings" element={<ListMeeting />} />
          </Route>
          <Route path="/" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
