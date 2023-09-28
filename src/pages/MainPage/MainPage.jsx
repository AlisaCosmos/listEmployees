import { useSelector } from 'react-redux';
import UsersList from '../../components/UsersList/UsersList';
import UsersSelect from '../../components/UsersSelect/UsersSelect';
import UserCardPopUp from '../../components/UserCardPopUp/UserCardPopUp';
import PopUp from '../../components/PopUp/PopUp';

export default function MainPage() {
  const { isOpenPopup } = useSelector((state) => state.isOpenPopup);
  return (
    <div className="mainPage container__row">
      <UsersSelect />
      <UsersList />
      {isOpenPopup && (
        <PopUp>
          <UserCardPopUp />
        </PopUp>
      )}
    </div>
  );
}
