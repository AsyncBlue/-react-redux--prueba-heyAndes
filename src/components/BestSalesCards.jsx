import { Row, Col, Card, Text } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getBestSellingAgency } from "../selectors/getBestSellingAgency"
import { getMonthMoreSales } from "../selectors/getMonthMoreSales"
import { getResumeTotalSales } from "../selectors/getResumeTotalSales"

export const BestSalesCards = () => {

    const { sales } = useSelector( state => state )

    const [ bestSelling, setBestSelling ] = useState({ sumTotalSales: 0, nameAgency: '' })
    const [ monthMax, setMonth ] = useState({ month: '', sumTotalSales: 0 })

    useEffect( () => {

        if ( sales ) {
            const resumeSales = getResumeTotalSales( sales )
            const bestSellingAgency = getBestSellingAgency( resumeSales )
            setBestSelling( bestSellingAgency )
            const monthMaxSales = getMonthMoreSales( sales )
            setMonth( monthMaxSales )
        }

    }, [ sales ])

    return (
        <Row css={{ marginTop: '40px', display: 'flex', justifyContent: 'space-around' }}>
                <Col span={4}>
                    <Card color='gradient' shadow hoverable className='animate__animated animate__fadeIn'>
                        <Text h3 weight='bold' css={{ color: "$white", justifyContent: 'center', display: 'flex' }}> EMPRESA MAS VENTAS </Text>
                        <Text h1 weight='extrabold' css={{ color: "$white", justifyContent: 'center', display: 'flex' }}> { '$' + bestSelling.sumTotalSales } </Text>
                    </Card>
                </Col>

                <Col span={4}>
                    <Card color='gradient' shadow hoverable className='animate__animated animate__fadeIn'>
                        <Text h3 weight='bold' css={{ color: "$white", justifyContent: 'center', display: 'flex' }}> MES MAS VENTAS </Text>
                        <Text h1 weight='extrabold' transform='uppercase' css={{ color: "$white", justifyContent: 'center', display: 'flex' }}> { monthMax.month } </Text>
                    </Card>
                </Col>
        </Row>
    )
}
