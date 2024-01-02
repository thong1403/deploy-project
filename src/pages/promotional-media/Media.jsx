import "./Media.css";
import imageContent from "../../image/THE THAO_jpg.jpg";
const Media = () => {
  return (
    <div className="media-container text-center">
      <h2>
        Truyền thông cổ động - <span>Triển lãm</span>{" "}
      </h2>
      <div className="row my-5 card-media pb-5 ">
        <div className="col-5 card-image">
          <img src={imageContent} alt="" className="w-75 h-100" />
          
        </div>
        <div className="col-7 conten-card">
            <h4>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              modi blanditiis ipsum consequatur neque aliquid accusamus dicta
              quis, odio animi.
            </h4>
            <p>24/12/2023 14:42</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
              ab! Quam, sed. Nesciunt provident eum temporibus assumenda? Culpa
              minus fuga omnis consequatur? Sequi illo praesentium odit maxime
              eum tempora quos!
            </p>
            <button>Xem tiếp</button>
        </div>
      </div>
      <div className="row my-5 card-media pb-5 ">
        <div className="col-5 card-image">
          <img src={imageContent} alt="" className="w-75 h-100" />
          
        </div>
        <div className="col-7 conten-card">
            <h4>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              modi blanditiis ipsum consequatur neque aliquid accusamus dicta
              quis, odio animi.
            </h4>
            <p>24/12/2023 14:42</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
              ab! Quam, sed. Nesciunt provident eum temporibus assumenda? Culpa
              minus fuga omnis consequatur? Sequi illo praesentium odit maxime
              eum tempora quos!
            </p>
            <button>Xem tiếp</button>
        </div>
      </div>
      <div className="row my-5 card-media pb-5 ">
        <div className="col-5 card-image">
          <img src={imageContent} alt="" className="w-75 h-100" />
          
        </div>
        <div className="col-7 conten-card">
            <h4>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              modi blanditiis ipsum consequatur neque aliquid accusamus dicta
              quis, odio animi.
            </h4>
            <p>24/12/2023 14:42</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
              ab! Quam, sed. Nesciunt provident eum temporibus assumenda? Culpa
              minus fuga omnis consequatur? Sequi illo praesentium odit maxime
              eum tempora quos!
            </p>
            <button>Xem tiếp</button>
        </div>
      </div>
    </div>
  );
};

export default Media;
