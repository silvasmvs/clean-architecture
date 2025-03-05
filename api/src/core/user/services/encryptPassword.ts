import CryptoProvider from "./EncryptProvider";

// In the hexagonal architecture, this class is an adapter
// the adaptor is not part of the core
export default class EncryptPassword implements CryptoProvider {
  public encrypt(password: string) {
    return password.split('').reverse().join('');
  }
}