import React, { Fragment, useState } from 'react';
import { Container, Form, FormGroup, Input, Row, Col, Button } from 'reactstrap';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

import './Home.css';

import About from '../../assets/img/img-about.png';

import Logo from '../../assets/img/logo-header.png';

import Service1 from '../../assets/img/services-img-1.png';
import Service2 from '../../assets/img/services-img-2.png';
import Service3 from '../../assets/img/services-img-3.png';

import Client1 from '../../assets/img/clients-1.png';
import Client2 from '../../assets/img/clients-2.png';
import Client3 from '../../assets/img/clients-3.png';
import Client4 from '../../assets/img/clients-4.png';
import Client5 from '../../assets/img/clients-5.png';
import Client6 from '../../assets/img/clients-6.png';

import Phone from '../../assets/img/phone.svg';
import Email from '../../assets/img/email.svg';
import Place from '../../assets/img/place.svg';

const Home = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <Fragment>

            <header>
                <div className="menu">
                    <Navbar color="transparent" light expand="md">
                        <img src={Logo} alt="logo" className="imglfuid"/>
                        <NavbarToggler className="color-toogler" onClick={toggle}/>
                        <Collapse isOpen={isOpen}navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/" className="menu-item">Início</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#about" className="menu-item">Quem Somos</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#services" className="menu-item">Serviços</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#clients" className="menu-item">Clients</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#contact" className="menu-item">Contato</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
                <div className="header-title">
                    <h1 className="text-center text-uppercase">Consulte sua ordem de serviço</h1>
                    <div className="header-order text-center">
                        <button type="button">Consultar</button>
                    </div>
                </div>
            </header>
            
            <section id="about">
                <Container className="about-section">
                    <Row className="d-flex justify-content-between align-items-center">
                        <Col col="12" sm="12" md="12" lg="4">
                            <h1 className="about-title text-uppercase">Quem<br/>Somos?</h1>
                        </Col>
                        <Col col="12" sm="12" md="6" lg="4">
                            <p className="about-description">Somos uma empresa especializada no conserto de motores elétricos, bombas de água, lava jatos, bombas submersas, guinchos de coluna. Com mais de 25 anos de experiência no mercado atendemos grandes empresas da cidade e da região do Alto Uruguai. Solicite um orçamento agora mesmo</p>
                        </Col>
                        <Col col="12" sm="12" md="6" lg="4">
                            <img src={About} alt="Imagem Sobre" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="services">
                <Container className="services-section">
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col col="12" sm="12" md="12" lg="12">
                            <h2 className="services-title text-uppercase text-center">Serviços</h2>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-between align-items-center">
                        <Col col="12" sm="12" md="4" lg="4" className="text-center service-img">
                            <img src={Service1} alt="Serviço 1" className="img-fluid" />
                            <p className="text-uppercase service-description">Conserto de Motores Elétricos</p>
                        </Col>
                        <Col col="12" sm="12" md="4" lg="4" className="text-center service-img">
                            <img src={Service2} alt="Serviço 2" className="img-fluid" />
                            <p className="text-uppercase service-description">Conserto de Bombas de Água</p>
                        </Col>
                        <Col col="12" sm="12" md="4" lg="4" className="text-center service-img">
                            <img src={Service3} alt="Serviço 3" className="img-fluid" />
                            <p className="text-uppercase service-description">Venda de Material Elétrico</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="clients">
                <Container className="clients-section">
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col col="12" sm="12" md="12" lg="12">
                            <h2 className="clients-title text-uppercase text-center">Clientes</h2>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-between align-items-center">
                        <Col col="12" sm="12" md="4" lg="4" className="text-center">
                            <img src={Client1} alt="Cliente 1" className="img-fluid"/>
                        </Col>
                        <Col col="12" sm="12" md="4" lg="4" className="text-center">
                            <img src={Client2} alt="Cliente 2" className="img-fluid"/>
                        </Col>
                        <Col col="12" sm="12" md="4" lg="4" className="text-center">
                            <img src={Client3} alt="Cliente 3" className="img-fluid"/>
                        </Col>
                        <Col col="12" sm="12" md="4" lg="4" className="text-center">
                            <img src={Client4} alt="Cliente 4" className="img-fluid"/>
                        </Col>
                        <Col col="12" sm="12" md="4" lg="4" className="text-center">
                            <img src={Client5} alt="Cliente 5" className="img-fluid"/>
                        </Col>
                        <Col col="12" sm="12" md="4" lg="4" className="text-center">
                            <img src={Client6} alt="Cliente 6" className="img-fluid"/>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="contact">
                <Container className="contact-section">
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <p className="contact-title">Entre em <br/> Contato</p>

                            <div className="contact-info">
                                <img src={Phone} alt="Telefone" />
                                <p> (12) 3456-7890</p>
                            </div>

                            <div className="contact-info">
                                <img src={Email} alt="E-mail" />
                                <p>contato@vab.com.br</p>
                            </div>

                            <div className="contact-info">
                                <img src={Place} alt="Localização" />
                                <p>Avenida Imaginária, 500 - La La Land</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <Form>
                                <FormGroup>
                                    <Input type="text" placeholder="Nome" />
                                    <Input type="text" placeholder="E-mail" />
                                    <Input type="text" placeholder="Telefone" />
                                    <Input type="text" placeholder="Assunto" />
                                    <Input type="textarea" rows="5" placeholder="Mensagem" />
                                    <Button className="send-button float-right">Enviar</Button>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>

            <fooer className="dev-info">
                <p>Desenvolvido por Tiago Ferraresi Bellaver</p>
                <p>Trabalho de Engenharia de Software III</p>
            </fooer>
        </Fragment>
    )
}

export default Home;