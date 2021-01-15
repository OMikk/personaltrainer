import React, {useState, useEffect} from 'react'
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'
import Addtraining from './Addtraining'

export default function Traininglist() {
    const [trainings, setTrainings] = useState([])


    useEffect(() => fetchData(), [])

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then((jsonData) => {
            setTrainings(jsonData.content)
       })    
    }
    
    
    const columns = [
        {
            Header: 'Date',
            accessor: 'date'
        },
        {
            Header: 'Duration',
            accessor: 'duration'
        },
        {
            Header: 'Activity',
            accessor: 'activity'
        }
    ]

   

    return (
        <div>
            <h1>Trainings</h1>
            <Addtraining/>
            <ReactTable filterable data={trainings} columns={columns}/>
        </div>

    )
}