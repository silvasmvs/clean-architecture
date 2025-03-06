import CreateUser from '@/core/user/services/CreateUser';
import { Express } from 'express'

export default class CreateUserController {
    constructor(
        server: Express,
        useCase: CreateUser
    ) {
        server.post('/users', async (req, res) => {
            try {
                await useCase.execute({
                    name: req.body.name,
                    email: req.body.email,  
                    password: req.body.password
                });
                res.status(201).send();
            } catch (error: any) {
                console.log('error', error);
                res.status(400).send({ error: error.message });
            }
        });
    }
}