// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//isPhoneNumber
test('858-955-4422 is a valid phone number', () => {
  expect(isPhoneNumber("858-955-4422")).toBe(true);
});

test('858-944-8765 is a valid phone number', () => {
  expect(isPhoneNumber("858-944-8765")).toBe(true);
});

test('8589554422 is NOT a valid phone number', () => {
  expect(isPhoneNumber("8589554422")).toBe(false);
});

test('8589448765 is NOT a valid phone number', () => {
  expect(isPhoneNumber("8589448765")).toBe(false);
});

//isEmail
test('hello@gmail.com is a valid email', () => {
  expect(isEmail("hello@gmail.com")).toBe(true);
});

test('goodbye@gmail.com is a valid email', () => {
  expect(isEmail("goodbye@gmail.com")).toBe(true);
});

test('red&gmail.com is NOT a valid email', () => {
  expect(isEmail("red&gmail.com")).toBe(false);
});

test('green@gmail is NOT a valid email', () => {
  expect(isEmail("green@gmail")).toBe(false);
});

//isStrongPassword
test('a123efehw is a strong password', () => {
  expect(isStrongPassword("a123efehw")).toBe(true);
});

test('"b1_4367dw is a strong password', () => {
  expect(isStrongPassword("b1_4367dw")).toBe(true);
});

test('145563 is NOT a strong password', () => {
  expect(isStrongPassword("145563")).toBe(false);
});

test('145563 is NOT a strong password', () => {
  expect(isStrongPassword("246")).toBe(false);
});

//isDate
test('16/11/2025 is a valid date', () => {
  expect(isDate("16/08/2025")).toBe(true);
});

test('8/8/2025 is a valid date', () => {
  expect(isDate("8/8/2025")).toBe(true);
});

test('111/2/2025 is NOT a valid date', () => {
  expect(isDate("111/2/2025")).toBe(false);
});

test('11/2/20254 is NOT a valid date', () => {
  expect(isDate("11/2/20254")).toBe(false);
});

//isHexColor
test('#ff0000 is a hex color', () => {
  expect(isHexColor("#ff0000")).toBe(true);
});

test('#3cb371 is a valid hex color', () => {
  expect(isHexColor("#3cb371")).toBe(true);
});

test('#3cb37145 is NOT a valid hex color', () => {
  expect(isHexColor("#3cb37145")).toBe(false);
});

test('3cb47 is NOT a valid hex color', () => {
  expect(isHexColor("3cb47")).toBe(false);
});