import axios from "axios";

const API_URL_KANBAN = "https://wedev-api.sky.pro/api/kanban";
const token = `Bearer ${localStorage.getItem("token")}`;

export async function getKanbanTasks() {
  try {
    const data = await axios.get(API_URL_KANBAN, {
      headers: {
        authorization: token.replaceAll('"', ""),
        Origin: "https://wedev.sky.pro",
      },
    });
    return data.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.error);
  }
}

export async function addKanbanTask({ task }) {
  try {
    const data = await axios.post(API_URL_KANBAN, task, {
      headers: {
        Bearer: localStorage.getItem("token"),
      },
    });
    return data.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export async function changeKanbanTask({ task }) {
  try {
    const data = await axios.put(API_URL_KANBAN, task, {
      headers: {
        Bearer: localStorage.getItem("token"),
      },
    });
    return data.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export async function deleteKanbanTask({ taskId }) {
  try {
    const data = await axios.delete(API_URL_KANBAN + `/${taskId}`, {
      headers: {
        Bearer: localStorage.getItem("token"),
      },
    });
    return data.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}
