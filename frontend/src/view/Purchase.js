import {useEffect} from "react";
import TablePurchase from "../components/TablePurchase";
import { useDispatch, useSelector} from "react-redux";
import {getAllPurchaseAction} from "../redux/purchase/actions";
const tableData =[
    {title: "Quantity", name: "quantity"},
    {title: "Price", name: "price"},
    {title:"user", name:"User"},
    {title:"product", name:"Product"},
];
const ViewComponent = (props)=>{
    const dispatch = useDispatch();
    const { purchases, isFetching} = useSelector((state) => state.purchase);

    useEffect(() =>{
        getAllPurchaseAction()(dispatch);
    }, []);
   
    return(
        <TablePurchase tableData={tableData} items={purchases}/>

    )
}

export default ViewComponent;