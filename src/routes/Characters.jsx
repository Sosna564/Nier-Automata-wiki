import React from "react"
import background from "../assets/background_image.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import character2b from "../assets/YoRHa_No.2_Type_B.png";
import character9s from "../assets/YoRHa_No.9_Type_S.png";
import characterA2 from "../assets/YoRHa_No.2A.png";
import characterAnemone from "../assets/Anemone.png";
import characterPopola from "../assets/NA_Popola.png";
import characterDevola from "../assets/NA_Devola.png";
import characterEmil from "../assets/NA_Emil_Render.png";
import characterCommander from "../assets/YoRHa_Commander.png";
import characterPascal from "../assets/Pascal.png";
import character21O from "../assets/Operator 21O.png";
import character6O from "../assets/6Operator.png"

const Characters = () => {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', width: "100%",
            height: "100vh"
        }}>
            <Container style={{
                background: "#eceade",
                width: "100%",
                height: "100vh"
            }}><Row><h2>Postacie grywalne</h2>
                <Col>
                    <div style={{border: "5px", borderColor: "black"}}>
                        <img src={character2b} alt='' style={{width: "50%", height: "50%"}}/>2B</div>

                </Col>
                <Col>
                    <div style={{border: "5px", borderColor: "black"}}>
                        <img src={character9s} alt='' style={{width: "50%", height: "50%"}}/>9s</div>
                </Col>
                <Col>
                    <div style={{border: "5px", borderColor: "black"}}>
                        <img src={characterA2} alt='' style={{width: "50%", height: "50%"}}/>A2</div>
                </Col>
            </Row> <Row><h2>Postacie niegrywalne</h2>
                <Col>
                    <div style={{border: "5px", borderColor: "black"}}>
                        <img src={characterAnemone} alt='' style={{width: "75%", height: "75%"}}/>Anemone</div>

                </Col>
                <Col>
                    <div style={{border: "5px", borderColor: "black"}}>
                        <img src={characterPopola} alt='' style={{width: "75%", height: "75%"}}/>Popola</div>

                </Col>
                <Col>
                    <div style={{border: "5px", borderColor: "black"}}>
                        <img src={characterDevola} alt='' style={{width: "75%", height: "75%"}}/>Devola</div>

                </Col>
                <Col>
                    <div style={{border: "5px", borderColor: "black"}}>
                        <img src={characterPascal} alt='' style={{width: "75%", height: "75%"}}/>Pascal</div>

                </Col>
                <Col>
                    <div style={{border: "5px", borderColor: "black"}}>
                        <img src={characterEmil} alt='' style={{width: "75%", height: "75%"}}/>Emil</div>

                </Col>
                <Col>
                    <div style={{border: "5px", borderColor: "black"}}>
                        <img src={characterCommander} alt='' style={{width: "75%", height: "75%"}}/>Commander</div>

                </Col>
                <Col>
                    <div style={{border: "5px", borderColor: "black"}}>
                        <img src={character21O} alt='' style={{width: "75%", height: "75%"}}/>Operator 21O</div>

                </Col>
                <Col>
                    <div style={{border: "5px", borderColor: "black"}}>
                        <img src={character6O} alt='' style={{width: "75%", height: "75%"}}/>Operator 6O</div>

                </Col>

            </Row>
            </Container>
        </div>
    )
}
export default Characters