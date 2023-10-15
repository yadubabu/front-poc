import renderer from 'react-test-renderer';
import { onlywrap } from '../../../../../utils/test_helper';
import Cards from '../Card';


describe('Card Testing',()=>{
    test('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<Cards />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})