import renderer from 'react-test-renderer';
import { onlywrap } from '../../../utils/test_helper';
import MainHead from '../MainHead';


describe('MainHead Testing',()=>{
    test('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<MainHead />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})