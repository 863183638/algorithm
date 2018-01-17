import bubbleSort from './bubbleSort';
import selectSort from './selectSort';
import insertSort from './insertSort';
import mergeSort from './mergeSort';
import quickSort from './quickSort';

const arr1 = [3,2,4,5,1,8,6,9,12,11,10];
const expect1 = [1,2,3,4,5,6,8,9,10,11,12];

const arr2 = [69,212,35,678,432,32,1,8,76];
const expect2 = [1, 8, 32, 35, 69, 76, 212, 432, 678];

test('bubbleSort',() => {
    expect(bubbleSort(arr1)).toEqual(expect1);
    expect(bubbleSort(arr2)).toEqual(expect2);
})

test('selectSort',() => {
    expect(selectSort(arr1)).toEqual(expect1);
    expect(selectSort(arr2)).toEqual(expect2);
})

test('insertSort',() => {
    expect(insertSort(arr1)).toEqual(expect1);
    expect(insertSort(arr2)).toEqual(expect2);
})

test('mergeSort',() => {
    expect(mergeSort(arr1)).toEqual(expect1);
    expect(mergeSort(arr2)).toEqual(expect2);
})

test('quickSort',() => {
    expect(quickSort(arr1)).toEqual(expect1);
    expect(quickSort(arr2)).toEqual(expect2);
})