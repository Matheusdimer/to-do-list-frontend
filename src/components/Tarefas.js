import React, { useContext } from "react";
import { TaskCard } from "../style/Components";
import Checkbox from "@material-ui/core/Checkbox";

import { TaskController } from "../pages/Application";

export default function Tarefas({ dados, theme }) {
  const { setFinished } = useContext(TaskController);

  return dados.map((task, i) => {
    return (
      <TaskCard key={i} theme={theme}>
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
        {task.finished !== "none" && (
          <Checkbox
            checked={task.finished}
            color="default"
            onChange={() => setFinished(i)}
          />
        )}
      </TaskCard>
    );
  });
}
