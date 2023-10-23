import renderer from 'react-test-renderer';
import { onlywrap,renderComponent } from '../../utils/test_helper';
import FAQ from '../FAQ';


describe('FAQ  Page Testing',()=>{
    test.skip('SnapShot testing....',()=>{
        const wrapper=renderer.create(onlywrap({component:<FAQ/>})).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
    // test('Heading should be FAQ',()=>{
    //     const {findByRole}=renderComponent({component:<FAQ/>})
    //     expect(findByRole('heading',{name:'FAQ'})).toMatch;  
    //   });
})