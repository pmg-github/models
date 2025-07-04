import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  Length,
  MaxLength,
} from "class-validator";

export class UserViewModel {
  id: number; // = ContactID
  email: string;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  gender: string | null;
  language: string | null;

  get fullName(): string | undefined {
    let returnValue: string = "";
    if (this.firstName) {
      returnValue += this.firstName;
      returnValue += " ";
    }

    if (this.lastName) {
      returnValue += this.lastName;
    }

    return returnValue;
  }

  constructor(userAPIInterface: UserAPIInterface) {
    this.id = userAPIInterface.id;
    this.email = userAPIInterface.email;
    this.firstName = userAPIInterface.firstName;
    this.lastName = userAPIInterface.lastName;
    this.phone = userAPIInterface.phone;
    this.gender = userAPIInterface.gender;
    this.language = userAPIInterface.language;
  }
}

// Class which will return if the user has an active abo and when it expires
export class UserAboViewModel implements UserAboAPIInterface {
  expiryDate: string | null = null;

  get isActive(): boolean {
    return this.expiryDate != null && new Date(this.expiryDate) > new Date();
  }

  constructor(userAboAPIInterface: UserAboAPIInterface) {
    this.expiryDate = userAboAPIInterface.expiryDate;
  }
}

export interface UserAPIInterface {
  id: number;
  email: string;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  gender: string | null;
  language: string | null;
}

export interface UserAboAPIInterface {
  expiryDate: string | null;
}

export class ContactCreateModel {
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  // For now make them required (maybe change later)
  @IsNotEmpty()
  @MaxLength(30)
  firstName!: string;

  @IsNotEmpty()
  @MaxLength(40)
  lastName!: string;

  @IsOptional()
  @MaxLength(36)
  phone!: string;

  @IsNotEmpty()
  @Length(2, 2)
  lang!: string;

  constructor(data: Partial<ContactCreateModel>) {
    Object.assign(this, data);
  }
}

export class ContactUpdateRequest {
  // For now make them required (maybe change later)
  @IsNotEmpty()
  @MaxLength(30)
  firstName!: string;

  @IsNotEmpty()
  @MaxLength(40)
  lastName!: string;

  @IsOptional()
  @MaxLength(36)
  phone!: string;

  @IsOptional()
  @MaxLength(36)
  language?: string;

  @IsOptional()
  @MaxLength(36)
  sex?: string;

  @IsOptional()
  @MaxLength(4)
  newsletter?: string;

  constructor(data: Partial<ContactUpdateRequest>) {
    Object.assign(this, data);
  }
}

export class EmailCodeRequest {
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(60)
  email!: string;

  @IsNotEmpty()
  @Length(4, 4)
  portalCode!: string;

  @IsNotEmpty()
  @Length(2, 2)
  lang!: string;

  constructor(data: Partial<EmailCodeRequest>) {
    Object.assign(this, data);
  }
}
export class BcEmailCodeRequest {
  @IsOptional()
  // @Transform(({ value }) => (value === "" ? undefined : value))
  @IsEmail()
  @MaxLength(60)
  email!: string;

  @IsNotEmpty()
  @Length(8, 8)
  klnr!: string;

  @IsNotEmpty()
  @Length(2, 2)
  lang!: string;

  constructor(data: Partial<BcEmailCodeRequest>) {
    Object.assign(this, data);
  }
}

export class ValidateTokenRequest {
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(60)
  email!: string;

  @IsNotEmpty()
  @Length(4, 6)
  code!: string;

  @IsOptional()
  language?: string;

  constructor(data: Partial<ValidateTokenRequest>) {
    Object.assign(this, data);
  }
}
export class BcValidateTokenRequest {
  @IsOptional()
  @IsEmail()
  // @Transform(({ value }) => (value === "" ? undefined : value))
  @MaxLength(60)
  email!: string;

  @IsNotEmpty()
  klnr!: string;

  @IsNotEmpty()
  @Length(6, 6)
  code!: string;

  constructor(data: Partial<ValidateTokenRequest>) {
    Object.assign(this, data);
  }
}
