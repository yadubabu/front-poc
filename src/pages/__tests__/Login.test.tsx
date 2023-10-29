import renderer from "react-test-renderer";
import { getAllByText, queryByText, render, screen,waitFor} from "@testing-library/react";
import { onlywrap, renderComponent } from "../../utils/test_helper";
import Login from "../Login";
import React from "react";
import axios from "axios";
import { AppState } from "../../redux/store";
import debug from "debug";
jest.mock('axios');
const mockedAxios=axios as jest.Mocked<typeof axios>
axios.create=jest.fn(()=>mockedAxios);
interface Data{
  msg:string,
  name:string,
  email:string,
}
describe("Login Page Testing", () => {
  test.skip("SnapShot testing....", () => {
    const wrapper = renderer.create(onlywrap({component:<Login/>})).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('should auth is false',()=>{
    let {store}=renderComponent({component:<Login/>})
    expect((store.getState() as AppState).auth.auth).toBe(false);  
})
test('Heading should be Login',()=>{
  onlywrap({component:<Login/>});
  const head=screen.findByText(/login/i);
  expect(head).toMatch;  
});
test('Label should be Email',()=>{
  onlywrap({component:<Login/>});
  const labelText=screen.findByLabelText(/email/i);
  expect(labelText).toMatch;  
});
test('Label should be Password',()=>{
  onlywrap({component:<Login/>});
  const labelText=screen.findByLabelText(/password/i);
  expect(labelText).toMatch;  
});
test('Input should be with placeholder',()=>{
  onlywrap({component:<Login/>});
  const inputPlace=screen.findByPlaceholderText(/enter your email/i);
  expect(inputPlace).toMatch;  
});
test('Input should be with placeholder',()=>{
  onlywrap({component:<Login/>});
  const inputPlace=screen.findByPlaceholderText(/enter your password/i);
  expect(inputPlace).toMatch;  
});
test('Button should be Login',()=>{
  onlywrap({component:<Login/>});
  const loginBtn=screen.findByRole('textbox',{name:'Login'});
  expect(loginBtn).toBe;  
});
test('Display text should be ',()=>{
  onlywrap({component:<Login/>});
  const accountText=screen.findByTestId('dontAccount');
  expect(accountText).toBe;  
});
test('Link text should be ',()=>{
  onlywrap({component:<Login/>});
  const linkItem=screen.findByRole('link',{name:/register/i});
  expect(linkItem).toBe;  
});
test('Form Submit Testing...',async ()=>{
  const {findByPlaceholderText}=renderComponent({component:<Login />})
       expect(await findByPlaceholderText(/enter your email/i)).toBe;
  
})

});




