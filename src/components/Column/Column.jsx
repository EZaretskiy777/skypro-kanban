import PropTypes from "prop-types";

const Column = ({ title, children }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="column__content">{children}</div>
    </div>
  );
};

Column.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Column;
