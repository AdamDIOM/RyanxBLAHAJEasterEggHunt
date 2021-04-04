import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import { Card, Carousel, CarouselItem, Col, Container, Row, Table } from 'react-bootstrap';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom/cjs/react-dom.development';
import { useState } from 'react';

function App() {

  const [foundArray, setFoundArray] = useState([]);

  const [output, setOutput] = useState("No surprises found");

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="my-nav">
        <Navbar.Brand href="#home">
          <button onClick={() => {
            let temparr = foundArray;
            let found = false;
            for(let item in temparr){
              if(temparr[item] === "Title"){
                found = true
              }
            }
            if(!found){
              temparr.push("Title");
              setFoundArray(temparr);   
              console.log(foundArray); 
              setOutput(foundArray.map(element => (
                <p>{element}</p>
              )))
            }
            else{
              alert("Surprise already found!");
            }
                   
          }}>What a Surprise!!</button>
        </Navbar.Brand>
      </Navbar>
      <Container className="carousel-container">
        <Carousel className="gallery" interval={__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED}>
          <CarouselItem>
            <img src="https://melon.blahajgang.lol/Assets/Graphics/ASMR%20With%20Will/Crunch.png" alt="BLAHAJ" />
          </CarouselItem>
          <CarouselItem>
            <button onClick={() => {
            let temparr = foundArray;
            let found = false;
            for(let item in temparr){
              if(temparr[item] === "Bread"){
                found = true
              }
            }
            if(!found){
              temparr.push("Bread");
              setFoundArray(temparr);   
              console.log(foundArray);
              setOutput(foundArray.map(element => (
                <p>{element}</p>
              )))  
            }
            else{
              alert("Surprise already found!");
            }
                   
          }}><img src="https://melon.blahajgang.lol/Assets/Graphics/Baking%20Streams/BreadHanded.png" alt="BLAHAJ" /></button>
          </CarouselItem>
          <CarouselItem>
            <img src="https://melon.blahajgang.lol/Assets/Graphics/Karaoke%20Night/Avocado.png" alt="BLAHAJ" />
          </CarouselItem>
          <CarouselItem>
            <img src="https://melon.blahajgang.lol/Assets/Graphics/Espresso%20Hour/Cocoa.png" alt="BLAHAJ" />
          </CarouselItem>
        </Carousel>
      </Container>
      <Container>
        
        
      <h1>Find the Surprises hidden in this site!</h1>
        <Row>
          <Col xs={12} md={8}>
            <p>At LHD: Share, we will have plenty of week-long and daily challenges to keep you busy. Week-long challenges will be accessible for the entire week, so you can hack on them whenever you have free time. Daily challenges are only available for 24 hours after they’re originally posted, so make sure you come back each day to see which challenges you’re going to conquer.</p>
            <p>Challenges will range from social challenges urging you to connect with other members of the community, technical challenges that will expand your coding skills, and design challenges to refine your skills as a creator and artist. Some of these challenges will be completed live on our twitch stream, so you can follow along and complete it with the community. We cannot wait to see all that you learn, build, and <button onClick={() => {
            let temparr = foundArray;
            let found = false;
            for(let item in temparr){
              if(temparr[item] === "Share"){
                found = true
              }
            }
            if(!found){
              temparr.push("Share");
              setFoundArray(temparr);   
              console.log(foundArray); 
              setOutput(foundArray.map(element => (
                <p>{element}</p>
              ))) 
            }
            else{
              alert("Surprise already found!");
            }
                   
          }}>share</button>.</p>
            
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Guild Name</th>
                  <th>Points</th>
                  <th>Members</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td><button onClick={() => {
            let temparr = foundArray;
            let found = false;
            for(let item in temparr){
              if(temparr[item] === "BLAHAJgang"){
                found = true
              }
            }
            if(!found){
              temparr.push("BLAHAJgang");
              setFoundArray(temparr);   
              console.log(foundArray);  
              setOutput(foundArray.map(element => (
                <p>{element}</p>
              )))
            }
            else{
              alert("Surprise already found!");
            }
                   
          }}>BLAHAJgang</button></td>
                  <td>10,841</td>
                  <td>318</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>EddieHub</td>
                  <td>6,212</td>
                  <td>278</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Developer Student Community</td>
                  <td>4,948</td>
                  <td>248</td>
                </tr>
              </tbody>
            </Table>

          </Col>
          <Col xs={12} md={4}>
            <Card className="ikea-ad">
              <Card.Body>
                <Card.Title>Buy a BLAHAJ</Card.Title>
                <Card.Subtitle className="mb-2">They are the best</Card.Subtitle>
                <img src="https://blahajgang.lol/assets/just-blahaj.png" alt="BLAHAJ"/>
                <Card.Text>
                  <button onClick={() => {
            let temparr = foundArray;
            let found = false;
            for(let item in temparr){
              if(temparr[item] === "Ryan"){
                found = true
              }
            }
            if(!found){
              temparr.push("Ryan");
              setFoundArray(temparr);   
              console.log(foundArray);  
              setOutput(foundArray.map(element => (
                <p>{element}</p>
              )))
            }
            else{
              alert("Surprise already found!");
            }
                   
          }}>Ryan</button> sWift is a huge fan of BLAHAJ and he really wants you to buy one. If you don't, he'll be sad. Also 45k Checkins pls.
                </Card.Text>
                <Card.Link href="https://hackp.ac/blahaj">Buy one today</Card.Link>
              </Card.Body>
            </Card>
            
          </Col>
        </Row>
      </Container>

      <Container>
        <h3>Surprises Found</h3>
        <div id="foundSurprises">
          
          {output}
        </div>
      </Container>
      
    </div>
  );
}

export default App;
