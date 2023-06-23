import Link from "next/link";
import styles from "./../styles/Games.module.css";
const ShowGames = ({ items }) => {
  return (
    <div class="col-md-6 col-lg-4 pb-3 mt-4 text-end">
      <div class="card bg-white border-white border-0" id={styles.cardCustom}>
        <div class={styles.cardCustomImg}></div>
        <div class={styles.cardCustomAvatar}>
          <img class="img-fluid" src={items.image} alt="Avatar" />
        </div>
        <div class="card-body">
          <h4 class="card-title">{items.name}</h4>
          <p class="card-text">{items.des.substring(0, 120)}</p>
        </div>
        <div
          class="card-footer text-start
        "
        >
          <Link href={`/products/${items.slug}`} class="btn btn-primary">
            اطلاعات بیشتر
          </Link>
          <Link
            href="#"
            class="btn btn-outline-primary"
            style={{ marginLeft: "15px" }}
          >
            خرید
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ShowGames;
