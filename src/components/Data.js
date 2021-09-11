import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Data = () => {

    const[contacts, setContacts] = useState([])
    const[loading, setLoading] = useState(false);

    useEffect(() => {
        getContact();
    })

    const getContact = () => {
        axios.get('https://randomuser.me/api/?results=12')
            .then(res => {
                console.log(res);
                setContacts(res.data.results);
                setLoading(true);
            })
    }

    return(
        <>
            <Row>
                {loading && contacts.map(contact => () => {
                    <Col sm={12} md={6} lg={4} key={contact.login.uuid} >
                        <h1>Yash</h1>
                    </Col>
                })}
            </Row>
        </>
    )
}
export default Data