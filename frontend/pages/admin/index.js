import React from 'react';
import AdminTable from "../../components/admin/AdminTable";
import ProcessTable from '../../components/admin/ProcessTable';


export default function Admin() {
    return (
        <div className='wrapper'>
        <AdminTable/>
        <ProcessTable/>
        </div>
    )
}