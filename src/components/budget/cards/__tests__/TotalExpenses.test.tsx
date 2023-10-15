import renderer from 'react-test-renderer';
import { onlywrap } from '../../../../utils/test_helper';
import TotalExpenses from '../TotalExpenses';


describe('TotalExpenses Card Testing',()=>{
    test('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<TotalExpenses />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})