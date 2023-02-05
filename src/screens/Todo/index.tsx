import { useState } from "react";
import Button from "../../components/Button";
import InputField from "../../components/Input";
import "./index.scss";

const Todo = () => {
  let [taskList] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
  });

  let taskListSize = taskList.length;
  console.log(taskListSize, taskList.length);

  const [taskName, setTaskName] = useState([]);

  const handleSetTask = (e: any) => {
    setTaskName(e.target.value);
  };

  const handleAddTask = () => {
    if (taskList.length === taskListSize) {
      taskList.push({
        ...{
          title: taskName,
          status: "Pending",
        },
      });
      localStorage.setItem("tasks", JSON.stringify(taskList));
    } else {
      localStorage.setItem("tasks", JSON.stringify(taskList));
    }
    setTaskName([]);
  };

  const handeDeleteTask = (taskList: any, id: string) => {
    // eslint-disable-next-line array-callback-return
    taskList.map((data: any, key: string) => {
      if (key === id) {
        taskList[key].status = "Done";
        handleAddTask();
      }
    });
  };

  return (
    <>
      <div id="todo-container">
        <div id="add-task">
          <InputField
            title="Add task name"
            value={taskName}
            onChange={handleSetTask}
          />
          <Button
            title="Add task"
            onClick={() => {
              if (taskName.length !== 0) handleAddTask();
            }}
          />
        </div>

        {taskList.length !== 0 ? (
          <div id="todos">
            {taskList.map((data: any, key: string) => {
              return data.status === "Pending" && data.title.length !== 0 ? (
                <div
                  id="todo-card"
                  title="Click to remove"
                  onClick={() => {
                    handeDeleteTask(taskList, key);
                  }}
                >
                  {data.title}
                </div>
              ) : null;
            })}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Todo;
