import { APIRequestContext } from "@playwright/test";
import User from "../models/User";

export default class TodoApi {
  async addTodo(request: APIRequestContext, user: User) {
    return await request.post("/api/v1/tasks", {
      data: {
        isCompleted: false,
        item: "Learn i am from Bangladesh",
      },
      headers: {
        Authorization: `Bearer ${user.getAccessToken()}`,
      },
    });
  }
}
