export interface IFormatItem {
  name: string;
  url: string;
}

export interface IImage {
  _id: string;
  name?: string;
  alternativeText?: string;
  url: string;
  formats: {
    thumbnail: IFormatItem;
    medium: IFormatItem;
    small: IFormatItem;
  };
}

export interface IMember {
  id: string;
  slug: string;
  age: string;
  breed: string;
  name: string;
  intro: string;
  image: IImage;
  location: string;
}

export interface IUserMember {
  id: string;
  age: string;
  breed: string;
  intro: string;
  name: string;
  slug: string;
}

export interface IUserMembers {
  members: IUserMember;
}

export interface IMembers {
  members: IMember[];
}
