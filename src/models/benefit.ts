import { FileButtonViewModel } from "./files";
import { SelectOptionViewModel } from "./selectoption";

export interface BenefitViewModel {
  id: number;
  articleReference: string;
  typeId: number;
  customerNumber: string | null;
  customerName: string | null;
  customerLogoId: number | null;
  customerLogoUrl: string | null;
  customerWebsite: string | null;
  label: string | null;
  title: string;
  subTitle: string | null;
  specsLabel: string | null;
  specs: string | null;
  discountCodeLabel: string | null;
  discountCode: string | null;
  discountValue: string | null;
  discountLabel: string | null;
  buttonText: string | null;
  buttonUrl: string | null;
  statusId: number;
  validFrom: string | Date | null;
  validUntil: string | Date | null;
  disclaimer: string | null;
  portals: string[];
}

export interface BenefitListModel {
  id: number;
  articleReference: string;
  articleTilePictureUrl: string | null;
  customerLogoUrl: string | null;
  label: string | null;
  title: string;
  subTitle: string | null;
  specs: string | null;
}

export interface BoBenefitLocaleViewModel {
  customerName?: string;
  customerLogoId?: FileButtonViewModel;
  customerWebsite?: string;
  label?: string;
  title?: string;
  subTitle?: string;
  specsLabel?: string;
  specs?: {
    benefits: {
      labelNl: string;
      labelFr: string;
      labelEn: string;
      included: boolean;
    }[];
  };
  discountCodeLabel?: string;
  discountValue?: string;
  discountLabel?: string;
  buttonText?: string;
  buttonUrl?: string;
  disclaimer?: string;
}

export interface BoBenefitViewModel {
  id?: number;
  internalName?: string;
  internalDescription?: string;
  article: SelectOptionViewModel;
  type: SelectOptionViewModel;
  customerNumber?: string;
  discountCode?: string;
  status: SelectOptionViewModel;
  validFrom?: string;
  validUntil?: string;
  nl: BoBenefitLocaleViewModel;
  fr: BoBenefitLocaleViewModel;
  en: BoBenefitLocaleViewModel;
}
