import { useEffect, useState, useContext } from "react";
import Column from "../Column/Column";
import Card from "../Card/Card";
import { statusList } from "../../enums";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "./styledComponents";
import { getKanbanTasks, changeKanbanTask } from "../../services/api/tasks";
import { TaskContext } from "../../providers/TaskProvider";
import { DndContext } from "@dnd-kit/core";
import { SkeletonTheme } from "react-loading-skeleton";
import SkeletonCard from "../Card/SkeletonCard";

const Main = () => {
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

  const dragEndHandler = (e) => {
    const { active, over } = e;
    if (!over) return;
    const currentTaskId = active.id;
    const newStatus = over.id;

    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task._id === currentTaskId) {
          return { ...task, status: newStatus };
        }
        return task;
      })
    );
    changeKanbanTask({
      token: JSON.parse(localStorage.getItem("userInfo")).token,
      task: {
        ...tasks.find((task) => task._id === currentTaskId),
        status: newStatus,
      },
      taskId: currentTaskId,
    })
      .then((data) => {
        setTasks(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const mainContent = Object.entries(statusList).map((status) => {
    return (
      <Column key={status[1]} title={status[1]}>
        {tasks.map((task) => {
          if (task.status === status[1]) {
            return isLoading ? (
              <SkeletonCard key={task._id} />
            ) : (
              <Card
                id={task._id}
                key={task._id}
                theme={task.topic}
                title={task.title}
                date={task.date}
              />
            );
          }
          return null;
        })}
      </Column>
    );
  });

  return (
    <SkeletonTheme color="#202020" highlightColor="#444">
      <S.Main>
        <S.MainContainer>
          <S.MainBlock>
            <S.MainContent>
              <DndContext onDragEnd={dragEndHandler}>{mainContent}</DndContext>
            </S.MainContent>
          </S.MainBlock>
        </S.MainContainer>
      </S.Main>
    </SkeletonTheme>
  );
};

export default Main;
