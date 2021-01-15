import React, {useState, useEffect} from 'react'
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'
import Addcustomer from './Addcustomer'

export default function Customerlist() {
    

    const [customers, setCustomers] = useState([])

    useEffect(() => fetchData(), [])

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then((jsonData) => {
            setCustomers(jsonData.content)
       })    
    }

    const saveCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(customer)  
    })
    .then(res => fetchData)
    .catch(err => console.error(err))
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
            <Addcustomer saveCustomer={saveCustomer}/>
            <ReactTable filterable data={customers} columns={columns}/>
        </div>

    )
}