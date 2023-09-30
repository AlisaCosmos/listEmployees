import * as cx from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { ReactComponent as Arrow } from '../../assets/imgs/arrow.svg';
import './Dropdown.scss';
import Checkbox from '../Checkbox/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import DropdownInfoPanel from '../DropdownInfoPanel/DropdownInfoPanel';
import { setNumberOfUsersSelected, setSelectedUserName } from '../../redux/slices/dropdownSlise';
import { setIsOpenPopup } from '../../redux/slices/popupSlice';

export default function Dropdown() {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  //const { numberOfUsersSelected } = useSelector((state) => state.dopdown);
  console.log('users dopdown=', users);

  const [selectedUser, setselectedUser] = useState(
    users.reduce((result, user) => ({ ...result, [user.username]: false }), {}),
  );

  dispatch(setSelectedUserName(Object.keys(selectedUser)));
  const { username } = selectedUser;
  console.log(username, 'username');
  console.log(selectedUser, 'selectedUser 1 ');
  dispatch(setNumberOfUsersSelected(Object.values(selectedUser).filter(Boolean).length));
  //console.log(numberOfUsersSelected, 'numberOfUsersSelected');

  const [isDropdownDisplayed, setDropdownDisplayed] = useState(false);
  const dropdownRef = useRef(null);

  const [isHover, setIsHover] = useState(false);
  const classTogSvg = cx('dropdown__svg', { dropdown__svg_open: isDropdownDisplayed });

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  // отчиска
  useEffect(() => {
    const onClick = (e) => {
      if (e.target !== dropdownRef.current) {
        setDropdownDisplayed(false);
      }
    };

    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div className="dropdown">
      <div className="dropdown__svg">
        <Arrow
          className={classTogSvg}
          onClick={(e) => {
            e.stopPropagation();
            setDropdownDisplayed(!isDropdownDisplayed);
          }}
        />
      </div>
      <input
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="dropdown__input"
        placeholder={isHover ? 'Enter a name' : 'Select name'}
        value=""
        onClick={(e) => {
          e.stopPropagation();
          setDropdownDisplayed(!isDropdownDisplayed);
        }}
      />

      {isDropdownDisplayed && (
        <div
          className="dropdown__panel"
          ref={dropdownRef}
          onClick={(e) => {
            e.stopPropagation();
          }}>
          {users?.map((obj, i) => {
            return (
              <Checkbox
                key={i}
                obj={obj}
                selectedUser={selectedUser}
                setselectedUser={setselectedUser}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
