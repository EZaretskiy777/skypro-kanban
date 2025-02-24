import Column from "../Column/Column";
import Card from "../Card/Card";

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column title={"Без статуса"}>
              <Card
                theme={"Web Design"}
                title={"Название задачи"}
                date={"30.10.23"}
                color="orange"
              />
              <Card
                theme={"Research"}
                title={"Название задачи"}
                date={"30.10.23"}
                color="green"
              />
              <Card
                theme={"Web Design"}
                title={"Название задачи"}
                date={"30.10.23"}
                color="orange"
              />
              <Card
                theme={"Copywriting"}
                title={"Название задачи"}
                date={"30.10.23"}
                color="purple"
              />
              <Card
                theme={"Web Design"}
                title={"Название задачи"}
                date={"30.10.23"}
                color="orange"
              />
            </Column>
            <Column title={"Нужно сделать"}>
              <Card
                theme={"Research"}
                title={"Название задачи"}
                date={"30.10.23"}
                color="green"
              />
            </Column>
            <Column title={"В работе"}>
              <Card
                theme={"Research"}
                title={"Название задачи"}
                date={"30.10.23"}
                color="green"
              />
              <Card
                theme={"Copywriting"}
                title={"Название задачи"}
                date={"30.10.23"}
                color="purple"
              />
              <Card
                theme={"Web Design"}
                title={"Название задачи"}
                date={"30.10.23"}
                color="orange"
              />
            </Column>
            <Column title={"Тестирование"}>
              <Card
                theme={"Research"}
                title={"Название задачи"}
                date={"30.10.23"}
                color="green"
              />
            </Column>
            <Column title={"Готово"}>
              <Card
                theme={"Research"}
                title={"Название задачи"}
                date={"30.10.23"}
                color="green"
              />
            </Column>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
