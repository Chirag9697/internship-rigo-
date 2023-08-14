import { Model } from "objection";

export class Person extends Model {
  name?: string;

  static get tableName() {
      return 'persons';
    }
}