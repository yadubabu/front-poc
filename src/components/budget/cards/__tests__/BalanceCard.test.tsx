import renderer from 'react-test-renderer';
import { onlywrap } from '../../../../utils/test_helper';
import BalanceCard from '../BalanceCard';


describe('BalanceCard Testing',()=>{
    test.skip('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<BalanceCard />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})