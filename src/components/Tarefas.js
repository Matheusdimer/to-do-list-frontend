import React, { useContext } from "react";
import { TaskCard, Checkbox, IconButton } from "../style/Components";

import { TaskController } from "../pages/Application";

export default function Tarefas({ dados, theme }) {
  const { setFinished, removeTask, showEditTask } = useContext(TaskController);

  return dados.map((task, i) => {
    return (
      <TaskCard key={i} theme={theme}>
        <div style={{ display: "flex", alignItems: "center", columnGap: 15 }}>
          {task.finished !== "none" && (
            <Checkbox
              type="checkbox"
              checked={task.finished}
              onChange={() => setFinished(i)}
              theme={theme}
            ></Checkbox>
          )}
          <div>
            {task.finished === true ? (
              <s>
                <h2>{task.name}</h2>
                <p>{task.description}</p>
              </s>
            ) : (
              <div>
                <h2>{task.name}</h2>
                <p>{task.description}</p>
              </div>
            )}
          </div>
        </div>

        {task.finished !== "none" && (
          <div style={{ display: "flex", alignItems: "center", columnGap: 10 }}>
            <IconButton theme={theme} onClick={() => showEditTask(i)}>
              <ion-icon name="create-outline"></ion-icon>
            </IconButton>
            <IconButton theme={theme} onClick={() => removeTask(i)}>
              <ion-icon name="trash-outline"></ion-icon>
            </IconButton>
          </div>
        )}
      </TaskCard>
    );
  });
}
