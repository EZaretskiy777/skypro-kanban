import axios from "axios";

const API_URL_KANBAN = "https://wedev-api.sky.pro/api/kanban";
const token = localStorage.getItem("userInfo");

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
    throw new Error(error.response.data.error);
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
    throw new Error(error.response.data.error);
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
    throw new Error(error.response.data.error);
  }
}

export async function changeKanbanTask({ token, task, id }) {
  try {
    const data = await axios.put(API_URL_KANBAN + "/" + id, task, {
      headers: {
        Authorization: `Bearer ${token}`.replaceAll('"', ""),
        "Content-Type": "",
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export async function deleteKanbanTask({ taskId }) {
  try {
    const data = await axios.delete(API_URL_KANBAN + `/${taskId}`, {
      headers: {
        authorization: token,
      },
    });
    return data.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}
