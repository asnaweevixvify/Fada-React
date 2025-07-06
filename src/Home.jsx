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
import face from './pic/face.png'
import call from './pic/call.png'
import line from './pic/line.png'
import shop from './pic/shopee.png'
import laz from './pic/laz.png'
import tt from './pic/tt.png'
import lek from './pic/lek.png'
import pawa from './pic/pawa.png'
import yai from './pic/yai.png'
import bang from './pic/bang.png'
import kasi from './pic/kasi.png'
import bangf from './pic/bangf.png'
import menu3 from './pic/26.png'
import menu4 from './pic/27.png'
import menu5 from './pic/28.png'
import menu6 from './pic/29.png'
import menu7 from './pic/30.png'
import menu8 from './pic/31.png'
import menu9 from './pic/37.png'
import menu10 from './pic/38.png'
import r1 from './pic/32.png'
import r2 from './pic/33.png'
import r3 from './pic/34.png'
import r4 from './pic/35.png'
import np from './pic/np.png'


import show1 from './pic/11.png'
import show2 from './pic/12.png'
import show3 from './pic/13.png'
import show4 from './pic/14.png'


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './App.css'


function Home() {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true,     
        });
      }, []);

  return (
    <div className="container">
        <section className='home' id='Home'>
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

        <section id='About'>
            <div className="about" data-aos="fade-up">
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

        <section id='Product'>
            <div className="product" data-aos="fade-up">
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
                    <div className="box-product">
                        <img src={np}></img>
                        <h4>1 ขวด 45 บาท ค่าส่ง 29 บาท</h4>
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
                                ได้รับการรับรองมาตรฐานฮาลาลจากสำนักงานคณะกรรมการกลางอิสลามแห่งประเทศไทย
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

        <section id="Menu" data-aos="fade-up">
            <h1 className='menu-text'>ทำเมนูอะไรได้บ้าง</h1>
            <h4 className='menu-des'>สามารถทำเมนูได้หลากหลาย เช่น เช่น ส้มตำ ลาบ น้ำตก ยำ แกง น้ำพริก หลน และอีกมากมาย</h4>
            <div className="showcase-container" data-aos="fade-up">
                <img src={menu3}></img>
                <img src={menu4}></img>
                <img src={menu5}></img>
                <img src={menu6}></img>
                <img src={menu7}></img>
                <img src={menu8}></img>
                <img src={menu9}></img>
                <img src={menu10}></img>
            </div>
        </section>

        <hr></hr>

        <section id='Review'>
            <div className="review-container" data-aos="fade-up">
            <h1>รีวิวจาก Influencer ชื่อดัง</h1> 
                <div className="box-review-container influ">
                    <a href='https://www.facebook.com/reel/460020850516494' target='blank'>
                        <div className="box-review">
                            <img src={lek}></img>
                            <h2>เล็ก บูรพา วรุต ปริงทอง </h2>
                            <h4>Click เพื่อรับชมคลิป</h4>
                        </div>
                    </a>
                    <a href='https://www.facebook.com/watch/?mibextid=wwXIfr&v=688746660537298&rdid=wz2f17CYznRLOJT5' target='blank'>
                        <div className="box-review">
                            <img src={pawa}></img>
                            <h2>ปะหวาจัดให้</h2>
                            <h4>Click เพื่อรับชมคลิป</h4>
                        </div>
                    </a>
                    <a href='https://www.facebook.com/watch/?v=3019846131518374&rdid=d319NnpPKlk9c1me' target='blank'>
                        <div className="box-review">
                            <img src={yai}></img>
                            <h2>ว่าเฮยายหนวด</h2>
                            <h4>Click เพื่อรับชมคลิป</h4>
                        </div>
                    </a>
                    <a href='https://www.tiktok.com/@nuker_taiyang/video/7511274863307410696?_r=1&_t=ZS-8wtst6t64e8' target='blank'>
                        <div className="box-review">
                            <img src={bang}></img>
                            <h2>nuker_taiyang นิกับบัง</h2>
                            <h4>Click เพื่อรับชมคลิป</h4>
                        </div>
                    </a>
                   <a href='https://www.facebook.com/watch/?mibextid=rS40aB7S9Ucbxw6v&v=2143678446133307' target='blank'>
                        <div className="box-review">
                            <img src={kasi}></img>
                            <h2>ครัว กะซีตี</h2>
                            <h4>Click เพื่อรับชมคลิป</h4>
                        </div>
                   </a>
                    <a href='https://www.tiktok.com/@bangfead_ontour/video/7498921984865193234?_r=1&_t=ZS-8vxAoam7yUB' target='blank'>
                        <div className="box-review">
                            <img src={bangf}></img>
                            <h2>บังแฝด สายล่องท่องกิน </h2>
                            <h4>Click เพื่อรับชมคลิป</h4>
                        </div>
                    </a>
                </div>
            </div>
        </section>

        <hr></hr>

        <section id='Review'>
            <div className="review-container" data-aos="fade-up">
            <h1>รีวิวจากลูกค้า</h1> 
                <div className="box-review-container">
                    <div className="box-review-p">
                        <img src={r1}></img>
                    </div>
                    <div className="box-review-p">
                        <img src={r2}></img>
                    </div>
                    <div className="box-review-p">
                        <img src={r3}></img>
                    </div>
                    <div className="box-review-p">
                        <img src={r4}></img>
                    </div>
                </div>
            </div>
        </section>

        <hr></hr>

        <section>
            <div className="showcase-container" data-aos="fade-up">
                <img src={show1}></img>
                <img src={show2}></img>
                <img src={show3}></img>
                <img src={show4}></img>
            </div>
        </section>

        <hr></hr>

        <section id='Contact'>
            <div className="contact" data-aos="fade-up">
                <h1>สั่งซื้อสินค้าของเรา</h1>
                <div className="contact-container">
                    <a href='https://www.facebook.com/profile.php?id=61571321459986' target='blank'>
                        <div className="contact-box">
                            <img src={face}></img>
                            <h2>ฟาด้าน้ำปลาร้าฮาลาล</h2>
                        </div>
                    </a>
                    <div className="contact-box">
                        <img src={call}></img>
                        <h2>084-199-3291</h2>
                    </div>
                    <div className="contact-box">
                        <img src={line}></img>
                        <h2>@fadafoods</h2>
                    </div>
                    <a href='https://www.tiktok.com/view/product/1731244958149477617?_svg=1&checksum=631db6d293c60ffb3ca93d16184876132aa98f77092f36efb11b2eb8bd1e2e21&encode_params=MIIBLwQM85OFqy50IiW7C8AdBIIBC8xGddPRzUJGgsgR35qu1MuwDnVqUsSnrgsgF4uXJKsmOJ1K51jJWnFSWGIjIhjvQ%2BHp7hqrfS6ofAjFGYrLEFMGDwbGwjBGwY%2BaVRbB8PguPF%2B%2Fq8IQV7pN0J22zlCvojdq9iIjTZDmBaXfL1iWLj1IFoXJrv1DCAHCXyigTOWF%2ByuIIqw8VbSvjjeJ9aYan3hVucI5h4K%2Birivkw4gTrd4GqIxxjKi1W6i6M9SmJhuTUxb1T%2FcoAMLW3yLHj2u1rN%2BW2MUrpESU9SvgHwcbqrFUJwhSLnJAC4YZod%2FVefSGELi2Nel9OI8nkTZ%2BDaxbVf7rTlAoxjKZ%2BD7jr5qXwnGGl17wwKO%2FElIugQQgRTg9qVYJmdJomnjIBWeUA%3D%3D&og_info=%7B%22title%22%3A%22%E0%B8%9F%E0%B8%B2%E0%B8%94%E0%B9%89%E0%B8%B2+%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%AE%E0%B8%B2%E0%B8%A5%E0%B8%B2%E0%B8%A5+Fada+Fermented+fish++sauce%22%2C%22image%22%3A%22https%3A%5C%2F%5C%2Fp16-oec-sg.ibyteimg.com%5C%2Ftos-alisg-i-aphluv4xwc-sg%5C%2F8d93a25f9f5040718778e246630cdb2a~tplv-aphluv4xwc-resize-webp%3A260%3A260.webp%3Fdr%3D15582%26t%3D555f072d%26ps%3D933b5bde%26shp%3D7745054a%26shcp%3D9b759fb9%26idc%3Dmy%26from%3D2001012042%22%7D&sec_user_id=MS4wLjABAAAADawNwxBlxjse2edq4ZEH0PozhRhLOsvChcwYOVoDSGy9zd8ta5iDqXQtl4sXZtGz&share_app_id=1180&share_iid=7521913715392071431&share_link_id=e2d0ef59-d77d-43cd-bffc-612250bfb527&social_share_type=15&timestamp=1751773477&trackParams=%7B%22traffic_source_list%22%3A%5B6%5D%2C%22traffic_source%22%3A6%2C%22enable_shop_tab_popup%22%3A1%2C%22device_id%22%3A%227500878662221317639%22%7D&u_code=d2dcgmjm8c28k6&ug_btm=b3190%2Cb6661&ugbiz_name=UNKNOWN&unique_id=naseerohezor&user_id=6609216208313171969' target='blank'>
                        <div className="contact-box">
                            <img src={tt}></img>
                            <h2>FADA FOODS</h2>
                        </div>
                    </a>
                    <a href='https://shopee.co.th/abang_marget?uls_trackid=530jtfl80048' target='blank'>
                        <div className="contact-box">
                            <img src={shop}></img>
                            <h2>abang market</h2>
                        </div>
                    </a>
                    <a href='https://www.lazada.co.th/shop/flkxtchh?spm=a211g0.store_hp.more_popup.share_this_store&dsource=share&laz_share_info=1957262930_0_200_100068273204_1957264930_null&laz_token=0f9c45d83fe50437de89b880cdc1e8f7&exlaz=e_78%2FCXAnZy6HGip8qo24MCSTeQCjDld4siVQ4kY1ODqrCXvTKdNAtBfrYHUpbt8xr6nejNh6YiYbO7MSdVRSDSLcazjqFN96eD3WnASIas1Y%3D&sub_aff_id=social_share&sub_id2=1957262930&sub_id3=100068273204&sub_id6=CPI_EXLAZ' target='blank'>
                        <div className="contact-box">
                            <img src={laz}></img>
                            <h2>abang market</h2>
                        </div>
                    </a>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Home