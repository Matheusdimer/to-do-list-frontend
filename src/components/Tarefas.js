import React, { useContext } from "react";
import { TaskCard, Checkbox, Button } from "../style/Components";

import { TaskController } from "../pages/Application";

export default function Tarefas({ dados, theme }) {
  const { setFinished, removeTask, showEditTask } = useContext(TaskController);

  return dados.map((task, i) => {
    return (
      <TaskCard key={i} theme={theme}>
        <div style={{display: "flex", alignItems: "center", columnGap: 15}} >
          <Checkbox
            type="checkbox"
            checked={task.finished}
            onChange={() => setFinished(i)}
            theme={theme}
          ></Checkbox>
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
            <Button theme={theme} onClick={() => showEditTask(i)}>
              Editar
            </Button>
            <Button theme={theme} colored={true} onClick={() => removeTask(i)}>
              Excluir
            </Button>
          </div>
        )}
      </TaskCard>
    );
  });
}
