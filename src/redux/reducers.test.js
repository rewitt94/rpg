// import { reducer } from './reducers'
//
// describe('basket reducer', () => {
//
//   it('initial basket is an empty array', () => {
//     expect(reducer(undefined, {}).basket).toEqual([])
//   });
//
//   it('ADD_ITEM to Basket', () => {
//     expect(reducer(
//       {},
//       {
//         type: 'ADD_ITEM',
//         product: 'hello',
//         price: 1000
//       }
//     ).basket).toEqual(
//       [
//         {
//           product: 'hello',
//           price: 1000,
//           quantity: 1
//         }
//       ]
//     )
//   });
//
//   it('ADD_ITEM cannot add the same item twice', () => {
//     expect(reducer(
//       {
//         basket: [
//           {
//             product: 'hello',
//             price: 1000,
//             quantity: 1
//           }
//         ]
//       },
//       {
//         type: 'ADD_ITEM',
//         product: 'hello',
//         price: 1000
//       }
//     ).basket).toEqual(
//       [
//         {
//           product: 'hello',
//           price: 1000,
//           quantity: 1
//         }
//       ]
//     )
//   });
//
//   it('REMOVE_ITEM from basket', () => {
//     expect(reducer(
//       {
//         basket: [
//           {
//             product: 'hello',
//             price: 10,
//             quantity: 50
//           },
//           {
//             product: 'world',
//             price: 20000,
//             quantity: 1
//           }
//         ]
//       },
//       {
//         type: 'REMOVE_ITEM',
//         index: 1
//       }
//     ).basket).toEqual(
//       [
//         {
//           product: 'hello',
//           price: 10,
//           quantity: 50
//         }
//       ]
//     )
//   });
//
//   it('CHANGE_QUANTITY of item in basket', () => {
//     expect(reducer(
//       {
//         basket: [
//           {
//             product: 'hello',
//             price: 10,
//             quantity: 50
//           },
//           {
//             product: 'world',
//             price: 20000,
//             quantity: 1
//           }
//         ]
//       },
//       {
//         type: 'CHANGE_QUANTITY',
//         index: 1,
//         quantity: 1000
//       }
//     ).basket).toEqual(
//       [
//         {
//           product: 'hello',
//           price: 10,
//           quantity: 50
//         },
//         {
//           product: 'world',
//           price: 20000,
//           quantity: 1000
//         }
//       ]
//     )
//   });
//
//   it('INCREMENT_ITEM in basket', () => {
//     expect(reducer(
//       {
//         basket: [
//           {
//             product: 'hello',
//             price: 10,
//             quantity: 50
//           },
//           {
//             product: 'world',
//             price: 20000,
//             quantity: 1
//           }
//         ]
//       },
//       {
//         type: 'INCREMENT_ITEM',
//         index: 0,
//       }
//     ).basket).toEqual(
//       [
//         {
//           product: 'hello',
//           price: 10,
//           quantity: 51
//         },
//         {
//           product: 'world',
//           price: 20000,
//           quantity: 1
//         }
//       ]
//     )
//   });
//
//   it('CLEAR_BASKET removes all items', () => {
//     expect(reducer(
//       {
//         basket: [
//           {
//             product: 'hello',
//             price: 10,
//             quantity: 50
//           },
//           {
//             product: 'world',
//             price: 20000,
//             quantity: 1
//           }
//         ]
//       },
//       {
//         type: 'CLEAR_BASKET'
//       }
//     ).basket).toEqual(
//       []
//     )
//   });
//
//
// });
