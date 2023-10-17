import renderer from 'react-test-renderer';
import { onlywrap } from '../../utils/test_helper';
import FAQ from '../FAQ';


describe('FAQ  Page Testing',()=>{
    test.skip('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<FAQ />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})