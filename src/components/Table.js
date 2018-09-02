import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'

const TableApp = (props) => {
    const { thead , redux } = props
    return (
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            { 
              thead.map((text,index) => {
                return (
                  <Table.HeaderCell key={index}>{text}</Table.HeaderCell>
                )
              })
            }
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            redux.author.map((data,index) => {
              return(
                <Table.Row key={index}>
                     {
                        Object.keys(data).map((value,index) => {
                           return (
                             <Table.Cell key={index}>{data[value]}</Table.Cell>
                           )
                        })
                     }
                </Table.Row>
              )
            })
          }
        </Table.Body>
      </Table>
       )
}


const mapStateToProps = (state) => {
    return {
      redux : state
    }
}

export default connect(mapStateToProps)(TableApp)
