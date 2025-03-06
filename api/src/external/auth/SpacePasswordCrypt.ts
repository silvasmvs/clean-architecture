import bcrypt from 'bcrypt';
import EncryptProvider from "@/core/user/services/EncryptProvider";

export default class SpacePasswordCrypt implements EncryptProvider {
    encrypt(data: string): string {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(data, salt);
    }

    async compare(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }
}