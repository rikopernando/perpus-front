import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Header, Button, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class TableApp extends Component {

    constructor() {
      super()
      this.state = {
        open : false,
        id : '' 
      }
    }

    show = id => () => this.setState({ open: true, id : id })

    close = () => this.setState({ open: false })

    onDelete = (id) => {
     this.props.handleDelete(id)
     this.setState({ open: false })
    }

    render(){
        const { tbody, thead, editUrl } = this.props
        const { open, id } = this.state
        return (
          <div style={{ marginTop : 10, marginBottom : 10 }}>
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
                    <Table.HeaderCell colSpan='2'>Aksi</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                {
                  tbody.length ? (
                    <Table.Body>
                      {
                        tbody.map((data,index) => {
                          return(
                            <Table.Row key={index}>
                                 {
                                    Object.keys(data).map((value,index) => {
                                       return (
                                         <Table.Cell key={index}>{data[value]}</Table.Cell>
                                       )
                                    })
                                 }
                              <Table.Cell>
                                  <Link to={editUrl+data.id} className="ui primary button" role="button"> Edit </Link>
                              </Table.Cell>
                              <Table.Cell>
                                  <Button onClick={this.show(data.id)} color='red'>Hapus</Button>
                              </Table.Cell>
                            </Table.Row>
                          )
                        })
                      }
                    </Table.Body>
                  ) : (
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell rowSpan='4'>
                            <Header as='h3' textAlign='right'>
                              Data Kosong
                            </Header>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  )
                }
              </Table>
              <Modal size='mini' open={open} onClose={this.close}>
                <Modal.Header>Konfirmasi Hapus Data</Modal.Header>
                <Modal.Content>
                  <p>Yakin akan menghapus data ini ? </p>
                </Modal.Content>
                <Modal.Actions>
                  <Button negative onClick={ this.close }>Tidak</Button>
                  <Button positive 
                      icon='checkmark'
                      labelPosition='right'
                      content='Ya'
                      onClick={ () => this.onDelete(id)} />
                </Modal.Actions>
              </Modal>
            </div>
           )
       }
}


const mapStateToProps = (state) => {
    return {
      redux : state
    }
}

export default connect(mapStateToProps)(TableApp)
