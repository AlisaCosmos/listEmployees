import './UsersCard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenPopup } from '../../redux/slices/popupSlice';
import UserCardAvatar from '../UserCardAvatar/UserCardAvatar';
import UserCardList from '../UserCardList/UserCardList';

export default function UsersCard({ data }) {
  const dispatch = useDispatch();
  const { isOpenPopup } = useSelector((state) => state.isOpenPopup);
  const onClickUserCard = () => {
    dispatch(setIsOpenPopup(!isOpenPopup));
  };

  return (
    <div className="usersCard">
      <button
        className="usersCard__content"
        onClick={() => {
          onClickUserCard();
        }}>
        <div className="usersCard__rowTop">
          <UserCardAvatar data={data} />
        </div>
        <div className="usersCard__rowBottom">
          <UserCardList data={data} />
        </div>
      </button>
    </div>
  );
}
