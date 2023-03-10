import { useState } from "react";
import OrderPage from './OrderPage';
import OrderItem from './OrderItem';

const ManageOrderPage: React.FC = () => {
    const [currentView, setCurrentView] = useState('order')
    const [currentItemId, setCurrentItemID] = useState(1)
    const node = currentView === 'items' ? <OrderItem id={currentItemId} setCurrentView={setCurrentView} setCurrentItemID={setCurrentItemID}/> :
        <OrderPage setCurrentView={setCurrentView} setCurrentItemID={setCurrentItemID} />
    return (
        <>{node}</>
    );
};

export default ManageOrderPage;