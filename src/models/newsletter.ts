import {
  isNotEmpty,
  IsNotEmpty,
  Length,
  MaxLength,
  ValidateIf,
} from "class-validator";

export class NewsletterContentType {
  id: number | undefined = undefined;
  reference: string | undefined = undefined;
  name: string | undefined = undefined;
}
export interface NewsletterProjectModel {
  id: number;
  code: string;
  name: string | null;
  date: Date;
  numberOfRecipients: number;
  numberOfSuccess: number;
  numberOfFailed: number;
  numberOfBounced: number;
  numberOfOpened: number;
  numberOfClicks: number;
  orderByValue: string;
}

export class NewsletterModel {
  id: number | undefined = undefined;
  projectCode: string | undefined = undefined;
  languageCode: string | undefined = undefined;
  subject: string | undefined = undefined;
  introTitle: string | undefined = undefined;
  introDescription: string | undefined = undefined;
  introName: string | undefined = undefined;
  introFunction: string | undefined = undefined;
  introFileId: number | undefined = undefined;
  pollCode: string | undefined = undefined;
  statusId: number | undefined = undefined;
  statusReference: string | undefined = undefined;
  statusName: string | undefined = undefined;
  scheduledOn: Date | undefined = undefined;
  timestampStart: Date | undefined = undefined;
  timestampEnd: Date | undefined = undefined;
  numberOfRecipients: number | undefined = undefined;
  numberOfSuccess: number | undefined = undefined;
  numberOfFailed: number | undefined = undefined;
  numberOfBounced: number | undefined = undefined;
  numberOfOpened: number | undefined = undefined;
  numberOfClicks: number | undefined = undefined;
}

export class NewsletterContentModel {
  id: number | undefined = undefined;
  typeId: number | undefined = undefined;
  projectCode: string | undefined = undefined;
  languageCode: string | undefined = undefined;
  articleReference: string | undefined = undefined;
  sortOrder: number | undefined = undefined;
  title: string | undefined = undefined;
  description: string | undefined = undefined;
  moreLabel: string | undefined = undefined;
  moreLink: string | undefined = undefined;
  infoLabel: string | undefined = undefined;
  infoLink: string | undefined = undefined;
  fileId: number | undefined = undefined;
  imageUrl: string | undefined = undefined;
  url: string | undefined = undefined;
}

export interface NewsletterOrderModel {
  reference: string;
  articleReference: string | null;
}

export interface NewsletterQuicklinkModel {
  id: number;
  articleReference: string | null;
  html: string;
  sortOrder: number;
}

export interface NewsletterTileModel {
  id: number;
  reference: string;
  date: Date;
  displayDate: string;
  title: string;
  redirectUrl: string;
}

export interface NewsletterMetaDataModel {
  id: number;
  projectCode: string;
  introTitle: string;
  introDescription: string;
  introName: string | null;
  introFunction: string | null;
  introImageUrl: string | null;
  pollCode: string | null;
}

export interface NewsletterNewsModel {
  id: number;
  articleReference: string;
  title: string;
  date: string;
}

export class NewsletterMetaDataCreateRequest {
  @IsNotEmpty()
  @Length(12, 12)
  projectCode!: string;

  @IsNotEmpty()
  @Length(2, 2)
  language!: string;
}

export class NewsletterIntroSaveRequest {
  @IsNotEmpty()
  id!: number;

  @IsNotEmpty()
  @MaxLength(255)
  introTitle!: string;

  @IsNotEmpty()
  introDescription!: string;

  // optional
  @ValidateIf((o) => o.introName != undefined)
  @MaxLength(255)
  introName!: string | undefined;
  @ValidateIf((o) => o.introFunction != undefined)
  @MaxLength(255)
  introFunction: string | undefined;

  constructor(data: Partial<NewsletterIntroSaveRequest>) {
    Object.assign(this, data);
  }
}

export class NewsletterQuicklinkAddRequest {
  @IsNotEmpty()
  @Length(12, 12)
  jobCode!: string;

  @IsNotEmpty()
  @Length(2, 2)
  language!: string;

  @ValidateIf((o) => o.articleReference != undefined)
  @Length(15, 15)
  articleReference!: string | undefined;

  @IsNotEmpty()
  @MaxLength(500)
  html!: string;

  constructor(data: Partial<NewsletterQuicklinkAddRequest>) {
    Object.assign(this, data);
  }
}

export class NewsletterQuicklinkSaveRequest {
  @IsNotEmpty()
  id!: number;

  @IsNotEmpty()
  @MaxLength(500)
  html!: string;

  constructor(data: Partial<NewsletterQuicklinkSaveRequest>) {
    Object.assign(this, data);
  }
}

export class NewsletterArticleAddRequest {
  @IsNotEmpty()
  @Length(12, 12)
  jobCode!: string;

  @IsNotEmpty()
  @Length(2, 2)
  language!: string;

  @IsNotEmpty()
  @Length(15, 15)
  articleReference!: string;

  constructor(data: Partial<NewsletterArticleAddRequest>) {
    Object.assign(this, data);
  }
}

export class NewsletterArticleSaveRequest {
  @IsNotEmpty()
  id!: number;

  @IsNotEmpty()
  @Length(12, 12)
  jobCode!: string;

  @IsNotEmpty()
  @Length(2, 2)
  language!: string;

  @IsNotEmpty()
  @Length(15, 15)
  articleReference!: string;

  //articleTypeId?
  //sortOrder? (andere API)
  // colorId? (unused)

  @IsNotEmpty()
  typeId!: number; // viewtypeId

  @IsNotEmpty()
  fileId!: number;

  // quicklicks => not here!

  @IsNotEmpty()
  title!: string;
  @IsNotEmpty()
  description!: string;
  @IsNotEmpty()
  moreLabel!: string;

  constructor(data: Partial<NewsletterArticleSaveRequest>) {
    Object.assign(this, data);
  }
}

export class NewsletterPollAddRequest {
  @IsNotEmpty()
  @Length(12, 12)
  pollCode!: string;

  @IsNotEmpty()
  @Length(12, 12)
  projectCode!: string;

  @IsNotEmpty()
  @Length(2, 2)
  language!: string;

  constructor(data: Partial<NewsletterPollAddRequest>) {
    Object.assign(this, data);
  }
}

export class NewsletterNewsAddRequest {
  @IsNotEmpty()
  @Length(12, 12)
  jobCode!: string;

  @IsNotEmpty()
  @Length(2, 2)
  language!: string;

  @IsNotEmpty()
  @Length(15, 15)
  articleReference!: string;
}

export class NewsletterNewsSaveRequest {
  @IsNotEmpty()
  id!: number;

  @IsNotEmpty()
  @MaxLength(255)
  title!: string;

  @IsNotEmpty()
  @MaxLength(20)
  date!: string;
}
