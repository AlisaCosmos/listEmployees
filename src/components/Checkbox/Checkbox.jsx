import './Checkbox.scss';
import { ReactComponent as Mark } from '../../assets/imgs/mark.svg';

export default function Checkbox({ obj }) {
  const { id, name } = obj;
  return (
    <div className="checkbox">
      <div className="checkbox__wrapper">
        <input
          className="checkbox__input"
          type="checkbox"
          value={name}
          id={id}
          onChange={(e) => console.log(name)}
        />
        <label className="checkbox__label" htmlFor={id}>
          <div className="checkbox__mark">{/* <Mark /> */}</div>
          <span className="checkbox__text">{name} </span>
        </label>
      </div>
    </div>
  );
}
