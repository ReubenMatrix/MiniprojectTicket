import "./PropertyList.css";

const PropertyList = () => {
  return (
      <div className="pList">
          <div className="pListItem">
              <img
                  src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
                  alt=""
                  className="pListImg"
              />
              <div className="pListTitles">
                  <h1>Hotels</h1>
                  <h2>233 hotels</h2>
              </div>
          </div>
          <div className="pListItem">
              <img
                  src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
                  alt=""
                  className="pListImg"
              />
              <div className="pListTitles">
                  <h1>Apartments</h1>
                  <h2>200 Apartments</h2>
              </div>
          </div>
          <div className="pListItem">
              <img
                  src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
                  alt=""
                  className="pListImg"
              />
              <div className="pListTitles">
                  <h1>Resorts</h1>
                  <h2>500 Resorts</h2>
              </div>
          </div>
          <div className="pListItem">
              <img
                  src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
                  alt=""
                  className="pListImg"
              />
              <div className="pListTitles">
                  <h1>Villas</h1>
                  <h2>100 Villas</h2>
              </div>
          </div>

          <div className="pListItem">
              <img
                  src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
                  alt=""
                  className="pListImg"
              />
              <div className="pListTitles">
                  <h1>Cabins</h1>
                  <h2>600 Cabins</h2>
              </div>
          </div>

          <div className="pListItem">
              <img
                  src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                  className="pListImg"
              />
              <div className="pListTitles">
                  <h1>Inns</h1>
                  <h2>2331 inns</h2>
              </div>
          </div>
      </div>
  );
};

export default PropertyList;