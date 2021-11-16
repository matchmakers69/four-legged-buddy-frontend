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

export interface IMembers {
  members: IMember[];
}
