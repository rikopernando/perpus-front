import React from 'react'
import { Table } from 'semantic-ui-react'

const TableData = (props) => {
    const { data } = props
    return (
         <div>
         {
            Object.keys(data).map((value,index) => {
               return (
                 <Table.Cell key={index}>{data[value]}</Table.Cell>
               )
            })
         }
         </div>
    )
}

export default TableData
