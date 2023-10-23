import renderer from 'react-test-renderer';
import { onlywrap } from '../../../utils/test_helper';
import TransactionsTracker from '../TransactionsTracker';


describe('TransactionsTracker Testing',()=>{
    test.skip('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<TransactionsTracker />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})