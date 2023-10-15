import renderer from 'react-test-renderer';
import { onlywrap } from '../../../../utils/test_helper';
import TotalSavings from '../TotalSavings';


describe('TotalSavings Card Testing',()=>{
    test('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<TotalSavings />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})