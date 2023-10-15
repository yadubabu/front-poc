import { render } from '@testing-library/react';
import {store} from '../redux/store'
import { BrowserRouter,MemoryRouter,Routes,Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import { InitialEntry } from '@remix-run/router';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

// type Props={
//     component:any
//     path:any;
//     routes:any;
// }

// export const renderComponent=(props:Props)=>{
//     return {
//         ...render(
//             <Provider store={store}>
//                 <BrowserRouter>{props.component}</BrowserRouter>
//             </Provider>
//         ),
//         store,
//       };
// }
type WrapProps={
    component:ReactElement<any,any>

}
export const onlywrap=(props:WrapProps)=>{
    return(
        <Provider store={store}>
            <BrowserRouter>{props.component}</BrowserRouter>
    
        </Provider>
    )
}
// export const renderComponentwithRouterPath=(props:Props)=>{
//     return {
//         ...render(
//           <MemoryRouter initialEntries={[props.path]}>
//             <Provider store={store}>
//               <Routes>
//                 <Route path={props.path} element={props.component} />
//                 {props.routes.map((path:string,element:any) => (
//                   <Route key={path} path={path} element={element} />
//                 ))}
//               </Routes>
//             </Provider>
//           </MemoryRouter>
//         ),
//         store,
//       };
// }