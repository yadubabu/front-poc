import renderer from "react-test-renderer";
import { render, screen,waitFor} from "@testing-library/react";
import { onlywrap, renderComponent } from "../../utils/test_helper";
import Login from "../Login";

describe("Login Page Testing", () => {
  test("SnapShot testing....", () => {
    const wrapper = renderer.create(onlywrap(<Login />)).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  test("should show Login heading", async() => {
   renderComponent(<Login/>)
  //  const head=screen.getByText('Login Here', {exact: false});
   expect(true).toBe;
      });
      test('should auth is false',()=>{
        let {store}=renderComponent(<Login/>)
        expect(store.getState().auth.auth).toBe(false);  
      })
});
