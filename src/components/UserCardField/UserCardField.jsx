import './UserCardField.scss';
export default function UserCardField(props) {
  return (
    <div className="userCardField">
      <div className="userCardField__inner">
        <div className="userCardField__content">{props.children}</div>
      </div>
    </div>
  );
}
