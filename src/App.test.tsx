import renderer from 'react-test-renderer';
import { onlywrap } from './utils/test_helper';
import App from './App';


describe('App Component Testing',()=>{
    // expect(true).toBe(true)
    test.skip('SnapShot testing....',()=>{
        const childEle=onlywrap({component:<App/>});
        expect(childEle).toMatchSnapshot();
    });
})