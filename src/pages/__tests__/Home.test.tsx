import renderer from 'react-test-renderer';
import { onlywrap } from '../../utils/test_helper';
import Login from '../Login';
import Home from '../Home';


describe('Home  Page Testing',()=>{
    test.skip('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<Home />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});