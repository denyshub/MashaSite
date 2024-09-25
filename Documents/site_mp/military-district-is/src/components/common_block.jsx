const Common_block = (props) => {
  return (
    <div className="om-block-container">
      <div className="om-icon-title">
        {props.icon && <img src={props.icon} alt="" className="om-icon" />}{' '}
        {/* Показати іконку, якщо вона є */}
        <h3>{props.title}</h3>
      </div>
      <p>Натисніть для доступу до {props.title.toLowerCase()}</p>
    </div>
  );
};

export default Common_block;
