import { Text, Container, Row, Col } from "@nextui-org/react";
import { BestSalesCards } from "./BestSalesCards";
import { SalesTable } from "./SalesTable";

export const HomeScreen = () => {

    return (
        <Container>
            <Row css={{ marginTop: '10px' }}>
                <Text h1 weight='bold' css={{ justifyContent: 'flex-start', display: 'flex', textGradient: "45deg, $purple500 -20%, $pink500 100%" }} className='animate__animated animate__fadeIn'> Pedro Roblero </Text>
            </Row>

            <BestSalesCards />

            <Row css={{ marginTop: '40px' }}>
                <Col span={12}>
                    <SalesTable />
                </Col>
            </Row>
        </Container>
    )
}
