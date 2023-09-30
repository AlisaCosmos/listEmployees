import * as cx from 'classnames';
import { useState } from 'react';
import { ReactComponent as Arrow } from '../../assets/imgs/arrow.svg';
import './Dropdown.scss';
import Checkbox from '../Checkbox/Checkbox';
import { useSelector } from 'react-redux';

export default function Dropdown() {
  const { users } = useSelector((state) => state.users);
  const [isDropdownDisplayed, setDropdownDisplayed] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const classTogSvg = cx('dropdown__svg', { dropdown__svg_open: isDropdownDisplayed });

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  // отчиска

  return (
    <div className="dropdown">
      <div className="dropdown__svg">
        <Arrow
          className={classTogSvg}
          onClick={() => {
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
        onClick={() => {
          setDropdownDisplayed(!isDropdownDisplayed);
        }}
      />

      {isDropdownDisplayed && (
        <div className="dropdown__panel">
          {users?.map((obj, i) => {
            return <Checkbox key={i} obj={obj} />;
          })}
        </div>
      )}
    </div>
  );
}
