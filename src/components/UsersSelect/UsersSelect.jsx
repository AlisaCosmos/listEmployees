import './UsersSelect.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filtersSlice';

export default function UsersSelect() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const { searchValue } = useSelector((state) => state.filters);

  const onChangeInput = (event) => {
    dispatch(setSearchValue(event.target.value));
  };
  // отчиска
  const onClickClear = () => {
    dispatch(setSearchValue(''));
    console.log('clear all');
  };

  return (
    <div className="usersSelect">
      <select name="select" multiple onChange={onChangeInput}>
        {users?.map((item, i) => {
          const { name } = item;
          return (
            <option key={i} value={name} placeholder="Select name">
              {name}
            </option>
          );
        })}
      </select>
      <p>Filter: </p>
      <button onClick={onClickClear}>Clear all</button>
      <p>Name: {searchValue} </p>

      <form action="">
        <select name="select" id="" className="multiselect">
          {users?.map((item, i) => {
            const { name } = item;
            return (
              <option key={i} value={name} onChange={onChangeInput}>
                {name}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
}
