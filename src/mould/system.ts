// 系統設置 送後端
export class SystemSettingRequest {
  address: string;
  copyright: string;
  fax: string;
  id: number;
  phone: string;
  vision: string;
  slogan: string;
  aboutUs: string;

  constructor(data: SystemSettingRequest) {
    this.address = data.address;
    this.copyright = data.copyright;
    this.fax = data.fax;
    this.id = 0;
    this.phone = data.phone;
    this.vision = data.vision;
    this.slogan = data.slogan;
    this.aboutUs = data.aboutUs;
  }
}

// 聯絡我們列表
export class ContactListRequest {
  page: number = 1;
  limit: number = 10;

  constructor(data: ContactListRequest) {
    this.page = data.page;
    this.limit = data.limit;
  }
}
