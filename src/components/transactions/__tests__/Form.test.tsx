import renderer from 'react-test-renderer';
import { onlywrap } from '../../../utils/test_helper';
import Form from '../Form';


describe('Form Testing',()=>{
    test.skip('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<Form />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})