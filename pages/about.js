import Layout from "./../components/Layout";
import styles from "./../styles/About.module.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const About = () => {
  return (
    <Layout title="sjfsfjls">
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutLeft}>
          <div className={styles.aboutLeftContent}>
            <div>
              <div className={styles.shadow}>
                <div className={styles.aboutImg}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIgYqjNVQSYlcOONsKMfyvLJWY-MGgtqwfqMx7-2kjzg&s"
                    alt="about image"
                  />
                </div>
              </div>

              <h2>
                کافه
                <br />
                گیم
              </h2>
              <h3>بازی های متناوه</h3>
            </div>

            <ul className={styles.icons}>
              <li>
                <FacebookRoundedIcon fontSize="large" />
              </li>
              <li>
                <InstagramIcon fontSize="large" />
              </li>
              <li>
                <TelegramIcon fontSize="large" />
              </li>
              <li>
                <WhatsAppIcon fontSize="large" />
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.aboutRight}>
          <h1>
            <span>!</span>سلام
          </h1>
          <h2>اینجا این است که ما کی هستیم و چه کار می کنی م</h2>
          <div className={styles.aboutBtns}></div>

          <div className={styles.aboutPara}>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است،
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default About;
