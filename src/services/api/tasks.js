import axios from "axios";

const API_URL_KANBAN = "https://wedev-api.sky.pro/api/kanban";

export async function getKanbanTasks({ token }) {
  try {
    const data = await axios.get(API_URL_KANBAN, {
      headers: {
        authorization: `Bearer ${token}`.replaceAll('"', ""),
      },
    });

    return data.data.tasks;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}

export async function getKanbanTask({ token, taskId }) {
  try {
    const data = await axios.get(API_URL_KANBAN + "/" + taskId, {
      headers: {
        authorization: `Bearer ${token}`.replaceAll('"', ""),
      },
    });
    return data.data.task;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}

export async function addKanbanTask({ token, task }) {
  try {
    const data = await axios.post(API_URL_KANBAN, task, {
      headers: {
        Authorization: `Bearer ${token}`.replaceAll('"', ""),
        "Content-Type": "",
      },
    });
    return data.data.tasks;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}

export async function changeKanbanTask({ token, task, taskId }) {
  try {
    const data = await axios.put(API_URL_KANBAN + "/" + taskId, task, {
      headers: {
        Authorization: `Bearer ${token}`.replaceAll('"', ""),
        "Content-Type": "",
      },
    });
    return data.data.tasks;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}

export async function deleteKanbanTask({ token, taskId }) {
  try {
    const data = await axios.delete(API_URL_KANBAN + `/${taskId}`, {
      headers: {
        Authorization: `Bearer ${token}`.replaceAll('"', ""),
        "Content-Type": "",
      },
    });
    return data.data.tasks;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}
