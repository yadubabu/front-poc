import renderer from 'react-test-renderer';
import { onlywrap } from '../../../../utils/test_helper';
import Earnings from '../Earnings';


describe('Earnings Testing',()=>{
    test.skip('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap(<Earnings />)).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
})