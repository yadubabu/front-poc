import renderer from "react-test-renderer";
import { getAllByText, queryByText, render, screen,waitFor} from "@testing-library/react";
import { onlywrap, renderComponent } from "../../utils/test_helper";
import Login from "../Login";
import React from "react";
import axios from "axios";
import { AppState } from "../../redux/store";
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
  expect(loginBtn).toBeInTheDocument;  
});
test('Display text should be ',()=>{
  onlywrap({component:<Login/>});
  const accountText=screen.findByTestId('dontAccount');
  expect(accountText).toBeInTheDocument;  
});
test('Link text should be ',()=>{
  onlywrap({component:<Login/>});
  const linkItem=screen.findByRole('link',{name:/register/i});
  expect(linkItem).toBeInTheDocument;  
});
test('Form Submit Testing...',async ()=>{
  // const data={
  //   msg:'Successfully Login',
  //   name:'Sample',
  //   email:'sample@123.com'
  // }
  // sessionStorage.setItem("data", JSON.stringify(data));
  // const resp=JSON.parse(sessionStorage.getItem("data") || "{}");
  // console.log(resp.msg);
  
  // mockedAxios.get.mockResolvedValue(resp)
  // const getUser=await submitHandle(data);
  // console.log(getUser);
  
  //  expect('Successfully Login').toBe(resp.msg)
  
})

});


function submitHandle(data: { msg: string; name: string; email: string; }) {
  throw new Error("Function not implemented.");
}

