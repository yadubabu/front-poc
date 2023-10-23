import renderer from 'react-test-renderer';
import { onlywrap } from '../../../utils/test_helper';
import DoughnutShow from '../DoughnutShow';


describe('DoughnutShow Testing',()=>{
    test.skip('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<DoughnutShow />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})