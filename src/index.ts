import { Elysia, t } from "elysia";
import { llm } from "./llm";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .post("/llm", ({ body }) => llm(body), {
    body: t.Object({
      prompt: t.String(),
    }),
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
