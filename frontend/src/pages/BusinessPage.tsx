import BusinessHeader from "@/components/business/BusinessHeader";
import { useBusiness } from "@/components/category/hooks";
import { useParams } from "react-router-dom";
import { Business } from "@/components/business/types";
import styles from "./BusinessPage.module.scss";
import BusinessDescription from "@/components/business/BusinessDescription";
import BusinessGallery from "@/components/business/BusinessGallery";
import BusinessSimilarBusinesses from "@/components/business/BusinessSimilarBusinesses";
import Button from "@/components/common/Button";
import { PiNotePencil } from "react-icons/pi";

const BusinessPage = () => {
  const { id } = useParams();
  const { data: business } = useBusiness(id) as { data: Business };

  return (
    <div className={styles.businessContainer}>
      <BusinessHeader business={business} />
      <div className={styles.businessBody}>
        <div className={styles.businessBodyLeftCol}>
          <BusinessDescription business={business} />
          <BusinessGallery business={business} />
        </div>
        <div className={styles.businessBodyRightCol}>
          <Button className={styles.bookingBtn} large>
            <PiNotePencil className={styles.bookingIcon} />
            <span>Book Appointment</span>
          </Button>
          <BusinessSimilarBusinesses business={business} />
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
