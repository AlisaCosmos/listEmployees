import { useSelector } from 'react-redux';
import './DropdownInfoPanel.scss';
export default function DropdownInfoPanel() {
  const { numberOfUsersSelected, selectedUserName, selectedUsers } = useSelector(
    (state) => state.dropdown,
  );
  //console.log('selectedUserName', selectedUserName);
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
