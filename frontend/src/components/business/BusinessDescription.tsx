import styles from "./BusinessDescription.module.scss";
import { Business } from "./types";

interface BusinessDescriptionProps {
  business: Business;
}

const BusinessDescription = ({ business }: BusinessDescriptionProps) => {
  if (!business) {
    return <></>;
  }

  return (
    <div className={styles.BusinessDescription}>
      <h2 className={styles.descriptionTitle}>Description</h2>
      <p className={styles.description}>{business.about}</p>
    </div>
  );
};

export default BusinessDescription;
