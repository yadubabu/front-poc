import renderer from 'react-test-renderer';
import { onlywrap } from '../../../utils/test_helper';
import TransactionsHistory from '../TransactionsHistory';


describe('TransactionsHistory Testing',()=>{
    test.skip('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<TransactionsHistory />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})