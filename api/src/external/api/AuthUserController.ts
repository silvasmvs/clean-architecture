import AuthUser from '@/core/user/services/AuthUser';
import { Express } from 'express'

export default class AuthUserController {
    constructor(
        server: Express,
        useCase: AuthUser
    ) {
        server.post('/users/auth', async (req, res) => {
            try {
                const result = await useCase.execute({
                    email: req.body.email,  
                    password: req.body.password
                });
                res.status(200).send(result);
            } catch (error: any) {
                console.log('error', error);
                res.status(400).send({ error: error.message });
            }
        });
    }
}