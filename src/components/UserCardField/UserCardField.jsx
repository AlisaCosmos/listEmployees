export default function UserCardField(props) {
  //const { company, email, id, name, phone, username, website } = data;
  // const iconCard = {
  //   emailIcon: require('../../assets/imgs/card-icon/email.svg'),
  //   phoneIcon: require('../../assets/imgs/card-icon/call.svg'),
  //   websiteIcon: require('../../assets/imgs/card-icon/website.svg'),
  // };
  // const iconCardClick = {
  //   emailIcon: require('../../assets/imgs/card-icon/email.svg'),
  //   id,
  //   name,
  //   phoneIcon: require('../../assets/imgs/card-icon/call.svg'),
  //   username,
  //   websiteIcon: require('../../assets/imgs/card-icon/website.svg'),
  //   address,
  //   company,
  // };
  // console.log(website, 'website');
  return (
    <div className="userCardField">
      <div className="userCardField__inner">
        <div className="userCardField__content">{props.children}</div>
      </div>
    </div>
  );
}
