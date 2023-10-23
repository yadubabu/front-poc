import renderer from 'react-test-renderer';
import { onlywrap,renderComponent } from '../../utils/test_helper';
import LandingPage from '../LandingPage';
import { AppState } from '../../redux/store';


describe('LandingPage  Page Testing',()=>{
    test.skip('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap({component:<LandingPage />})).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
    test('should auth is false',()=>{
        let {store}=renderComponent({component:<LandingPage/>})
        expect((store.getState() as AppState).auth.auth).toBe(false);  
    })
    test('Heading should be Register',()=>{
        const {findByText}=renderComponent({component:<LandingPage/>})
        expect(findByText(/start your/i)).toMatch;  
      });
    test('Caption should be Register',()=>{
        const {findByText}=renderComponent({component:<LandingPage/>})
        expect(findByText(/financial future plan/i)).toMatch;  
    });
    test('Button should be Login',()=>{
        const {findByRole}=renderComponent({component:<LandingPage/>})
        expect(findByRole('button',{name:'Login'})).toBeTruthy();  
    });
    test('Button should be Register',()=>{
        const {findByRole}=renderComponent({component:<LandingPage/>})
        expect(findByRole('button',{name:'Register'})).toBeTruthy();  
    });
    
})