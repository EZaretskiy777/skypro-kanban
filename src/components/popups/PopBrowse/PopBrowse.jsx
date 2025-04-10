import { useEffect, useState, useContext } from "react";
import moment from "moment";
import ru from "moment/locale/ru";
import * as S from "./styledComponents";
import { useParams } from "react-router-dom";
import { getKanbanTask, deleteKanbanTask } from "../../../services/api/tasks";
import "react-day-picker/style.css";
import { color } from "../../../services/utils/color";
import { TaskContext } from "../../../providers/TaskProvider";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../Loader/Loader";

const PopBrowse = () => {
  const [task, setTask] = useState({});
  const [loading, setLoading] = useState(true);
  // const [isEdit, setIsEdit] = useState(false);
  const { id: taskId } = useParams();
  const { setTasks } = useContext(TaskContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const kanbanTask = await getKanbanTask({
          token: JSON.parse(localStorage.getItem("userInfo")).token,
          taskId,
        });
        setTask(kanbanTask);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };
    fetchTask();
  }, [taskId]);

  const setDateHandler = (date) => {
    setTask((prevTask) => ({
      ...prevTask,
      date,
    }));
  };

  const deleteTaskHandler = () => {
    const deleteTask = async () => {
      try {
        const kanbanTasks = await deleteKanbanTask({
          token: JSON.parse(localStorage.getItem("userInfo")).token,
          taskId,
        });
        setTasks(kanbanTasks);
        navigate("/");
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    };
    deleteTask();
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
                        value={task.description}
                      />
                    </S.PopBrowsFormBlock>
                  </S.PopBrowsForm>
                  <S.PopNewBrowserCalendar>
                    <S.CalendarTitle>Даты</S.CalendarTitle>
                    <S.Calendar
                      disabled={true}
                      peekNextMonth
                      locale={ru}
                      firstDayOfWeek={2}
                      mode="single"
                      selected={task.date}
                      onSelect={setDateHandler}
                      footer={
                        task.date
                          ? `Срок исполнения: ${moment(task.date).format(
                              "DD.MM.YYYY"
                            )}`
                          : "Выберите дату"
                      }
                    />
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
                    <S.PopBrowsBtn onClick={deleteTaskHandler}>
                      Удалить задачу
                    </S.PopBrowsBtn>
                  </S.BtnGroup>
                  <S.PopBrowsBtnBg>
                    <S.PopBrowsLink to="/">Закрыть</S.PopBrowsLink>
                  </S.PopBrowsBtnBg>
                </S.PopBrowsBtnBrowse>
                <S.PopBrowsBtnBrowse $hide={true}>
                  <S.BtnGroup>
                    <S.PopBrowsBtnBg>Сохранить</S.PopBrowsBtnBg>
                    <S.PopBrowsBtn>Отменить</S.PopBrowsBtn>
                    <S.PopBrowsBtn onClick={deleteTaskHandler}>
                      Удалить задачу
                    </S.PopBrowsBtn>
                  </S.BtnGroup>
                  <S.PopBrowsBtnBg>Закрыть</S.PopBrowsBtnBg>
                </S.PopBrowsBtnBrowse>
              </S.PopBrowserContent>
            </S.PopBrowsBlock>
          </S.PopBrowsContainer>
        </S.PopBrows>
      )}
    </>
  );
};

export default PopBrowse;
