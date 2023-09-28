import { useDispatch, useSelector } from 'react-redux';
import * as cx from 'classnames';
import { setIsOpenPopup } from '../../redux/slices/popupSlice';
import './PopUp.scss';
//import { Children } from 'react';

export default function PopUp(props) {
  const { isOpenPopup } = useSelector((state) => state.isOpenPopup);
  const dispatch = useDispatch();
  const classPopUpInner = cx('popUp__inner', { popUp__inner_show: isOpenPopup });
  const classPopUpContent = cx('popUp__content', { popUp__content_show: isOpenPopup });
  return (
    <div className="popUp">
      <div className={classPopUpInner} onClick={() => dispatch(setIsOpenPopup(false))}>
        <div className={classPopUpContent} onClick={(e) => e.stopPropagation()}>
          {props.children}
        </div>
      </div>
    </div>
  );
}
