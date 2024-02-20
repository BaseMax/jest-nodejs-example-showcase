// test('the best flavor is grapefruit', () => {
//   expect(bestLaCroixFlavor()).toBe('grapefruit');
// });

// test('the best flavor is not coconut', () => {
//   expect(bestLaCroixFlavor()).not.toBe('coconut');
// });

// const can = {
//   name: 'pamplemousse',
//   ounces: 12,
// };

// describe('the can', () => {
//   test('has 12 ounces', () => {
//     expect(can.ounces).toBe(12);
//   });

//   test('has a sophisticated name', () => {
//     expect(can.name).toBe('pamplemousse');
//   });
// });

// function drinkAll(callback, flavour) {
//   if (flavour !== 'octopus') {
//     callback(flavour);
//   }
// }

// describe('drinkAll', () => {
//   test('drinks something lemon-flavoured', () => {
//     const drink = jest.fn();
//     drinkAll(drink, 'lemon');
//     expect(drink).toHaveBeenCalled();
//   });

//   test('does not drink something octopus-flavoured', () => {
//     const drink = jest.fn();
//     drinkAll(drink, 'octopus');
//     expect(drink).not.toHaveBeenCalled();
//   });
// });

// test('drinkEach drinks each drink', () => {
//   const drink = jest.fn();
//   drinkEach(drink, ['lemon', 'octopus']);
//   expect(drink).toHaveBeenCalledTimes(2);
// });

// test('registration applies correctly to orange La Croix', () => {
//   const beverage = new LaCroix('orange');
//   register(beverage);
//   const f = jest.fn();
//   applyToAll(f);
//   expect(f).toHaveBeenCalledWith(beverage);
// });

// test('applying to all flavors does mango last', () => {
//   const drink = jest.fn();
//   applyToAllFlavors(drink);
//   expect(drink).toHaveBeenLastCalledWith('mango');
// });

// test('drinkEach drinks each drink', () => {
//   const drink = jest.fn();
//   drinkEach(drink, ['lemon', 'octopus']);
//   expect(drink).toHaveBeenNthCalledWith(1, 'lemon');
//   expect(drink).toHaveBeenNthCalledWith(2, 'octopus');
// });

// test('drinks returns', () => {
//   const drink = jest.fn(() => true);

//   drink();

//   expect(drink).toHaveReturned();
// });

// test('drink returns twice', () => {
//   const drink = jest.fn(() => true);

//   drink();
//   drink();

//   expect(drink).toHaveReturnedTimes(2);
// });

// test('drink returns La Croix', () => {
//   const beverage = {name: 'La Croix'};
//   const drink = jest.fn(beverage => beverage.name);

//   drink(beverage);

//   expect(drink).toHaveReturnedWith('La Croix');
// });

// test('drink returns La Croix (Orange) last', () => {
//   const beverage1 = {name: 'La Croix (Lemon)'};
//   const beverage2 = {name: 'La Croix (Orange)'};
//   const drink = jest.fn(beverage => beverage.name);

//   drink(beverage1);
//   drink(beverage2);

//   expect(drink).toHaveLastReturnedWith('La Croix (Orange)');
// });

// test('drink returns expected nth calls', () => {
//   const beverage1 = {name: 'La Croix (Lemon)'};
//   const beverage2 = {name: 'La Croix (Orange)'};
//   const drink = jest.fn(beverage => beverage.name);

//   drink(beverage1);
//   drink(beverage2);

//   expect(drink).toHaveNthReturnedWith(1, 'La Croix (Lemon)');
//   expect(drink).toHaveNthReturnedWith(2, 'La Croix (Orange)');
// });

// expect([1, 2, 3]).toHaveLength(3);
// expect('abc').toHaveLength(3);
// expect('').not.toHaveLength(5);

// // Object containing house features to be tested
// const houseForSale = {
//   bath: true,
//   bedrooms: 4,
//   kitchen: {
//     amenities: ['oven', 'stove', 'washer'],
//     area: 20,
//     wallColor: 'white',
//     'nice.oven': true,
//   },
//   livingroom: {
//     amenities: [
//       {
//         couch: [
//           ['large', {dimensions: [20, 20]}],
//           ['small', {dimensions: [10, 10]}],
//         ],
//       },
//     ],
//   },
//   'ceiling.height': 2,
// };

