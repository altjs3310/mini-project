import axios from "axios";
import { useEffect, useState } from "react"
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from "react-bootstrap"

function Cards() {
  const [cardsData, setCardsData] = useState([]);

  // useEffect(() => {
  //   axios.get("https://altjs3310.github.io/project_api/data.json")
  //     .then(response => {
  //       setCardsData(response.data);
  //     })
  //     .catch(error => {
  //       console.log("error");
  //     })
  // }, [])

  return (
    <>
    {
      cardsData.map(card => (
    <Card key={card.id} style={{ width: '15em' }}>
      <CardImg variant="top" src='' />
      <CardBody>
        <CardTitle>Card Title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <Button variant="primary">Go somewhere</Button>
      </CardBody>
    </Card>
    ))}
    </>
  )
}

export default Cards