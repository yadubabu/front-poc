import renderer from "react-test-renderer";
import { getAllByText, queryByText, render, screen,waitFor} from "@testing-library/react";
import { onlywrap, renderComponent } from "../../utils/test_helper";
import Login from "../Login";
import React from "react";

describe("Login Page Testing", () => {
  test.skip("SnapShot testing....", () => {
    const wrapper = renderer.create(onlywrap(<Login />)).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  test("should show Login heading", async() => {
   renderComponent(<Login/>)
   const loginButton = screen.findByRole('button',{hidden:true});
  console.log(loginButton);
        });
      test('should auth is false',()=>{
        let {store}=renderComponent(<Login/>)
        expect(store.getState().auth.auth).toBe(false);  
    })
})
