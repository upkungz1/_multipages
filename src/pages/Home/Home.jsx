import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "./Home.css";

function Home() {
  return (
    <div className="home-container">
    <div className="home-card">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./public/img/jettana.jpg" />
      <Card.Body>
        <Card.Title>Jettana Luangsa-ard</Card.Title>
        <Card.Text>
        <b>Sripatum University</b> <br />
        Software Full Stack Development <br /> <br />
        Email <br />
         Microsoft : jettana.lua@spulive.net <br />

Google : jettana.lua@spumail.net
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="home-text">
      <b>ชื่อ :</b> นายเจตนะ เหลืองสอาด <br />
      <b>รหัส : </b>66018526 <br />
      <b>คณะ : </b>วิทยาการคอมพิวเตอร์ <br />
      <b>สาขา : </b>Software Full Stack Development <br />
      <b>อายุ :</b> 20 ปี <b>ชื่อเล่น :</b> อัพ, เจตน์, เจ็ท <br />
      <b>Basic</b><br />
      <li>Html</li>
      <li>Java Script</li>
      <li>CSS</li>

      <br />
      <b>งานอดิเรก :</b> <br />
      <li>ทำกราฟิค</li>
      <li>เล่นกีฬา</li>
      <li>เล่นเกม</li>

      <br />

      <b>ประวัติการศึกษา :</b> <br />
      <li><b>ประถมศึกษา 1-6 :</b> โรงเรียนอนุบาลกาญจนบุรี</li>
      <li><b>มัธยมศึกษาตอนต้น :</b> โรงเรียนวิสุทธรังษีกาญจนบุรี</li>
      <li><b>มัธยมศึกษาตอนปลาย :</b> วิทยาลัยอาชีวศึกษากาญจนบุรี</li>


    </div>
    </div>
  );
}

export default Home;
