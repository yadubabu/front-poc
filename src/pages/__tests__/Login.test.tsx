import renderer from "react-test-renderer";
import { getAllByText, queryByText, render, screen,waitFor} from "@testing-library/react";
import { onlywrap, renderComponent } from "../../utils/test_helper";
import Login from "../Login";
import React from "react";
import { AppState } from "../../redux/store";

describe("Login Page Testing", () => {
  test.skip("SnapShot testing....", () => {
    const wrapper = renderer.create(onlywrap({component:<Login/>})).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('should auth is false',()=>{
    let {store}=renderComponent({component:<Login/>})
    expect((store.getState() as AppState).auth.auth).toBe(false);  

})
test('Heading should be',()=>{
  onlywrap({component:<Login/>});
  const head=screen.findByText('Login');
  expect(head).toBeInTheDocument;  

})
});
 