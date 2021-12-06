import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
    Row, Col, Button,
} from 'reactstrap';
import { Link, useParams } from 'react-router-dom';
const ViewEmployee = () => {
    const { id } = useParams()
    const [data, setData] = useState({ firstname: '', lastname: '', emailid: '' });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/api/v1/employees/${id}`)
            .then(res => { setData(res.data); setLoading(false) })
            .catch(err => console.log(err))

    }, [id])

    if (loading) {
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
            <Link to='/'><Button style={{ position: 'absolute', top: 70, left: 10 }}>Go Back</Button></Link>
            <div className="content">
                <Row>
                    <Col xs={10} md={12}>

                        <div className="col-12">
                            <section className="box ">
                                <br />

                                <h5 style={{ textAlign: 'center' }}> View Employee Details</h5>
                                <br />
                                <br />
                                <form className='container'>

                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">First Name</label>
                                        <div class="col-sm-10">
                                            <input readOnly type="text" class="form-control" value={data.firstname} name='firstname' placeholder="First Name" />
                                        </div>
                                    </div>

                                    <br />
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Last Name</label>
                                        <div class="col-sm-10">
                                            <input readOnly type="text" class="form-control" value={data.lastname} name='lastname' placeholder="Last Name" />
                                        </div>
                                    </div>

                                    <br />

                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Email Add.</label>
                                        <div class="col-sm-10">
                                            <input readOnly type="email" class="form-control" placeholder="Email Id" value={data.emailid} name='emailid' />
                                        </div>
                                    </div>
                                    <br />
                                    <br />



                                </form>



                            </section>
                        </div>
                    </Col>

                </Row>
            </div>
        </div>
    )
}

export default ViewEmployee;