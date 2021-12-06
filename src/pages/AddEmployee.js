import axios from 'axios';
import React, { useState } from 'react';
import {
    Row, Col, Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
const AddEmployeer = () => {
    const [data, setData] = useState({ firstname: '', lastname: '', emailid: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.post(`${process.env.REACT_APP_URL}/api/v1/employees`, data)
            .then(res => {
                alert('Employee has been added');
                setLoading(false)
                setData({ firstname: '', lastname: '', emailid: '' })


            })
            .catch(error => {
                if (error.response) {
                    if (error.response.data.message)
                        alert(error.response.data.message)
                    else if (error.response.data)
                        alert(error.response.data)
                }
                else {
                    alert('Error occured!!!')
                }

                setLoading(false)

            })
    }

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

                                <h5 style={{ textAlign: 'center' }}>Add Employee</h5>
                                <br />
                                <br />
                                <form onSubmit={handleSubmit} className='container'>

                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">First Name</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" required onChange={handleChange} value={data.firstname} name='firstname' placeholder="First Name" />
                                        </div>
                                    </div>

                                    <br />
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Last Name</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" required onChange={handleChange} value={data.lastname} name='lastname' placeholder="Last Name" />
                                        </div>
                                    </div>

                                    <br />

                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">Email Add.</label>
                                        <div class="col-sm-10">
                                            <input type="email" class="form-control" placeholder="Email Id" required onChange={handleChange} value={data.emailid} name='emailid' />
                                        </div>
                                    </div>
                                    <br />
                                    <br />

                                    <div style={{ textAlign: 'center' }} class="form-group">
                                        <Button type='submit' className='btn btn-info'>Submit</Button>
                                    </div>


                                </form>



                            </section>
                        </div>
                    </Col>

                </Row>
            </div>
        </div>
    )
}

export default AddEmployeer;