import PropTypes from "prop-types";
import * as S from "./styledComponents";

const Column = ({ title, children }) => {
  return (
    <S.Column>
      <S.ColumnTitle>
        <S.ColumnTitleText>{title}</S.ColumnTitleText>
      </S.ColumnTitle>
      <S.ColumnContent>
        <S.Cards>{children}</S.Cards>
      </S.ColumnContent>
    </S.Column>
  );
};

Column.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Column;
