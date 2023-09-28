import './UsersSelect.scss';
import { useSelector } from 'react-redux';

export default function UsersSelect() {
  const { users } = useSelector((state) => state.users);

  return (
    <div className="usersSelect">
      <select>
        {users?.map((item, i) => {
          const { name } = item;
          return (
            <option key={i} value={name}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
