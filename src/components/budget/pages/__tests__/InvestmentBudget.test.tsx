import renderer from 'react-test-renderer';
import { onlywrap } from '../../../../utils/test_helper';
import InvestmentBudget from '../InvestmentBudget';


describe('InvestmentBudget Testing',()=>{
    test.skip('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<InvestmentBudget />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})