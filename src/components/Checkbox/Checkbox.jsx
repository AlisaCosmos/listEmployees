import './Checkbox.scss';
import { ReactComponent as Mark } from '../../assets/imgs/mark.svg';
import * as cx from 'classnames';

import { useSelector } from 'react-redux';

export default function Checkbox({ obj, selectedUser, setselectedUser }) {
  console.log(selectedUser, ' selectedUser Checkbox');
  const { id, name, username } = obj;
  const { users } = useSelector((state) => state.users);

  return (
    // className={selectedUser.username ? 'checkbox active' : 'checkbox'}
    <div>
      <div className="checkbox__wrapper">
        <input
          className="checkbox__input"
          type="checkbox"
          value={name}
          id={id}
          onChange={(e) =>
            setselectedUser({
              ...selectedUser,
              [username]: e.target.checked,
            })
          }
          //onChange={(e) => {
          //  console.log(e.target.checked);
          //}}
          checked={selectedUser[username]}
        />
        <label className="checkbox__label" htmlFor={id}>
          <div className="checkbox__mark">{/* <Mark /> */}</div>
          <span className="checkbox__text">{name} </span>
        </label>
      </div>
    </div>
  );
}
