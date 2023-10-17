import renderer from 'react-test-renderer';
import { onlywrap } from '../../../../utils/test_helper';
import TotalInvestments from '../TotalInvestments';


describe('TotalInvestments Card Testing',()=>{
    test.skip('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<TotalInvestments />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})