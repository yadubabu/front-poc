import renderer from 'react-test-renderer';
import { onlywrap } from '../../../../utils/test_helper';
import SetBudget from '../SetBudget';


describe('SetBudget Testing',()=>{
    test.skip('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<SetBudget />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})