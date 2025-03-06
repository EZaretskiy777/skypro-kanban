import { useEffect, useState } from "react";
import Column from "../Column/Column";
import Card from "../Card/Card";
import { statusList } from "../../enums";
import { cartList } from "../../data";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <SkeletonTheme color="#202020" highlightColor="#444">
      {isLoading && <p className="main__loader_text">Данные загружаются...</p>}
      <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              {Object.entries(statusList).map((status) => {
                return (
                  <Column key={status[1]} title={status[1]}>
                    {cartList.map((card) => {
                      if (card.status === status[1]) {
                        return isLoading ? (
                          <Skeleton key={card.id} height={130} width={220} />
                        ) : (
                          <Card
                            key={card.id}
                            theme={card.theme}
                            title={card.title}
                            date={card.date}
                          />
                        );
                      }
                    })}
                  </Column>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </SkeletonTheme>
  );
};

export default Main;
