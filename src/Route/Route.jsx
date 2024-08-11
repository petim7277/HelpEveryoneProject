import Layout from "../Components/Layout/Layout";
import Features from "../Features/Features";

export const Routes = [
    {
        path:"",
        element:<Layout/>,
        children:[
            {
                path:"",
                element:<Features/>
            },
        ]
    }
]