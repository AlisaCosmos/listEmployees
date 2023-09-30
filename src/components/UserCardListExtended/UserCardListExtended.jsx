import './UserCardListExtended.scss';
import StreetIcon from '../../assets/imgs/card-icon/street.svg';
import SuiteIcon from '../../assets/imgs/card-icon/suite.svg';
import CityIcon from '../../assets/imgs/card-icon/city.svg';
import ZipcodeIcon from '../../assets/imgs/card-icon/zipcode.svg';
import CompanyIcon from '../../assets/imgs/card-icon/name-company.svg';
import CatchPhraseIcon from '../../assets/imgs/card-icon/catchPhrase.svg';
import BsIcon from '../../assets/imgs/card-icon/bs.svg';
import UserCardField from '../UserCardField/UserCardField';

export default function UserCardListExtended({ data }) {
  const { address, company } = data;
  const { street, suite, city, zipcode } = address;
  const { name, catchPhrase, bs } = company;
  const usersCardList = [
    { svg: StreetIcon, svgProperty: 'street', text: street },
    { svg: SuiteIcon, svgProperty: 'suite', text: suite },
    { svg: CityIcon, svgProperty: 'city', text: city },
    { svg: ZipcodeIcon, svgProperty: 'zipcode', text: zipcode },
    { svg: CompanyIcon, svgProperty: 'name company', text: name },
    { svg: CatchPhraseIcon, svgProperty: 'catchPhrase', text: catchPhrase },
    { svg: BsIcon, svgProperty: 'bs', text: bs },
  ];
  return (
    <div className="userCardListExtended">
      {' '}
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
