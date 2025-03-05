// In the hexagonal architecture, this interface is a port.
// The port is part of the application core 
export default interface EncryptProvider {
    encrypt(data: string): string;
}