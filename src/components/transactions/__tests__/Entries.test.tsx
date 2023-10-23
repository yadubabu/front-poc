import renderer from 'react-test-renderer';
import { onlywrap } from '../../../utils/test_helper';
import Entries from '../Entreis';


describe('Entries Testing',()=>{
    test.skip('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<Entries />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})