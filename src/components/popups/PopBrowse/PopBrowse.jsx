import { useEffect, useState } from "react";
import Calendar from "../../Calendar/Calendar";
import * as S from "./styledComponents";
import { useParams } from "react-router-dom";
import { getKanbanTask } from "../../../services/api/tasks";
import { themeList } from "../../../enums";

const PopBrowse = () => {
  const [task, setTask] = useState({});
  const { id: taskId } = useParams();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const kanbanTask = await getKanbanTask({
          token: JSON.parse(localStorage.getItem("userInfo")).token,
          taskId,
        });
        console.log("Task1: " + kanbanTask);
        setTask(kanbanTask);
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };

    fetchTask();
  }, [taskId]);

  const color = (theme) => {
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

  console.log("Task2: " + task.description);

  return (
    <S.PopBrows>
      <S.PopBrowsContainer>
        <S.PopBrowsBlock>
          <S.PopBrowserContent>
            <S.PopBrowsTopBlock>
              <S.PopBrowsTtl>{task.title}</S.PopBrowsTtl>
              <S.CategoriesTheme $color={color(task.topic)} $active={true}>
                <S.CategoriesThemeText $color={color(task.topic)}>
                  {task.topic}
                </S.CategoriesThemeText>
              </S.CategoriesTheme>
            </S.PopBrowsTopBlock>
            <S.PopBroswStatus>
              <S.PopBrowsStatusText>Статус</S.PopBrowsStatusText>
              <S.StatusThemes>
                <S.StatusTheme $hide={true}>
                  <S.StatusThemeText>Без статуса</S.StatusThemeText>
                </S.StatusTheme>
                <S.StatusTheme $color="gray">
                  <S.StatusThemeText $color="gray">
                    {task.status}
                  </S.StatusThemeText>
                </S.StatusTheme>
                <S.StatusTheme $hide={true}>
                  <S.StatusThemeText>В работе</S.StatusThemeText>
                </S.StatusTheme>
                <S.StatusTheme $hide={true}>
                  <S.StatusThemeText>Тестирование</S.StatusThemeText>
                </S.StatusTheme>
                <S.StatusTheme $hide={true}>
                  <S.StatusThemeText>Готово</S.StatusThemeText>
                </S.StatusTheme>
              </S.StatusThemes>
            </S.PopBroswStatus>
            <S.PopBrowsWrap>
              <S.PopBrowsForm>
                <S.PopBrowsFormBlock>
                  <S.PopBrowsFormLabel>Описание задачи</S.PopBrowsFormLabel>
                  <S.TextArea
                    name="text"
                    readOnly
                    placeholder="Введите описание задачи..."
                  >
                    {task.description}
                  </S.TextArea>
                </S.PopBrowsFormBlock>
              </S.PopBrowsForm>
              <S.PopNewBrowserCalendar>
                <Calendar />
              </S.PopNewBrowserCalendar>
            </S.PopBrowsWrap>
            <S.ThemeDownCategory>
              <S.ThemeDownCategoryText>Категория</S.ThemeDownCategoryText>
              <S.CategoriesTheme $color="orange" $active={true}>
                <S.CategoriesThemeText $color="orange">
                  Web Design
                </S.CategoriesThemeText>
              </S.CategoriesTheme>
            </S.ThemeDownCategory>
            <S.PopBrowsBtnBrowse>
              <S.BtnGroup>
                <S.PopBrowsBtn>Редактировать задачу</S.PopBrowsBtn>
                <S.PopBrowsBtn>Удалить задачу</S.PopBrowsBtn>
              </S.BtnGroup>
              <S.PopBrowsBtnBg>
                <S.PopBrowsLink to="/">Закрыть</S.PopBrowsLink>
              </S.PopBrowsBtnBg>
            </S.PopBrowsBtnBrowse>
            <S.PopBrowsBtnBrowse $hide={true}>
              <S.BtnGroup>
                <S.PopBrowsBtnBg>Сохранить</S.PopBrowsBtnBg>
                <S.PopBrowsBtn>Отменить</S.PopBrowsBtn>
                <S.PopBrowsBtn>Удалить задачу</S.PopBrowsBtn>
              </S.BtnGroup>
              <S.PopBrowsBtnBg>Закрыть</S.PopBrowsBtnBg>
            </S.PopBrowsBtnBrowse>
          </S.PopBrowserContent>
        </S.PopBrowsBlock>
      </S.PopBrowsContainer>
    </S.PopBrows>
  );
};

export default PopBrowse;
