export class NewsletterProjectModel {
  code: string | undefined = undefined;
  name: string | undefined = undefined;
  date: Date | undefined = undefined;
  numberOfRecipients: number | undefined = undefined;
  numberOfSuccess: number | undefined = undefined;
  numberOfFailed: number | undefined = undefined;
  numberOfBounced: number | undefined = undefined;
  numberOfOpened: number | undefined = undefined;
  numberOfClicks: number | undefined = undefined;
}

export class NewsletterModel {
  id: number | undefined = undefined;
  projectCode: string | undefined = undefined;
  languageCode: string | undefined = undefined;
  subject: string | undefined = undefined;
  date: Date | undefined = undefined;
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
}
