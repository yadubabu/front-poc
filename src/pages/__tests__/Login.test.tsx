import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import { onlywrap, renderComponent } from "../../utils/test_helper";
import Login from "../Login";

describe("Login Page Testing", () => {
  test("SnapShot testing....", () => {
    const wrapper = renderer.create(onlywrap(<Login />)).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  test("should show Login heading", () => {
    const wrapper=renderComponent(<Login />);
    console.log(wrapper.getAllByText);
    
    //   const value = wrapper.getAllByText(/Login/i);
    // expect(value).toBe;
  });
});
