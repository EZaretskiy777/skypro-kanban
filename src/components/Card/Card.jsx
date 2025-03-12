import PropTypes from "prop-types";
import { themeList } from "../../enums";
import * as S from "./styledComponents";

const Card = ({ theme, title, date }) => {
  const color = () => {
    switch (theme) {
      case themeList.webDesign:
        return "orange";
      case themeList.research:
        return "green";
      case themeList.copywriting:
        return "purple";
      default:
        return "gray";
    }
  };

  return (
    <S.CardsItem>
      <S.Card>
        <S.CardGroup>
          <S.CardTheme $color={color()}>
            <S.CardThemeText $color={color()}>{theme}</S.CardThemeText>
          </S.CardTheme>
          <S.CardLink href="#popBrowse" target="_self">
            <S.CardBtn>
              <S.CardBtnBlock />
              <S.CardBtnBlock />
              <S.CardBtnBlock />
            </S.CardBtn>
          </S.CardLink>
        </S.CardGroup>
        <S.CardContent>
          <S.CardContentLink href="" target="_blank">
            <S.CardTitle>{title}</S.CardTitle>
          </S.CardContentLink>
          <S.CardDate>
            <S.CardDateIcon
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <S.CardDateG clipPath="url(#clip0_1_415)">
                <S.CardDatePath
                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                />
                <S.CardDatePath
                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </S.CardDateG>
              <S.CardDateDefs>
                <S.CardDateClipPath id="clip0_1_415">
                  <S.CardDateRect width="13" height="13" fill="white" />
                </S.CardDateClipPath>
              </S.CardDateDefs>
            </S.CardDateIcon>
            <S.CardDateText>{date}</S.CardDateText>
          </S.CardDate>
        </S.CardContent>
      </S.Card>
    </S.CardsItem>
  );
};

Card.propTypes = {
  theme: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Card;
