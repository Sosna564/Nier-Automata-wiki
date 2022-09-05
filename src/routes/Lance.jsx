import React from 'react';
import background from "../assets/background_image.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Phoenix from "../assets/Phoenix_Lance.png"
import Beast from "../assets/Beastcurse-0.png"
import {GetWeapon} from "../components/GetWeapons";

const Lance = () => {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', width: "100%",
            height: "100%"
        }}>
            <Container style={{
                background: "#eceade",
                width: "100%",
                height: "100%"
            }}> <Row><h2> Lance</h2>
                <Col>
                    <img src={Phoenix} alt={""}/><GetWeapon id={5}/>
                    Phoenix Lance
                </Col>
                <Col><img src={Beast} alt={""}/><GetWeapon id={6}/> Beastcurse</Col>
            </Row>
            </Container>
        </div>
    );
};

export default Lance;