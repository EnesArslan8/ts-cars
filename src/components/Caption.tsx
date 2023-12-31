import { useState, ChangeEvent } from "react";
import brand from '../brands.json'

interface IFilterInput {
  text: string;
  handleInputChange:any
}

const Caption = ({handleInputChange,text}:IFilterInput) => {
  // const [text, setText] = useState<string>("");
  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setText(e.target.value);
    
  //   brand.filter((item)=>{
  //     if(item.name.includes(text)){
  //       return item
  //     }
  //   })
  // };
  return (
    <div className="width filter">
      <div className="caption">
        <div className="captionArea">
          <p>
            Baş döndürücü hızlarıyla özgürlüğün sembolü, teknolojinin ve
            mühendisliğin başyapıtları: Arabalar. İnsanlığın ulaşım ihtiyacını
            karşılamakla kalmayıp aynı zamanda birer sanat eseri haline gelen bu
            taşıtlar, hayatımızın ayrılmaz bir parçası haline gelmiştir.
            Günümüzde, yolları süsleyen farklı modellerde binlerce marka ve
            model araç bulunuyor. Her biri kendi benzersiz tasarımı, teknolojik
            özellikleri ve marka imzasıyla kendine özgü bir tarz
            sunuyor.Otomotiv sektörü, yıllar içinde inovasyon ve rekabetin
            birleşimiyle sürekli gelişiyor ve yeni teknolojilere öncülük ediyor.
            Araba markaları, sadece ulaşımın ötesinde, bir yaşam tarzının da bir
            yansımasıdır.
          </p>
          <p>
            Kimi markalar aile dostu modelleriyle bilinirken, bazıları lüks ve
            performansla öne çıkar. Elektrikli araçlardan otonom sürüş
            sistemlerine kadar, otomotiv dünyası geleceğin teknolojisini
            bugünden şekillendiriyor. Bu yazıda, dünyanın dört bir yanından
            farklı araba markalarını tanıyacak ve onların sektöre kattığı
            yenilikçi yaklaşımları keşfedeceksiniz. Her markanın kendi hikayesi,
            vizyonu ve değerleri bulunuyor. Bu yazı serisi boyunca, her bir
            markanın kendine özgü özelliklerini ve sektördeki etkisini yakından
            inceleyeceğiz. Hazır olun, çünkü araba markalarının sizi şaşırtacak
            bir dünyasına doğru bir yolculuğa çıkıyoruz.
          </p>
        </div>
        <div className="filterArea">
          <input
            className="filterInput"
            value={text}
            onChange={handleInputChange}
            type="text"
            placeholder="Search a brand..."
          />
        </div>
      </div>
    </div>
  );
};

export default Caption;
