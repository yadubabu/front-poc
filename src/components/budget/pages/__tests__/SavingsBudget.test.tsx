import renderer from 'react-test-renderer';
import { onlywrap } from '../../../../utils/test_helper';
import SavingsBudget from '../SavingsBudget';


describe('SavingsBudget Testing',()=>{
    test.skip('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<SavingsBudget />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})