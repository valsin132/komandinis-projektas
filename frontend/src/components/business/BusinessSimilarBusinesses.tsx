import styles from "./BusinessSimilarBusinesses.module.scss";
import { Business } from "./types";

interface BusinessSimilarBusinessesProps {
  business: Business;
}

const BusinessSimilarBusinesses = ({
  business,
}: BusinessSimilarBusinessesProps) => {
  if (!business) {
    return <></>;
  }

  return (
    <div className={styles.BusinessSimilarBusinesses}>
      <h2 className={styles.title}>Similar Businesses</h2>
      <div className={styles.similarBusinessContainer}>
        <div className={styles.businessSimilarBlock}>
          <img
            src={business.images[0].url}
            alt="Business"
            className={styles.similarImage}
          />
          <div className={styles.businessSimilarInfo}>
            <h3 className={styles.name}>{business.name}</h3>
            <p className={styles.category}>{business.contactPerson}</p>
            <p className={styles.category}>{business.address}</p>
          </div>
        </div>
        <div className={styles.businessSimilarBlock}>
          <img
            src={business.images[0].url}
            alt="Business"
            className={styles.similarImage}
          />
          <div className={styles.businessSimilarInfo}>
            <h3 className={styles.name}>{business.name}</h3>
            <p className={styles.category}>{business.contactPerson}</p>
            <p className={styles.category}>{business.address}</p>
          </div>
        </div>
        <div className={styles.businessSimilarBlock}>
          <img
            src={business.images[0].url}
            alt="Business"
            className={styles.similarImage}
          />
          <div className={styles.similarBusinessInfo}>
            <h3 className={styles.name}>{business.name}</h3>
            <p className={styles.category}>{business.contactPerson}</p>
            <p className={styles.category}>{business.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSimilarBusinesses;
