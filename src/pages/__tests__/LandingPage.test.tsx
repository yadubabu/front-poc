import renderer from 'react-test-renderer';
import { onlywrap } from '../../utils/test_helper';
import LandingPage from '../LandingPage';


describe('LandingPage  Page Testing',()=>{
    test.skip('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<LandingPage />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})