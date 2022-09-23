import "./UserList.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";

export const UserList = () => {
  return (
    <div className="user-list-wrapper">
      <table>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="ID">1</td>
            <td data-label="First name">Laura</td>
            <td data-label="Last name">Diaz</td>
            <td data-label="Email">lauradiazdev@gmail.com</td>
            <td>
              <RiDeleteBinLine />
            </td>
            <td>
              <GrEdit />
            </td>
          </tr>
          <tr>
            <td data-label="ID">1</td>
            <td data-label="First name">Laura</td>
            <td data-label="Last name">Diaz</td>
            <td data-label="Email">lauradiazdev@gmail.com</td>

            <td>
              <RiDeleteBinLine />
            </td>
            <td>
              <GrEdit />
            </td>
          </tr>
          <tr>
            <td data-label="ID">1</td>
            <td data-label="First name">Laura</td>
            <td data-label="Last name">Diaz</td>
            <td data-label="Email">lauradiazdev@gmail.com</td>
          </tr>
          <tr>
            <td data-label="ID">1</td>
            <td data-label="First name">Laura</td>
            <td data-label="Last name">Diaz</td>
            <td data-label="Email">lauradiazdev@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
