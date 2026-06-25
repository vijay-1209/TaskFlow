import API from "./api";

// Get all tasks
export const getTasks = async () => {
  try {
    const response = await API.get("/tasks");
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get single task
export const getTaskById = async (id) => {
  try {
    const response = await API.get(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Create task
export const createTask = async (taskData) => {
  try {
    const response = await API.post(
      "/tasks",
      taskData
    );

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Update task
export const updateTask = async (
  id,
  taskData
) => {
  try {
    const response = await API.put(
      `/tasks/${id}`,
      taskData
    );

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Update task status only
export const updateTaskStatus = async (
  id,
  status
) => {
  try {
    const response = await API.patch(
      `/tasks/${id}/status`,
      { status }
    );

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Delete task
export const deleteTask = async (id) => {
  try {
    const response = await API.delete(
      `/tasks/${id}`
    );

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};