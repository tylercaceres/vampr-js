class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let counter = 0;
    let currentVampire = this;
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      counter++;
    }
    return counter;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  // closestCommonAncestor(vampire) {
  //   //directLineWIth fxn
  //   const directLineWith = (jrVampire, srVampire) => {
  //     let currentVampire = jrVampire;
  //     while (currentVampire.creator) {
  //       if (currentVampire.creator === srVampire) {
  //         return true;
  //       }
  //       currentVampire = currentVampire.creator;
  //     }
  //     return false;
  //   };

  //   if (vampire === this) {
  //     return this;
  //   }

  //   let jrVampire = this.isMoreSeniorThan(vampire) ? vampire : this; //true or false
  //   let srVampire = this.isMoreSeniorThan(vampire) ? this : vampire;
  //   if (directLineWith(jrVampire, srVampire)) {
  //     return srVampire;
  //   } else {
  //     return false;
  //   }
  // }
}

module.exports = Vampire;
