import renderer from 'react-test-renderer';
import { onlywrap } from '../../utils/test_helper';
import NavBar from '../NavBar';
import Sidebar from '../Sidebar';


describe('Sidebar Testing',()=>{
    test.skip('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<Sidebar />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})