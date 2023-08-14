
import { Person } from "../domain/person";


export const create = async(data: Partial<Person>) => {
     await Person.query().insert(data);
}