import renderer from 'react-test-renderer';
import { onlywrap } from '../../../utils/test_helper';
import MainFooter from '../MainFooter';


describe('MainFooter Testing',()=>{
    test('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<MainFooter />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})