import React, {useState, useEffect} from 'react'
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default function Customerlist() {
    // const [customers, setCustomers] = useState([])
    // const [trainings, setTrainings] = useState([])

    const [customers, setCustomers] = useState([])

    useEffect(() => fetchData(), [])

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then((jsonData) => {
            setCustomers(jsonData.content)
       })    
    }
    
    
    const columns = [
        {
            Header: 'First name',
            accessor: 'firstname'
        },
        {
            Header: 'Last name',
            accessor: 'lastname'
        },
        {
            Header: 'Street address',
            accessor: 'streetaddress'
        },
        {
            Header: 'Postcode',
            accessor: 'postcode'
        },
        {
            Header: 'City',
            accessor: 'city'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Phone',
            accessor: 'phone'
        }
    ]

   

    return (
        <div>
            
            <h1>Customers</h1>
            <ReactTable filterable data={customers} columns={columns}/>
        </div>

    )
}