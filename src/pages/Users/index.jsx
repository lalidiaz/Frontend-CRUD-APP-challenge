import "./Users.css";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiShow } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, fetchUserById, deleteUser } from "../../store/usersSlice";
import { Loading, Error, Pagination, Card, AnimateRoute } from "../../components";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { data, isLoading, error, errorMessage, per_page, page, total_pages, total } = useSelector(
    (state) => state.users
  );

  const [currentPage, setCurrentPage] = useState(page);
  const [usersPerPage, setUsersPerPage] = useState(per_page);

  const indexLastUser = currentPage * usersPerPage;

  const indexFirstUser = indexLastUser - usersPerPage;

  const currentUsers = data.slice(indexFirstUser, indexLastUser);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePage = (pageNum) => {
    setCurrentPage(pageNum);
  };

  if (!data.length) dispatch(fetchUsers());

  const handleSelect = (id) => {
    dispatch(fetchUserById({ id, routeTo: navigate }));
  };

  const handleDelete = (id) => {
    dispatch(deleteUser({ id }));
  };

  return (
    <AnimateRoute>
    <div className="user-list-wrapper">
      <section className="layout-cards">
        <Card total={total} title="Total users" percent="20%" />
        <Card total={total_pages} title="Total Pages" percent="50%" />
        <Card total={per_page} title="Total users per page" percent="30%" />
      </section>
      <div>
        {isLoading && <Loading />}
        {error && !isLoading && <Error message={errorMessage} />}
      </div>

      {!isLoading && (
        <>
          <table>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col"></th>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th scope="col">Email</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>

            <tbody>
              {currentUsers &&
                currentUsers.map(({ id, avatar, first_name, last_name, email }) => (
                  <tr key={id} className="users-table-row">
                    <td data-label="ID">{id}</td>
                    <td data-label="Avatar">
                      <img src={avatar} alt="user-avatar" className="user-avatar" />
                    </td>
                    <td data-label="First name">{first_name}</td>
                    <td data-label="Last name">{last_name}</td>
                    <td data-label="Email">{email}</td>
                    <td>
                      <button className="btn-table" onClick={() => handleDelete(id)}>
                        <RiDeleteBinLine />
                      </button>
                    </td>

                    <td>
                      <button className="btn-table" onClick={() => handleSelect(id)}>
                        <BiShow />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <Pagination currentPage={currentPage} onChange={handlePage} pageNumbers={pageNumbers} />
        </>
      )}
    </div>
    </AnimateRoute>
  );
};
