import { Table, Progress, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getResumeTotalSales } from "../selectors/getResumeTotalSales";

export const SalesTable = () => {

    const { sales } = useSelector( state => state )

    const [ resumeSales, setResumeSales ] = useState([])

    useEffect( () => {
        if ( sales ) {
            const resumeSales = getResumeTotalSales( sales )
            setResumeSales( resumeSales )
        }
    }, [ sales ])

    const navigate = useNavigate()

    const handleNavigate = ( url ) => navigate( `/${url.replace(' ', '_')}` )

    return (
        <>
            {
                resumeSales
                    &&   <Table
                            aria-label="Example table with static content"
                            css={{
                                height: "auto",
                                minWidth: "100%",
                            }}
                            className='animate__animated animate__fadeIn'
                            lined
                        >
                            <Table.Header>
                                <Table.Column>Nombre Empresa</Table.Column>
                                <Table.Column>Total de Ventas</Table.Column>
                                <Table.Column>Comision</Table.Column>
                                <Table.Column>Detalle</Table.Column>
                            </Table.Header>
                            <Table.Body>
                                {   
                                    resumeSales.map( sale => (
                                        <Table.Row key={ sale.id }>
                                            <Table.Cell> { sale.nameAgency } </Table.Cell>
                                            <Table.Cell> { sale.totalSum } </Table.Cell>
                                            <Table.Cell> { sale.totalSum * 0.025 } </Table.Cell>
                                            <Table.Cell> <Button light color='secondary' auto onClick={ () => handleNavigate( sale.nameAgency ) }> Detalle </Button> </Table.Cell>
                                        </Table.Row>
                                    ))                      
                                }
                            </Table.Body>
                        </Table>
            }
            {
                !sales && <Progress indeterminated size='md' color="secondary" status="secondary" shadow />
            }
        </>
    )
}
