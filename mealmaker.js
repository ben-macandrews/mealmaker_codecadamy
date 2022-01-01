const menu = {
  
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  //getter and setter methods not crucial for this challenge but good practice when seting upo objects.
  get appetizers() {
    return this._courses.appetizers;
  },

  get mains() {
    return this._courses.mains;
  },

  get desserts() {
    return this._courses.desserts;
  },

  set appetizers(appetizersIn) {
    this._courses.appetizers = appetizersIn;
  },

  set mains(mainsIn) {
    this._courses.mains = mainsIn;
  },

  set desserts(dessertsIn) {
    this._courses.desserts = dessertsIn;
  },

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    }
  },

  addDishToCourse (courseName, dishName, dishPrice) {
const dish = {
  name: dishName,
  price: dishPrice,
};
this._courses[courseName].push(dish);
  },

//had issues with incorrectly written Math.random() missing brackets and not defining randomIndex properly
  getRandomDishFromCourse(courseName) {
const dishes = this._courses[courseName];
const randomIndex = Math.floor(Math.random() * dishes.length);
return dishes[randomIndex];
  },

//had issues with dessert.meal typo instead of dessert.name
generateRandomMeal() {
const appetizer = this.getRandomDishFromCourse('appetizers');
const main = this.getRandomDishFromCourse('mains');
const dessert = this.getRandomDishFromCourse('desserts');
const totalPrice = appetizer.price + main.price + dessert.price;
return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is ${totalPrice}.`
}


}


menu.addDishToCourse('appetizers', 'Anchovies on toast', 4.60);
menu.addDishToCourse('appetizers', 'Pumpkin soup', 4.2);
menu.addDishToCourse('appetizers', 'Oysters', 6);
menu.addDishToCourse('mains', 'Rib of beef', 42);
menu.addDishToCourse('mains', 'Tagliatelle al ragu', 16);
menu.addDishToCourse('mains', 'Griddled cornbread and artichokes', 15.5);
menu.addDishToCourse('desserts', 'Tarte tatin', 7);
menu.addDishToCourse('desserts', 'Almond and quince tart', 7.5);
menu.addDishToCourse('desserts', 'Steamed marmalade pudding', 8.5);

//console.log(menu._courses);
//console.log(menu.getRandomDishFromCourse(`appetizers`))

meal = menu.generateRandomMeal();
console.log(meal);
