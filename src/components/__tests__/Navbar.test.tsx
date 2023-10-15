import renderer from 'react-test-renderer';
import { onlywrap } from '../../utils/test_helper';
import NavBar from '../NavBar';


describe('Navbar Testing',()=>{
    test('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<NavBar />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})