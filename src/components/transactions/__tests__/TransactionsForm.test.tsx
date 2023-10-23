import renderer from 'react-test-renderer';
import { onlywrap } from '../../../utils/test_helper';
import TransactionsForm from '../TransactionsForm';


describe('TransactionsForm Testing',()=>{
    test.skip('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<TransactionsForm />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})