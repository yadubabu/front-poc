import renderer from 'react-test-renderer';
import { onlywrap,renderComponent } from '../../utils/test_helper';
import Register from '../Register';
import { AppState } from '../../redux/store';

describe('Register Page Testing',()=>{
    test.skip('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap({component:<Register/>})).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
    test('should auth is false',()=>{
        let {store}=renderComponent({component:<Register/>})
        expect((store.getState() as AppState).auth.auth).toBe(false);  
    })
    test('Heading should be Register',()=>{
      const {findByText}=renderComponent({component:<Register/>})
      expect(findByText(/Register/i)).toMatch;  
    });
    test('Label should be Name',()=>{
        const {findByLabelText}=renderComponent({component:<Register/>})
      expect(findByLabelText(/Name/i)).toMatch;
    });
    test('Label should be Email',()=>{
        const {findByLabelText}=renderComponent({component:<Register/>})
      expect(findByLabelText(/email/i)).toMatch;  
    });
    test('Label should be Password',()=>{
        const {findByLabelText}=renderComponent({component:<Register/>})
      expect(findByLabelText(/password/i)).toMatch;  
    });
    test('Label should be Email',()=>{
        const {findByLabelText}=renderComponent({component:<Register/>})
      expect(findByLabelText(/confirmpassword/i)).toMatch;  
    });
    test('Label should be Email',()=>{
        const {findByLabelText}=renderComponent({component:<Register/>})
      expect(findByLabelText(/pancard/i)).toMatch;  
    });
    test('Label should be Email',()=>{
        const {findByLabelText}=renderComponent({component:<Register/>})
      expect(findByLabelText(/phone/i)).toMatch;  
    });
    test('Input should be with placeholder',()=>{
        const {findByPlaceholderText}=renderComponent({component:<Register/>})
       expect(findByPlaceholderText(/enter your name/i)).toMatch;
    });
    test('Input should be with placeholder',()=>{
        const {findByPlaceholderText}=renderComponent({component:<Register/>})
       expect(findByPlaceholderText(/enter your email/i)).toMatch;
    });
    test('Input should be with placeholder',()=>{
        const {findByPlaceholderText}=renderComponent({component:<Register/>})
       expect(findByPlaceholderText(/enter your password/i)).toMatch;
    });
    test('Input should be with placeholder',()=>{
        const {findByPlaceholderText}=renderComponent({component:<Register/>})
       expect(findByPlaceholderText(/enter your confirmpassword/i)).toMatch;
    });
    test('Input should be with placeholder',()=>{
        const {findByPlaceholderText}=renderComponent({component:<Register/>})
       expect(findByPlaceholderText(/enter your pancard/i)).toMatch;
    });
    test('Input should be with placeholder',()=>{
        const {findByPlaceholderText}=renderComponent({component:<Register/>})
       expect(findByPlaceholderText(/enter your phone/i)).toMatch;
    });
    test('Button should be Register',()=>{
        const {findByRole}=renderComponent({component:<Register/>})
          expect(findByRole('textbox',{name:'Register'})).toBeInTheDocument;  
    });
    test('Display text should be ',()=>{
        const {findByTestId}=renderComponent({component:<Register/>})
      expect(findByTestId('already')).toBeInTheDocument;  
    });
    test('Link text should be ',()=>{
        const {findByRole}=renderComponent({component:<Register/>})
      expect(findByRole('link',{name:/login/i})).toBeInTheDocument;  
    });
})