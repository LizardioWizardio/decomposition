import './App.css';
import InfoBlock from "./components/InfoBlock";
import InfoLink from "./components/InfoLink";
import SearchBar from "./components/SearchBar";
import Banner from "./components/Banner";
import WeatherWidget from "./components/WeatherWidget";

function App() {
  return (
      <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
          <InfoBlock
              title={
                <span>
                  <span style={{margin: "0.5rem"}}>Cейчас в СМИ</span>
                  <span style={{margin: "0.5rem", color: "lightblue"}}>В Германии</span>
                  <span style={{margin: "0.5rem", color: "lightblue"}}>Рекомендуем</span>
                </span>
              }
              titleRef={"#"}
          >
              <InfoLink
                  img={"https://play-lh.googleusercontent.com/58CxawGskVNKYzTR97MajjmqxNGQB07tjAGfUGEtD8RGvdvQdC11UizTk-aQjkpHCE0"}
                  text={"Путин подписал закон, запрещающий нарушать закон"}
                  linkRef={"#"}
              />
              <InfoLink
                  img={"https://play-lh.googleusercontent.com/58CxawGskVNKYzTR97MajjmqxNGQB07tjAGfUGEtD8RGvdvQdC11UizTk-aQjkpHCE0"}
                  text={"Путин подписал закон, запрещающий нарушать закон"}
                  linkRef={"#"}
              />
              <InfoLink
                  img={"https://play-lh.googleusercontent.com/58CxawGskVNKYzTR97MajjmqxNGQB07tjAGfUGEtD8RGvdvQdC11UizTk-aQjkpHCE0"}
                  text={"Путин подписал закон, запрещающий нарушать закон"}
                  linkRef={"#"}
              />
              <InfoLink
                  img={"https://play-lh.googleusercontent.com/58CxawGskVNKYzTR97MajjmqxNGQB07tjAGfUGEtD8RGvdvQdC11UizTk-aQjkpHCE0"}
                  text={"Путин подписал закон, запрещающий нарушать закон"}
                  linkRef={"#"}
              />
              <InfoLink
                  text={"Курсы валют"}
                  linkRef={"#"}
              />
          </InfoBlock>
          <InfoBlock
              titleRef={"#"}
              img={"https://previews.123rf.com/images/emukhin/emukhin1307/emukhin130700019/21460332-square-frame-with-round-corner-stylized-as-a-school-chalkboard-with-grunge-wooden-border-.jpg"}
              title={"Работа над ошибками"}
          >
              <InfoLink
                  text={"Смотрите на Яндексе и запоминайте"}
                  linkRef={"#"}
              />
          </InfoBlock>
          <SearchBar />
          <Banner img="https://banner2.cleanpng.com/20180326/fke/kisspng-sales-web-banner-discounts-and-allowances-sale-5ab8ff1561ae29.2980454515220733654001.jpg"/>
          <InfoBlock title={"Погода"} titleRef={"#"}>
              <WeatherWidget />
          </InfoBlock>
          <InfoBlock title={"Карта Германии"} titleRef={"#"}>
              <InfoLink text={"Расписания"} linkRef={"#"} />
          </InfoBlock>
          <InfoBlock title={"Эфир"} titleRef={"#"}>
              <InfoLink
                  img={"https://e7.pngegg.com/pngimages/886/387/png-clipart-line-triangle-brand-play-button-play-button-icon-angle-text-thumbnail.png"}
                  text={"Управление как искусство"}
                  linkRef={"#"}
              />
              <InfoLink
                  img={"https://e7.pngegg.com/pngimages/886/387/png-clipart-line-triangle-brand-play-button-play-button-icon-angle-text-thumbnail.png"}
                  text={"Управление как искусство"}
                  linkRef={"#"}
              />
              <InfoLink
                  img={"https://e7.pngegg.com/pngimages/886/387/png-clipart-line-triangle-brand-play-button-play-button-icon-angle-text-thumbnail.png"}
                  text={"Управление как искусство"}
                  linkRef={"#"}
              />
          </InfoBlock>
          <InfoBlock title={"Телепрограмма"} titleRef={"#"}>
              <InfoLink
                  text={<span>02:00 THT. Best <span style={{color: "gray"}}>THT International</span></span>}
                  linkRef={"#"}
              />
              <InfoLink
                  text={<span>02:00 THT. Best <span style={{color: "gray"}}>THT International</span></span>}
                  linkRef={"#"}
              />
              <InfoLink
                  text={<span>02:00 THT. Best <span style={{color: "gray"}}>THT International</span></span>}
                  linkRef={"#"}
              />
          </InfoBlock>
          <InfoBlock title={"Посещаемое"} titleRef={"#"}>
              <InfoLink
                  text={<span><b>Недвижимость</b> — о сталинках</span>}
                  linkRef={"#"}
              />
              <InfoLink
                  text={<span><b>Недвижимость</b> — о сталинках</span>}
                  linkRef={"#"}
              />
              <InfoLink
                  text={<span><b>Недвижимость</b> — о сталинках</span>}
                  linkRef={"#"}
              />
          </InfoBlock>
      </div>
  );
}

export default App;
