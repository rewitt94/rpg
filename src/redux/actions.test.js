// import {
//   addItem,
//   removeItem,
//   changeQuantity,
//   incrementItem,
//   clearBasket
// } from './actions'
//
// describe('actions', () => {
//
//   it('#addItem returns the expected action', () => {
//     const expectedAction = {
//       type: 'ADD_ITEM',
//       product: 'Apple Juice',
//       price: 2.2
//     }
//     expect(addItem('Apple Juice', 2.2)).toEqual(expectedAction)
//   });
//
//   it('#removeItem returns the expected action', () => {
//     const expectedAction = {
//         type: 'REMOVE_ITEM',
//         index: 3
//       }
//     expect(removeItem(3)).toEqual(expectedAction)
//   });
//
//   it('#changeQuantity returns the expected action', () => {
//     const expectedAction = {
//       type: 'CHANGE_QUANTITY',
//       index: 3,
//       quantity: 6
//     }
//     expect(changeQuantity(3,6)).toEqual(expectedAction)
//   });
//
//   it('#changeQuantity returns the expected action', () => {
//     const expectedAction = {
//       type: 'INCREMENT_ITEM',
//       index: 4
//     }
//     expect(incrementItem(4)).toEqual(expectedAction)
//   });
//
//   it('#changeQuantity returns the expected action', () => {
//     const expectedAction = {
//       type: 'CLEAR_BASKET'
//     }
//     expect(clearBasket()).toEqual(expectedAction)
//   });
//
// });
