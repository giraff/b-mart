// handlers.ts
import { rest } from "msw";

const baseUrl = "http://localhost:3000";

export const handlers = [
  rest.get(`${baseUrl}/`, async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: "얍"
      })
    );
  }),
  rest.post(`${baseUrl}/user`, async (req, res, ctx) => {
    return res();
    // ...
  })
];
