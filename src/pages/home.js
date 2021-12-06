import axios from 'axios';
import React from 'react';
import {
    Table,
    Row, Col, Button
} from 'reactstrap';

import { Link } from 'react-router-dom';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [], loading: true }
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_URL}/api/v1/employees`)
            .then(res => this.setState({ data: res.data, loading: false }))
            .catch(err => { alert('Error Occurred'); console.log(err) })
    }


    render() {

        const reload = () => {
            axios.get(`${process.env.REACT_APP_URL}/api/v1/employees`)
                .then(res => this.setState({ data: res.data, loading: false }))
                .catch(err => { alert('something went wrong please cheack console'); console.log(err) })
        }

        const Delete = (id) => {
            this.setState({ loading: true })
            axios.delete(`${process.env.REACT_APP_URL}/api/v1/employees/${id}`)
                .then(res => reload())
                .catch(err => console.log(err))

        }
        if (this.state.loading) {
            return (
                <div className='container'>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} className='box'>
                        <div class="spinner-border" role="status">
                            <span class="sr-only"></span>
                        </div>
                        <p style={{ marginTop: 20 }}>Loading . . .</p>
                    </div>

                </div>
            )
        }
        return (
            <div className='container'>
                <div className="content">
                    <Row>
                        <Col xs={10} md={12}>
                            <div className="col-12">
                                <section className="box ">

                                    <div className="row">
                                        <div className="col-lg-12">
                                            <Link to='/add'><Button className="btn-sm btn-info" >Add Employee</Button></Link> <br /><br />




                                            <Table hover>
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Email</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                        this.state.data.map((element, index) => {
                                                            return (
                                                                <tr>
                                                                    <th scope="row">{element.id}</th>
                                                                    <td>{element.firstname}</td>
                                                                    <td>{element.lastname}</td>
                                                                    <td>{element.emailid}</td>
                                                                    <td>
                                                                        <Link to={'/edit/' + element.id}><Button className="btn-sm btn-info" >Update</Button></Link>
                                                                        <Button className="btn-sm btn-danger" onClick={() => Delete(element.id)} >Delete</Button>
                                                                        <Link to={'/view/' + element.id}><Button className="btn-sm btn-info">View</Button></Link>
                                                                    </td>
                                                                </tr>
                                                            )

                                                        })
                                                    }
                                                </tbody>
                                            </Table>




                                        </div>
                                    </div>



                                </section>
                            </div>
                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default Home;
