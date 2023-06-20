import Link from "next/link";
const ShowGames = ({ items }) => {
  return (
    <div className="col-lg-4 mt-5">
      <div className="card shadow-lg bg-dark text-end">
        <img src={items.image} className="card-img-top" alt="..." />
        <div className="card-body" style={{ marginRight: "30px" }}>
          <h3 className="card-title text-light mt-5">{items.name}</h3>
          <h4 className="card-title text-light mt-4">${items.price}</h4>
          <p className="card-text text-light mt-3">
            {items.des.substring(0, 5)}
          </p>
          <Link
            href={`/products/${items.slug}`}
            className="btn btn-secondary mt-3"
          >
            ...بیشتر درباره
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ShowGames;
