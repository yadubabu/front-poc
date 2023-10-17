import renderer from 'react-test-renderer';
import { onlywrap } from '../../utils/test_helper';
import Dashboard from '../Dashboard';


describe('Dashboard  Page Testing',()=>{
    test.skip('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<Dashboard />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})