import imageMovie from "../../image/z4042263610199_ac6e69bf6f323b5fcf7a9b2df33b74de.jpg";
import "./public.css"
const PublicArt = () => {
  return (
    <div>
      <h2 className="title my-5">Nghệ thuật quần chúng</h2>
      <div className="col-12">
        <video width="100%" height="100%" controls>
          <source
            src="https://youtu.be/ZaeQ6eJPFfw?si=qdiFxf-XTzdgTzmH"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="col-12">
        <h3 className=" mt-5 see-more-title">Xem thêm</h3>
        <div className="d-flex card-movie-content mt-5 pb-5">
          <img src={imageMovie} alt="" className="w-25 mx-3" />
          <div>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste esse
            labore voluptates ducimus numquam nisi odit mollitia ratione quaerat
            deserunt!
          </h3>
          <p>24/12/2023 14:42</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed vitae,
            tempore asperiores, accusantium quisquam ab repellat iure
            dignissimos dolorem voluptatem delectus. Nam inventore voluptates
            nisi obcaecati consequuntur, vitae dolorem voluptas.
          </p>
          <button>Xem tiếp</button>
          </div>
          
        </div>
        <div className="d-flex card-movie-content mt-5 pb-5">
          <img src={imageMovie} alt="" className="w-25 mx-3" />
          <div>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste esse
            labore voluptates ducimus numquam nisi odit mollitia ratione quaerat
            deserunt!
          </h3>
          <p>24/12/2023 14:42</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed vitae,
            tempore asperiores, accusantium quisquam ab repellat iure
            dignissimos dolorem voluptatem delectus. Nam inventore voluptates
            nisi obcaecati consequuntur, vitae dolorem voluptas.
          </p>
          <button>Xem tiếp</button>
          </div>
          
        </div>
        <div className="d-flex card-movie-content mt-5 pb-5">
          <img src={imageMovie} alt="" className="w-25 mx-3" />
          <div>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste esse
            labore voluptates ducimus numquam nisi odit mollitia ratione quaerat
            deserunt!
          </h3>
          <p>24/12/2023 14:42</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed vitae,
            tempore asperiores, accusantium quisquam ab repellat iure
            dignissimos dolorem voluptatem delectus. Nam inventore voluptates
            nisi obcaecati consequuntur, vitae dolorem voluptas.
          </p>
          <button>Xem tiếp</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PublicArt;
