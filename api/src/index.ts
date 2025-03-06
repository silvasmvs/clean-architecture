import dotenv from "dotenv";
import express from "express";
import CreateUser from "./core/user/services/CreateUser";
import UserRepositoryPg from "./external/db/UserRepositoryPg";
import SpacePasswordCrypt from "./external/auth/SpacePasswordCrypt";
import CreateUserController from "./external/api/CreateUserController";


dotenv.config({ path: ".env" });

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

// Public routes
const userRepositoryPg = new UserRepositoryPg();
const spacePasswordCrypt = new SpacePasswordCrypt();
const createUser = new CreateUser(
    userRepositoryPg,
    spacePasswordCrypt
);

new CreateUserController(app, createUser);