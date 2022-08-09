import style from "./card.module.css";

const Conditional = (props) => {
  const { text, type, subtitle, extraText, extraIcon } = props;

  if (type === undefined) {
    return null;
  }

  const getTypeStyle = () => {
    switch (type) {
      case "warning":
        return style.warning;
      case "danger":
        return style.danger;
      default:
        return style.info;
    }
  };

  return (
    <div className={`${style.card} ${getTypeStyle()}`}>
      <img
        className={style.icon}
        alt="icon"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/1200px-Infobox_info_icon.svg.png"
      />
      <div className={style.text}>
        <p className={style.title}>{text}</p>
        {subtitle && <p>{subtitle}</p>}
        {extraText || extraIcon}
        {extraText ? extraText : extraIcon}
      </div>
    </div>
  );
};

export default Conditional;
