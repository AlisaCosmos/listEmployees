import UserCardField from '../UserCardField/UserCardField';
import './UsersCardFields.scss';

export default function UsersCardFields(props, data) {
  return <div className="usersCardFields">{props.children} </div>;
}
