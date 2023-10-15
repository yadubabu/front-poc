import renderer from 'react-test-renderer';
import { onlywrap } from '../../utils/test_helper';
import About from '../About';


describe('About Page Testing',()=>{
    test('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<About/>)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})