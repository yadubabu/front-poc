import renderer from 'react-test-renderer';
import { onlywrap } from '../../../../utils/test_helper';
import TotalIncomes from '../TotalIncomes';


describe('TotalIncomes Card Testing',()=>{
    test('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<TotalIncomes />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})