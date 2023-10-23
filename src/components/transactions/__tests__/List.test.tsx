import renderer from 'react-test-renderer';
import { onlywrap } from '../../../utils/test_helper';
import List from '../List';


describe('List Testing',()=>{
    test.skip('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<List />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})