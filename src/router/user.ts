import { Router } from "express";
import { getUser } from "../service/user";
import { ok } from "../common";
import authHandler from "../middleware/auth";

const UserRouter = Router();

UserRouter.get("/user", authHandler, (req, res) => {
  const { username } = req as any;
  getUser(username).then((r) => {
    res.send(ok({ data: r[0] }));
  });
});

export default UserRouter;
