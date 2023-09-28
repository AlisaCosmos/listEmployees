import { useSelector } from 'react-redux';

import './UserCardPopUp.scss';
import UserCardAvatar from '../UserCardAvatar/UserCardAvatar';
import UserCardList from '../UserCardList/UserCardList';
import UserCardListExtended from '../UserCardListExtended/UserCardListExtended';

export default function UserCardPopUp() {
  const { dataPopup } = useSelector((state) => state.isOpenPopup);
  return (
    <div className="userCardPopUp">
      <UserCardAvatar data={dataPopup} />
      <UserCardList data={dataPopup} />
      <UserCardListExtended data={dataPopup} />
    </div>
  );
}
