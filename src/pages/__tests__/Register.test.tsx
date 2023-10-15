import renderer from 'react-test-renderer';
import { onlywrap } from '../../utils/test_helper';
import Register from '../Register';


describe('Register Page Testing',()=>{
    test('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<Register />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})