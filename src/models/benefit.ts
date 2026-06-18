export interface BenefitViewModel {
  id: number;
  articleReference: string;
  typeId: number;
  title: string;
  specs: string | null;
  discountCode: string | null;
  discountValue: string | null;
  discountLabel: string | null;
  buttonText: string | null;
  buttonUrl: string | null;
  statusId: number;
  validFrom: string | Date | null;
  validUntil: string | Date | null;
}

