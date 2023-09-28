import './UsersCard.scss';
import UsersCardFields from '../UsersCardFields/UsersCardFields';
import { ReactComponent as EmailIcon } from '../../assets/imgs/card-icon/email.svg';
import { ReactComponent as PhoneIcon } from '../../assets/imgs/card-icon/call.svg';
import { ReactComponent as WebsiteIcon } from '../../assets/imgs/card-icon/website.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenPopup } from '../../redux/slices/popupSlice';
import { compile } from 'sass';
import UserCardField from '../UserCardField/UserCardField';

export default function UsersCard({ data }) {
  const dispatch = useDispatch();
  const { isOpenPopup } = useSelector((state) => state.isOpenPopup);
  const onClickUserCard = () => {
    dispatch(setIsOpenPopup(!isOpenPopup));
  };
  const iconCard = {
    emailIcon: require('../../assets/imgs/card-icon/email.svg'),
    phoneIcon: require('../../assets/imgs/card-icon/call.svg'),
    websiteIcon: require('../../assets/imgs/card-icon/website.svg'),
  };
  const { email, name, phone, username, website } = data;

  const usersCardList = [
    { name: name },
    { username: username },
    { email: email },
    { website: website },
    { phone: phone },
  ];

  console.log(usersCardList, 'UsersCardList');
  console.log('hello');

  return (
    <div className="usersCard">
      <button
        className="usersCard__content"
        onClick={() => {
          onClickUserCard();
        }}>
        {/* <div className="usersCard__content"> */}
        <div className="usersCard__rowTop">
          <div className="usersCard__colLeft">
            <div className="usersCard__avatar">
              <div className="usersCard__avatar_wrapper">
                <div className="usersCard__avatar_text">LA</div>
              </div>
            </div>
          </div>
          <div className="usersCard__colRight">
            <div className="usersCard__name">{name}</div>
            <div className="usersCard__username">{username}</div>
          </div>
        </div>
        <div className="usersCard__rowBottom">
          <div className="usersCard__field">
            <div className="usersCard__field_img">
              <EmailIcon />
            </div>
            <div className="usersCard__field_text">
              <div className="usersCard__email_text"> email: {email} </div>
            </div>
          </div>
          <div className="usersCard__field">
            <div className="usersCard__field_img">
              <WebsiteIcon />
            </div>
            <div className="usersCard__field_text">
              <div className="usersCard__website"> website: {website} </div>
            </div>
          </div>
          <div className="usersCard__field">
            <div className="usersCard__field_img">
              <PhoneIcon />
            </div>
            <div className="usersCard__field_text">
              <div className="usersCard__phone"> phone: {phone} </div>
            </div>
          </div>

          {usersCardList?.map((obj, i) => {
            return (
              <div key={i} className="usersCard__fields">
                <div className="usersCard__field_text">
                  <div className="usersCard__phone"> {obj.email} </div>
                </div>
                <div className="usersCard__field_text">
                  <div className="usersCard__phone"> {obj.website} </div>
                </div>
                <div className="usersCard__field_text">
                  <div className="usersCard__phone"> {obj.phone} </div>
                </div>
              </div>
            );
          })}
          {usersCardList?.map((obj, i) => {
            return (
              <UserCardField>
                <div className="usersCard__field_img"></div>
                <div className="usersCard__field_text">
                  <div className="usersCard__email_text"> email: {obj.email} </div>
                </div>
              </UserCardField>
            );
          })}
        </div>
      </button>
    </div>
  );
}
