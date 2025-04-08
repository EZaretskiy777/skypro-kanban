import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "./styledComponents";

const SkeletonCard = () => {
  return (
    <S.CardsItem>
      <S.Card>
        <S.CardGroup>
          <S.CardTheme>
            <Skeleton width={50} height={20} />
          </S.CardTheme>
          <S.CardLink>
            <Skeleton circle width={30} height={30} />
          </S.CardLink>
        </S.CardGroup>
        <S.CardContent>
          <S.CardContentLink>
            <Skeleton width="80%" height={20} />
          </S.CardContentLink>
          <S.CardDate>
            <Skeleton width={100} height={15} />
          </S.CardDate>
        </S.CardContent>
      </S.Card>
    </S.CardsItem>
  );
};

export default SkeletonCard;
