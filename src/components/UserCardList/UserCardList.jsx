import EmailIcon from '../../assets/imgs/card-icon/email.svg';
import PhoneIcon from '../../assets/imgs/card-icon/call.svg';
import WebsiteIcon from '../../assets/imgs/card-icon/website.svg';
import './UserCardList.scss';
import UserCardField from '../UserCardField/UserCardField';

export default function UserCardList({ data }) {
  const { email, phone, website } = data;

  const usersCardList = [
    { svg: EmailIcon, svgProperty: 'email', text: email },
    { svg: WebsiteIcon, svgProperty: 'website', text: website },
    { svg: PhoneIcon, svgProperty: 'phone', text: phone },
  ];

  return (
    <div className="userCardList">
      {usersCardList?.map((obj, i) => {
        return (
          <UserCardField key={i}>
            <div className="userCardList__field_img">
              <img src={`${obj.svg}`} alt="svg" />
            </div>
            <div className="userCardList__field_text">
              <div className="userCardList__title">{obj.svgProperty}:</div>
              <div className="userCardList__subtitle"> {obj.text}</div>
            </div>
          </UserCardField>
        );
      })}
    </div>
  );
}
