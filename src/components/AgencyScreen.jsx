import { Table, Progress, Row, Col, Container, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSalesByNameAgency } from "../selectors/getSalesByNameAgency";
import moment from 'moment-with-locales-es6';
moment.locale('es')

export const AgencyScreen = () => {

    const { nombre_empresa } = useParams()

    const { sales } = useSelector( state => state )

    const [ salesAgency, setSalesAgency ] = useState([])

    useEffect( () => {
        if ( sales ) {
            const salesByAgency = getSalesByNameAgency( nombre_empresa.replace( '_', ' ' ), sales )
            setSalesAgency( salesByAgency )
        }
    }, [ sales ])

    return (
        <Container>
            {
                salesAgency
                    &&
                        <>
                            <Row css={{ justifyContent: 'center', display: 'flex', marginTop: '15px' }}>
                                <Text h1 weight='bold' css={{ textGradient: "45deg, $purple500 -20%, $pink500 100%" }} className='animate__animated animate__fadeIn'> { nombre_empresa.replace( '_', ' ' ) } </Text>
                            </Row>
                            <Row css={{ marginTop: '40px' }}>
                                <Col span={12}>
                                    <Table
                                        aria-label="Example table with static content"
                                        css={{
                                            height: "auto",
                                            minWidth: "100%",
                                        }}
                                        className='animate__animated animate__fadeIn'
                                        lined
                                    >
                                        <Table.Header>
                                            <Table.Column>Nombre Cliente</Table.Column>
                                            <Table.Column>Personas</Table.Column>
                                            <Table.Column>Dia</Table.Column>
                                            <Table.Column>Hora</Table.Column>
                                            <Table.Column>Valor Venta</Table.Column>
                                        </Table.Header>
                                        <Table.Body>
                                            {   
                                                salesAgency.map( sale => (
                                                    <Table.Row key={ sale.id }>
                                                        <Table.Cell> { sale.name  } </Table.Cell>
                                                        <Table.Cell> { sale.persons  } </Table.Cell>
                                                        <Table.Cell> { moment(sale.day).format("dddd") } </Table.Cell>
                                                        <Table.Cell> { sale.hour  } </Table.Cell>
                                                        <Table.Cell> { sale.finalPrice  } </Table.Cell>
                                                    </Table.Row>
                                                ))                      
                                            }
                                        </Table.Body>
                                    </Table>
                                </Col>
                            </Row>
                        </>
            }
            {
                !sales && <Progress indeterminated size='md' color="secondary" status="secondary" shadow />
            }
        </Container>
    ) 
}