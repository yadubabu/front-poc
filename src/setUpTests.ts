// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
configure({ adapter: new Adapter() });

module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
	// You can add other Jest options here as needed.
    "setupFilesAfterEnv": ["/src/setUpTests.ts"]
  };
// import {server} from './mocks/server';

// beforeAll(()=>server.listen({
// 	onUnhandledRequest:'error'
// }))

// afterEach(()=>server.resetHandlers());

// afterAll(()=>server.close())