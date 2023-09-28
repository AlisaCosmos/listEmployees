import './UserCardAvatar.scss';

export default function UserCardAvatar({ data }) {
  const { id, name, username } = data;

  return (
    <div className="userCardAvatar">
      <div className="userCardAvatar__colLeft">
        <div className="userCardAvatar__avatar">
          <div className="userCardAvatar__avatar_wrapper">
            <div className="userCardAvatar__avatar_text">LA</div>
          </div>
        </div>
      </div>
      <div className="userCardAvatar__colRight">
        <div className="userCardAvatar__name">{name}</div>
        <div className="userCardAvatar__username">{username}</div>
      </div>
    </div>
  );
}
