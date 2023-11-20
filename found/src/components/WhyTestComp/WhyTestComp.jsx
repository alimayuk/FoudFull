import "./WhyTestComp.css";
import Faq from "react-faq-component";
import Slider from "react-slick";
const WhyTestComp = () => {
  const data = {
    title: "Why Choose Us",
    rows: [
      {
        title: "Easily Find Logistics",
        content:
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.   Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      },
      {
        title: "Delivering Results for Industry Leaders",
        content:
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ",
      },
      {
        title: "Fast and Secure Transportation",
        content:
          "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.",
      },
    ],
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="WhyTestComp">
      <div className="container">
      <div className="Whywrapper">
      <div className="testimonial">
          {" "}
          <div className="Testtitle">
          <span className="span">TESTIMONIALS</span>
          <h2> Happy Customer</h2>
          </div>
          <Slider className="slider" {...settings}>
            <div className="sliderItem">
              <img className="slideImg" src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="title">
              <h3>John Doe</h3>
              <p>CEO, Founder</p>
              </div>
              <p className="des">
              “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
              </p>
              
            </div>
            <div className="sliderItem">
              <img className="slideImg" src="https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="title">
              <h3>Rob Smith</h3>
              <p>Product Designer at Twitter</p>
              </div>
              <p className="des">
              “A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.”
              </p>
              
            </div>
            <div className="sliderItem">
              <img className="slideImg" src="https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="title">
              <h3>James Woodland</h3>
              <p>Designer at Facebook</p>
              </div>
              <p className="des">
              “When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.”
              </p>
              
            </div>
          </Slider>
        </div>
        <div className="faq">
          <span className="span">WHY US</span>
          <Faq styles={{ rowContentPaddingTop: "10px" }} data={data} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default WhyTestComp;