// test('this house has my desired features', () => {
//   // Example Referencing
//   expect(houseForSale).toHaveProperty('bath');
//   expect(houseForSale).toHaveProperty('bedrooms', 4);

//   expect(houseForSale).not.toHaveProperty('pool');

//   // Deep referencing using dot notation
//   expect(houseForSale).toHaveProperty('kitchen.area', 20);
//   expect(houseForSale).toHaveProperty('kitchen.amenities', [
//     'oven',
//     'stove',
//     'washer',
//   ]);

//   expect(houseForSale).not.toHaveProperty('kitchen.open');

//   // Deep referencing using an array containing the keyPath
//   expect(houseForSale).toHaveProperty(['kitchen', 'area'], 20);
//   expect(houseForSale).toHaveProperty(
//     ['kitchen', 'amenities'],
//     ['oven', 'stove', 'washer'],
//   );
//   expect(houseForSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven');
//   expect(houseForSale).toHaveProperty(
//     'livingroom.amenities[0].couch[0][1].dimensions[0]',
//     20,
//   );
//   expect(houseForSale).toHaveProperty(['kitchen', 'nice.oven']);
//   expect(houseForSale).not.toHaveProperty(['kitchen', 'open']);

//   // Referencing keys with dot in the key itself
//   expect(houseForSale).toHaveProperty(['ceiling.height'], 'tall');
// });

// test('adding works sanely with decimals', () => {
//   expect(0.2 + 0.1).toBe(0.3); // Fails!
// });

// test('adding works sanely with decimals', () => {
//   expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
// });

// test('there is a new flavor idea', () => {
//   expect(fetchNewFlavorIdea()).toBeDefined();
// });

// test('drinking La Croix does not lead to errors', () => {
//   drinkSomeLaCroix();
//   expect(getErrors()).toBeFalsy();
// });

// test('ounces per can is more than 10', () => {
//   expect(ouncesPerCan()).toBeGreaterThan(10);
// });


// test('ounces per can is at least 12', () => {
//   expect(ouncesPerCan()).toBeGreaterThanOrEqual(12);
// });

// test('ounces per can is less than 20', () => {
//   expect(ouncesPerCan()).toBeLessThan(20);
// });

// test('ounces per can is at most 12', () => {
//   expect(ouncesPerCan()).toBeLessThanOrEqual(12);
// });

// class A {}

// expect(new A()).toBeInstanceOf(A);
// expect(() => {}).toBeInstanceOf(Function);
// // expect(new A()).toBeInstanceOf(Function); // throws

// function bloop() {
//   return null;
// }

// test('bloop returns null', () => {
//   expect(bloop()).toBeNull();
// });

// test('drinking La Croix leads to having thirst info', () => {
//   drinkSomeLaCroix();
//   expect(thirstInfo()).toBeTruthy();
// });

// test('the best drink for octopus flavor is undefined', () => {
//   expect(bestDrinkForFlavor('octopus')).toBeUndefined();
// });

// test('passes when value is NaN', () => {
//   expect(NaN).toBeNaN();
//   expect(1).not.toBeNaN();
// });

// test('the flavor list contains lime', () => {
//   expect(getAllFlavors()).toContain('lime');
// });

// describe('my beverage', () => {
//   test('is delicious and not sour', () => {
//     const myBeverage = {delicious: true, sour: false};
//     expect(myBeverages()).toContainEqual(myBeverage);
//   });
// });

// const can1 = {
//   flavor: 'grapefruit',
//   ounces: 12,
// };
// const can2 = {
//   flavor: 'grapefruit',
//   ounces: 12,
// };

// describe('the La Croix cans on my desk', () => {
//   test('have all the same properties', () => {
//     expect(can1).toEqual(can2);
//   });
//   test('are not the exact same can', () => {
//     expect(can1).not.toBe(can2);
//   });
// });

// describe('an essay on the best flavor', () => {
//   test('mentions grapefruit', () => {
//     expect(essayOnTheBestFlavor()).toMatch(/grapefruit/);
//     expect(essayOnTheBestFlavor()).toMatch(new RegExp('grapefruit'));
//   });
// });

