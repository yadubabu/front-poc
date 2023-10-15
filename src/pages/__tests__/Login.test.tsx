import renderer from 'react-test-renderer';
import { onlywrap } from '../../utils/test_helper';
import Login from '../Login';


describe('Login Page Testing',()=>{
    test('SnapShot testing....',()=>{
        const wrapper=renderer.create(<Login/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    })
})