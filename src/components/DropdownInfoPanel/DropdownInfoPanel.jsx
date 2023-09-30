import { useSelector } from 'react-redux';
import './DropdownInfoPanel.scss';
export default function DropdownInfoPanel() {
  const { numberOfUsersSelected, selectedUserName } = useSelector((state) => state.dropdown);
  // отчиска
  const onClickClear = () => {
    console.log('clear all');
  };
  return (
    <div className="dropdownInfoPanel">
      <p>Filter:{numberOfUsersSelected} </p>
      <button onClick={onClickClear}>Clear all</button>
      <p>Name: {selectedUserName.join(', ')} </p>
    </div>
  );
}
