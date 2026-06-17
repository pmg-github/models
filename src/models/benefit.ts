export interface BenefitViewModel {
  id: number;
  internalName: string;
  internalDescription: string | null;
  articleReference: string;
  typeId: number;
  titleNL: string;
  titleFR: string;
  titleEN: string | null;
  specsNL: string | null;
  specsFR: string | null;
  specsEN: string | null;
  discountCode: string | null;
  discountValueNL: string | null;
  discountValueFR: string | null;
  discountValueEN: string | null;
  discountLabelNL: string | null;
  discountLabelFR: string | null;
  discountLabelEN: string | null;
  buttonTextNL: string | null;
  buttonTextFR: string | null;
  buttonTextEN: string | null;
  buttonUrlNL: string | null;
  buttonUrlFR: string | null;
  buttonUrlEN: string | null;
  statusId: number;
  validFrom: string | Date | null;
  validUntil: string | Date | null;
  createdAt: string | Date;
  updatedAt: string | Date;
}

