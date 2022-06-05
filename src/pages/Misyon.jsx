import React from 'react'
import { Card, Container } from 'react-bootstrap'

export default function Misyon() {
    return (
        <Container>
            <Card body className="m-3">
                <h1>MİSYON & VİZYON</h1>
            </Card>

            <Card body className="m-3">
                <b>Misyon</b>
                <br />
                Agalar University; geçmişten gelen birikimi ile sağlık, mühendislik, doğa ve sosyal bilimler alanlarında tercih edilen,
                etik değerlere bağlı, kaliteli hizmetler sunan, sosyal ve akademik donanımlı bireyler yetiştiren, bilgi birikiminden
                istifade edilen, “en iyi olmak için” sloganıyla hareket eden köklü bir araştırma üniversitesidir.
                <br /><br />
                <b>Vizyon</b>
                <br />
                Dünyada ve ülkemizde kabul edilen öncü bir araştırma üniversitesi olmak.
            </Card>
        </Container>
    )
}
