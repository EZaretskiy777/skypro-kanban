import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Column from "../Column/Column";
import Card from "../Card/Card";
import { statusList } from "../../enums";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "./styledComponents";
import { getKanbanTasks } from "../../services/api/tasks";
import { TaskContext } from "../../providers/TaskProvider";

const Main = () => {
  const navigate = useNavigate();
  const { tasks, setTasks } = useContext(TaskContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getKanbanTasks({
      token: JSON.parse(localStorage.getItem("userInfo")).token,
    })
      .then((data) => {
        setTasks(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const cardInfoHandler = (taskId) => {
    navigate(`/card/${taskId}`);
  };

  const mainContent = Object.entries(statusList).map((status) => {
    return (
      <Column key={status[1]} title={status[1]}>
        {tasks.length > 0 &&
          tasks.map((task) => {
            if (task.status === status[1]) {
              return isLoading ? (
                <Skeleton key={task._id} height={130} width={220} />
              ) : (
                <Card
                  onClick={() => cardInfoHandler(task._id)}
                  key={task._id}
                  theme={task.topic}
                  title={task.title}
                  date={task.date}
                />
              );
            }
          })}
      </Column>
    );
  });

  return (
    <SkeletonTheme color="#202020" highlightColor="#444">
      {isLoading && <p className="main__loader_text">Данные загружаются...</p>}
      <S.Main>
        <S.MainContainer>
          <S.MainBlock>
            <S.MainContent>{mainContent}</S.MainContent>
          </S.MainBlock>
        </S.MainContainer>
      </S.Main>
    </SkeletonTheme>
  );
};

export default Main;
