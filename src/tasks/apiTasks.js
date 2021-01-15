const api = require('../config/apiConfig.json');

export async function createTask(task, token) {
  const url = api.server + "/task/create";

  const response = await fetch(url, {
    method: 'POST',
    headers: new Headers({
      "Authorization": "Bearer " + token,
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(task)
  });

  const result = await response.json();

  return result;
}

export async function updateTask(taskId, modified, token) {
  const url = api.server + "/task/" + taskId;
  
  const response = await fetch(url, {
    method: 'PUT',
    headers: new Headers({
      "Authorization": "Bearer " + token,
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(modified)
  });

  const result = await response.json();

  return result;
}

export async function deleteTask(taskId, token) {
  const url = api.server + "/task/" + taskId;

  const response = await fetch(url, {
    method: 'DELETE',
    headers: new Headers({
      "Authorization": "Bearer " + token
    })
  });

  const result = await response.json();

  return result;
}

export async function listTasks(userId, token) {
  const url = api.server + "/task/list/" + userId;

  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      "Authorization": "Bearer " + token
    })
  });

  const tasks = await response.json();

  return tasks;
}

export async function showTask(taskId, token) {
  const url = api.server + "/task/" + taskId;

  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      "Authorization": "Bearer " + token
    })
  });

  const task = await response.json();

  return task;
}