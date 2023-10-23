import renderer from 'react-test-renderer';
import { onlywrap } from '../../utils/test_helper';
import Slider from '../Slider';


describe('Slider Testing',()=>{
    test.skip('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<Slider />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})