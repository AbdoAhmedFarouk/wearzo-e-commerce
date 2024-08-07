import { PropTypes } from 'prop-types';

MainButton.propTypes = {
  styles: PropTypes.string,
  text: PropTypes.any,
  type: PropTypes.string,
  animation: PropTypes.node,
  onClickHandler: PropTypes.func,
  isDisabled: PropTypes.bool,
};

const defaultStyles = `inline-block border-0 bg-primaryColor px-2 py-[5px]
text-[8px] font-normal uppercase leading-none text-white outline-0 ease-in-out
duration-300 hover:bg-thirdColor xxxs:px-3 xxxs:py-[5px] xxxs:text-[10px]
xxxs:leading-[16px] xs:px-5 xs:py-2 xs:text-xs lg:px-[30px] lg:py-2.5 lg:text-sm`;

function MainButton({
  animation,
  text,
  styles,
  type,
  onClickHandler,
  isDisabled,
}) {
  return (
    <button
      className={`${animation ? animation : ''} ${
        styles ? styles : defaultStyles
      }`}
      type={type ? type : 'button'}
      onClick={onClickHandler && onClickHandler}
      disabled={isDisabled && isDisabled}
    >
      {text}
    </button>
  );
}

export default MainButton;
