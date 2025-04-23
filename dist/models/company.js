"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCornerPictureModel = exports.CompanyCornerDBModel = exports.CompanyViewModel = void 0;
class CompanyViewModel {
    reference = undefined;
    name = undefined;
    brand = undefined;
    logoUrl = undefined;
    companyCornerPictureUrls = undefined;
    email = undefined;
    website = undefined;
    phone = undefined;
    fax = undefined;
    vatNumber = undefined;
    mainAddressID = undefined;
    mainAddress = undefined;
    interesses = undefined;
}
exports.CompanyViewModel = CompanyViewModel;
class CompanyCornerDBModel {
    ID = undefined;
    Reference = undefined;
    LogoID = undefined;
    HeaderColor = undefined;
    CreationDate = undefined;
    UpdateDate = undefined;
    ShowAddress = undefined;
    ShowTelephone = undefined;
    ShowFax = undefined;
    ShowProducts = undefined;
    ShowCity = undefined;
    ShowWebsite = undefined;
    ShowEmail = undefined;
    HideFinancialData = undefined;
    IsMRK = undefined;
    LinkToWebsite = undefined;
    WebsiteNL;
    WebsiteFR;
    WebsiteEN;
}
exports.CompanyCornerDBModel = CompanyCornerDBModel;
class CompanyCornerPictureModel {
}
exports.CompanyCornerPictureModel = CompanyCornerPictureModel;
