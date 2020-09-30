import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Animation from '../Animation/Animation';


const DonarPage = () => {
    return ( 
<>
<Container>

<h1 className="title text-center">#Donar</h1>

<Animation />

<h4 className="text-center">Elegí la opción que mejor se adecue a tus posibilidades.</h4>
<p className="text-center text-muted"> Te redirigimos a Mercado Pago para que puedas realizar una transacción segura.</p>

<Row className="my-5 text-center">
    <Col> <a className="btn btn-link" href="https://mpago.la/1FBEy7J">Donar $50</a></Col>
    <Col><a className="btn btn-link"href="https://mpago.la/1PccT7H">Donar $100</a></Col>
</Row>
<Row className="my-5 text-center">
<Col><a className="btn btn-link" href="https://mpago.la/2rdC8Vi">Donar $200</a></Col>
<Col><a className="btn btn-link" href="https://mpago.la/23anabr">Donar $300</a></Col>
</Row>
<Row className="my-5 text-center">
    <Col><a className="btn btn-link" href="https://mpago.la/1FbKk5B">Donar $400</a></Col>
    <Col><a className="btn btn-link" href="https://mpago.la/2XKLFQa">Donar$500</a></Col>
</Row>
<Col className="my-5 text-center"><a className="btn btn-link abs-center" href="https://mpago.la/1CSUcK8">Donar$1000</a></Col>
</Container>
</>
     );
}
 
export default DonarPage;