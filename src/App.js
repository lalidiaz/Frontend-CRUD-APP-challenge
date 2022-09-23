import { NoMatch, Login } from "./pages";
import { UserOverview, UserList, UserDetail } from "./pages/Users";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="layout-wrapper">
      <Routes>
        <Route exact path="user" element={<UserOverview />}>
          <Route exact path="list" element={<UserList />} />
          <Route exact path="detail" element={<UserDetail />} />
        </Route>
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default App;
