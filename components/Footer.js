import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="text-center bg-dark text-white">
        <div className="container">
          <section className="mt-5">
            <div className="row text-center d-flex justify-content-center pt-5">
              <div className="col-md-4">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!" className="text-white">
                    About us
                  </a>
                </h6>
              </div>
              <div className="col-md-4">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!" className="text-white">
                    Products
                  </a>
                </h6>
              </div>
              <div className="col-md-4">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="#!" className="text-white">
                    Shiping Cart
                  </a>
                </h6>
              </div>
            </div>
          </section>
          <hr className="my-5" />
          <section className="mb-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="text-center p-3 bg-secondary">
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
}
