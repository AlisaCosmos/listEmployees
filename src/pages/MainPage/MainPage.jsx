import { useSelector } from 'react-redux';
import UsersList from '../../components/UsersList/UsersList';
import UsersSelect from '../../components/UsersSelect/UsersSelect';
import UserCardPopUp from '../../components/UserCardPopUp/UserCardPopUp';
import PopUp from '../../components/PopUp/PopUp';
import Dropdown from '../../components/Dropdown/Dropdown';
import DropdownInfoPanel from '../../components/DropdownInfoPanel/DropdownInfoPanel';

export default function MainPage() {
  const { isOpenPopup } = useSelector((state) => state.isOpenPopup);
  return (
    <div className="mainPage container__row">
      <Dropdown />
      <DropdownInfoPanel />
      {/* <UsersSelect />*/}
      <UsersList />
      {isOpenPopup && (
        <PopUp>
          <UserCardPopUp />
        </PopUp>
      )}
    </div>
  );
}
