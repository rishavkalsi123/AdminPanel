export interface IUser {
  address: Address;
  age: number;
  birthDate: string;
  bloodGroup: string;
  company: Company;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  university: string;
  gender: string;
}
interface Address {
  address: string;
  city: string;
}
interface Company {
  department: string;
  city: string;
}