// describe('grapefruits are healthy', () => {
//   test('grapefruits are a fruit', () => {
//     expect('grapefruits').toMatch('fruit');
//   });
// });

// const houseForSale = {
//   bath: true,
//   bedrooms: 4,
//   kitchen: {
//     amenities: ['oven', 'stove', 'washer'],
//     area: 20,
//     wallColor: 'white',
//   },
// };
// const desiredHouse = {
//   bath: true,
//   kitchen: {
//     amenities: ['oven', 'stove', 'washer'],
//     wallColor: expect.stringMatching(/white|yellow/),
//   },
// };

// test('the house has my desired features', () => {
//   expect(houseForSale).toMatchObject(desiredHouse);
// });


// describe('toMatchObject applied to arrays', () => {
//   test('the number of elements must match exactly', () => {
//     expect([{foo: 'bar'}, {baz: 1}]).toMatchObject([{foo: 'bar'}, {baz: 1}]);
//   });

//   test('.toMatchObject is called for each elements, so extra object properties are okay', () => {
//     expect([{foo: 'bar'}, {baz: 1, extra: 'quux'}]).toMatchObject([
//       {foo: 'bar'},
//       {baz: 1},
//     ]);
//   });
// });


// class LaCroix {
//   constructor(flavor) {
//     this.flavor = flavor;
//   }
// }

// describe('the La Croix cans on my desk', () => {
//   test('are not semantically the same', () => {
//     expect(new LaCroix('lemon')).toEqual({flavor: 'lemon'});
//     expect(new LaCroix('lemon')).not.toStrictEqual({flavor: 'lemon'});
//   });
// });

// test('throws on octopus', () => {
//   expect(() => {
//     drinkFlavor('octopus');
//   }).toThrow();
// });

// describe('Math operations', () => {
//   test('adds two numbers', () => {
//     expect(1 + 2).toBe(3);
//   });

//   test('multiplies two numbers', () => {
//     expect(2 * 3).toBe(6);
//   });
// });

// describe('Math operations', () => {
//   test('adds two numbers', () => {
//     expect(1 + 2).toBe(3);
//   });

//   test('multiplies two numbers', () => {
//     expect(2 * 3).toBe(6);
//   });

//   describe('Subtraction', () => {
//     test('subtracts two numbers', () => {
//       expect(5 - 3).toBe(2);
//     });
//   });
// });

// test('throws on octopus', () => {
//   function drinkOctopus() {
//     drinkFlavor('octopus');
//   }

//   // Test that the error message says "yuck" somewhere: these are equivalent
//   expect(drinkOctopus).toThrow(/yuck/);
//   expect(drinkOctopus).toThrow('yuck');

//   // Test the exact error message
//   expect(drinkOctopus).toThrow(/^yuck, octopus flavor$/);
//   expect(drinkOctopus).toThrow(new Error('yuck, octopus flavor'));

//   // Test that we get a DisgustingFlavorError
//   expect(drinkOctopus).toThrow(DisgustingFlavorError);
// });


// test('throws on octopus', () => {
//   function drinkOctopus() {
//     drinkFlavor('octopus');
//   }

//   expect(drinkOctopus).toThrowErrorMatchingSnapshot();
// });

// test('map calls its argument with a non-null argument', () => {
//   const mock = jest.fn();
//   [1].map(x => mock(x));
//   expect(mock).toHaveBeenCalledWith(expect.anything());
// });

// class Cat {}
// function getCat(fn) {
//   return fn(new Cat());
// }

// test('randocall calls its callback with a class instance', () => {
//   const mock = jest.fn();
//   getCat(mock);
//   expect(mock).toHaveBeenCalledWith(expect.any(Cat));
// });

// function randocall(fn) {
//   return fn(Math.floor(Math.random() * 6 + 1));
// }

// test('randocall calls its callback with a number', () => {
//   const mock = jest.fn();
//   randocall(mock);
//   expect(mock).toHaveBeenCalledWith(expect.any(Number));
// });

// describe('arrayContaining', () => {
//   const expected = ['Alice', 'Bob'];
//   it('matches even if received contains additional elements', () => {
//     expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
//   });
//   it('does not match if received does not contain expected elements', () => {
//     expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
//   });
// });


