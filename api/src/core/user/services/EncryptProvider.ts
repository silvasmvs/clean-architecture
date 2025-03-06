// In the hexagonal architecture, this interface is a port.
// The port is part of the application core 
export default interface EncryptProvider {
    encrypt(password: string): string;
    compare(password: string, hash: string): Promise<boolean>;
}