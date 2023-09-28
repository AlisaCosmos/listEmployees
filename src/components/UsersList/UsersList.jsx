import './UsersList.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/slices/usersSlice';
import UsersCard from '../UsersCard/UsersCard';

export default function UsersList() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  //функция получает пользователей и сохраняет
  const getUsers = async () => {
    await dispatch(fetchUsers());
  };
  //вызов
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="usersList">
      {users?.map((item, i) => {
        return <UsersCard key={i} data={item} />;
      })}
    </div>
  );
}