// describe('Beware of a misunderstanding! A sequence of dice rolls', () => {
//   const expected = [1, 2, 3, 4, 5, 6];
//   it('matches even with an unexpected number 7', () => {
//     expect([4, 1, 6, 7, 3, 5, 2, 5, 4, 6]).toEqual(
//       expect.arrayContaining(expected),
//     );
//   });
//   it('does not match without an expected number 2', () => {
//     expect([4, 1, 6, 7, 3, 5, 7, 5, 4, 6]).not.toEqual(
//       expect.arrayContaining(expected),
//     );
//   });
// });

// describe('not.arrayContaining', () => {
//   const expected = ['Samantha'];

//   it('matches if the actual array does not contain the expected elements', () => {
//     expect(['Alice', 'Bob', 'Eve']).toEqual(
//       expect.not.arrayContaining(expected),
//     );
//   });
// });

// test('compare float in object properties', () => {
//   expect({
//     title: '0.1 + 0.2',
//     sum: 0.1 + 0.2,
//   }).toEqual({
//     title: '0.1 + 0.2',
//     sum: expect.closeTo(0.3, 5),
//   });
// });

// test('onPress gets called with the right thing', () => {
//   const onPress = jest.fn();
//   simulatePresses(onPress);
//   expect(onPress).toHaveBeenCalledWith(
//     expect.objectContaining({
//       x: expect.any(Number),
//       y: expect.any(Number),
//     }),
//   );
// });

// describe('not.objectContaining', () => {
//   const expected = {foo: 'bar'};

//   it('matches if the actual object does not contain expected key: value pairs', () => {
//     expect({bar: 'baz'}).toEqual(expect.not.objectContaining(expected));
//   });
// });


// describe('not.stringContaining', () => {
//   const expected = 'Hello world!';

//   it('matches if the received value does not contain the expected substring', () => {
//     expect('How are you?').toEqual(expect.not.stringContaining(expected));
//   });
// });


// describe('stringMatching in arrayContaining', () => {
//   const expected = [
//     expect.stringMatching(/^Alic/),
//     expect.stringMatching(/^[BR]ob/),
//   ];
//   it('matches even if received contains additional elements', () => {
//     expect(['Alicia', 'Roberto', 'Evelina']).toEqual(
//       expect.arrayContaining(expected),
//     );
//   });
//   it('does not match if received does not contain expected elements', () => {
//     expect(['Roberto', 'Evelina']).not.toEqual(
//       expect.arrayContaining(expected),
//     );
//   });
// });


// describe('not.stringMatching', () => {
//   const expected = /Hello world!/;

//   it('matches if the received value does not match the expected regex', () => {
//     expect('How are you?').toEqual(expect.not.stringMatching(expected));
//   });
// });


// test('doAsync calls both callbacks', () => {
//   expect.assertions(2);
//   function callback1(data) {
//     expect(data).toBeTruthy();
//   }
//   function callback2(data) {
//     expect(data).toBeTruthy();
//   }

//   doAsync(callback1, callback2);
// });

// test('prepareState prepares a valid state', () => {
//   expect.hasAssertions();
//   prepareState(state => {
//     expect(validateState(state)).toBeTruthy();
//   });
//   return waitOnState();
// });

// import {expect} from '@jest/globals';

// function toBeWithinRange(actual, floor, ceiling) {
//   if (
//     typeof actual !== 'number' ||
//     typeof floor !== 'number' ||
//     typeof ceiling !== 'number'
//   ) {
//     throw new TypeError('These must be of type number!');
//   }

//   const pass = actual >= floor && actual <= ceiling;
//   if (pass) {
//     return {
//       message: () =>
//         `expected ${this.utils.printReceived(
//           actual,
//         )} not to be within range ${this.utils.printExpected(
//           `${floor} - ${ceiling}`,
//         )}`,
//       pass: true,
//     };
//   } else {
//     return {
//       message: () =>
//         `expected ${this.utils.printReceived(
//           actual,
//         )} to be within range ${this.utils.printExpected(
//           `${floor} - ${ceiling}`,
//         )}`,
//       pass: false,
//     };
//   }
// }

// expect.extend({
//   toBeWithinRange,
// });
