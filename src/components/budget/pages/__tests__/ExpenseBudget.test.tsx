import renderer from 'react-test-renderer';
import { onlywrap } from '../../../../utils/test_helper';
import ExpenseBudget from '../ExpenseBudget';


describe('ExpenseBudget Testing',()=>{
    test.skip('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<ExpenseBudget />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})