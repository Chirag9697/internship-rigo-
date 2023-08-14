// connection initialize
// endpoint register

import * as fromPersonPackage from "./src/packages/person"


// SCENARIO: CREATE PERSON
const p1: Partial<fromPersonPackage.Person> = {
    name:"asdf"
};
fromPersonPackage.create(p1)


// SCENRIO: CREATE ANIMAL
