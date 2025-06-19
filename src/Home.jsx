import React from 'react'
import homePic from './pic/bg.jpg'
import bottle from './pic/bottleLowBrg.png'
import aboutPic from './pic/aboutPic.png'
import one from './pic/1.png'
import two from './pic/2.png'
import three from './pic/3.png'
import six from './pic/6.png'
import halal from './pic/halalBg.png'
import safe from './pic/safe.png'
import food from './pic/food.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Home() {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true,     
        });
      }, []);

  return (
    <div className="container">
        <section className='home'>
            <div className="bgPic" data-aos="fade-up">
                <img src={homePic}></img>
            </div>
            <div className="title">
                <h1>ฟาด้า น้ำปลาร้าฮาลาล</h1>
                <h3>By Fadafood</h3>
            </div>
            <div className="bottle">
                <img src={bottle}></img>
            </div>
        </section>

        <section>
            <div className="about" id='About' data-aos="fade-up">
                <div className="descrip">
                    <h1>เกี่ยวกับเรา</h1>    
                    <h5>
                        <b>ความต้องการที่ยังไม่ถูกเติมเต็ม (Unmet Need)</b> : <br></br>แม้น้ำปลาร้าจะเป็นหัวใจของอาหารอีสานและอาหารไทยหลายเมนู แต่ตลาดน้ำปลาร้าฮาลาลที่ได้มาตรฐานและเป็นที่ยอมรับยังคงมีน้อยมาก การทำน้ำปลาร้าฟาด้าฮาลาลคือการตอบโจทย์ช่องว่างนี้ ทำให้พี่น้องมุสลิมสามารถเพลิดเพลินกับรสชาตินัวอร่อยได้อย่างไร้กังวล<br></br>
                        <br></br><b>การเข้าถึงอาหารไทยสำหรับพี่น้องมุสลิม</b> : <br></br>อาหารไทยเป็นที่รู้จักและชื่นชอบทั่วโลก การมีน้ำปลาร้าฮาลาลคุณภาพดีจะช่วยให้ร้านอาหารไทยและผู้บริโภคมุสลิมสามารถสร้างสรรค์เมนูไทยแท้ได้อย่างสมบูรณ์ โดยไม่ต้องกังวลเรื่องวัตถุดิบ ช่วยขยายตลาดและส่งเสริมวัฒนธรรมอาหารไทยให้เป็นที่รู้จักในวงกว้างยิ่งขึ้น
                       <br></br><br></br> <b>สร้างความเชื่อมั่นและมาตรฐานฮาลาล</b> :<br></br> การได้รับรองเครื่องหมายฮาลาลไม่ใช่เรื่องง่าย ต้องผ่านกระบวนการผลิตที่เคร่งครัด สะอาด และปลอดภัย การทำน้ำปลาร้าฟาด้าฮาลาลจึงเป็นการยกระดับมาตรฐานสินค้าไทย และสร้างความมั่นใจสูงสุดให้กับผู้บริโภคว่าผลิตภัณฑ์นี้ "ฮาลาลจริง" และมาจากแหล่งที่เชื่อถือได้
                    </h5>
                </div>
                <div className="about-pic">
                    <img src={aboutPic}></img>
                </div>
            </div>    
        </section>

        <hr></hr>

        <section>
            <div className="product" id='Product' data-aos="fade-up">
                <h1>สินค้าของเรา</h1> 
                <div className="box-container">
                    <div className="box-product">
                        <img src={one}></img>
                        <h4>1 ขวด 35 บาท ค่าส่ง 19 บาท</h4>
                        <h6>( ปลายทางบวกเพิ่ม 10 บาท )</h6>
                    </div>
                    <div className="box-product">
                        <img src={two}></img>
                        <h4>2 ขวด 70 บาท ค่าส่ง 30 บาท</h4>
                        <h6>( ปลายทางบวกเพิ่ม 10 บาท )</h6>
                    </div>
                    <div className="box-product">
                        <img src={three}></img>
                        <h4>3 ขวด 100 บาท ค่าส่ง 35 บาท</h4>
                        <h6>( ปลายทางบวกเพิ่ม 10 บาท )</h6>
                    </div>
                    <div className="box-product">
                        <img src={six}></img>
                        <h4>6 ขวด 180 บาท ค่าส่ง 50 บาท</h4>
                        <h6>( ปลายทางบวกเพิ่ม 10 บาท )</h6>
                    </div>
                </div>
            </div>
        </section>

        <hr></hr>

        <section>
            <div className="productInfo" id='Info' data-aos="fade-up">
                <h2>เกี่ยวกับสินค้า</h2>
                <div className="box-info-container">
                    <div className="box-infoProduct">
                        <img src={halal}></img>
                        <div className="text-infoProduct">
                            <h1>ฮาลาล</h1>
                            <h3>
                                ฮาลาล 100 % เพราะผ่านการควบคุม<br></br>ดูแลการผลิตโดยทีมงานมุสลิม
                            </h3>
                        </div>
                    </div>
                    <div className="box-infoProduct">
                        <img src={safe}></img>
                        <div className="text-infoProduct">
                            <h1>สะอาด</h1>
                            <h3>
                                ผลิตโดยโรงงานมาตรฐาน GMP<br></br> มี อ.ย.รับรองความสะอาดและปลอดภัย
                            </h3>
                        </div>
                    </div>
                    <div className="box-infoProduct">
                        <img src={food}></img>
                        <div className="text-infoProduct">
                            <h1>อร่อย</h1>
                            <h3>
                                รสชาติแซ่บจัดจ้านถึงใจ เข้มข้น หอมกลิ่นปลาร้าแท้ๆ ปรุงรสมาอย่างดี กลมกล่อม ไม่คาว ไม่ต้องปรุงเพิ่ม
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <hr></hr>

        <section>
            <div className="review-container" data-aos="fade-up">
            <h1>รีวิวจากลูกค้า</h1> 
                <div className="box-review-container">
                    <div className="box-review">
                        <h2>แซ่บนัวส์ถึงรส😘</h2>
                        <h4>คุณประภานันท์ สุภานนท์</h4>
                    </div>
                    <div className="box-review">
                        <h2>อร่อยมากค่ะ ตำ ยำ ลงตัว</h2>
                        <h4>Khunnui Sirikallaya</h4>
                    </div>
                    <div className="box-review">
                        <h2>อร่อยจริงค่ะ</h2>
                        <h4>คุณวนิสสา สืบวงศ์</h4>
                    </div>
                    <div className="box-review">
                        <h2>ได้ลองชิมน้ำปลาร้าแล้ว อร่อยมากค่ะ</h2>
                        <h4>คุณวิลาสินี กาญจนวิจิตร</h4>
                    </div>
                </div>
            </div>
        </section>

        <hr></hr>

        <section></section>
    </div>
  )
}

export default Home