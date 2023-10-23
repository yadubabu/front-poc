import renderer from 'react-test-renderer';
import { onlywrap } from '../../../utils/test_helper';
import GetMessages from '../Messages';


describe('Messages Testing',()=>{
    test.skip('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<GetMessages />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})