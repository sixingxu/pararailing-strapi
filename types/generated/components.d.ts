import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsImages extends Struct.ComponentSchema {
  collectionName: 'components_components_images';
  info: {
    displayName: 'images';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ComponentsIntro extends Struct.ComponentSchema {
  collectionName: 'components_components_intros';
  info: {
    displayName: 'intro';
  };
  attributes: {
    intro: Schema.Attribute.Blocks;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    description: '';
    displayName: 'link';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface LayoutIntroText extends Struct.ComponentSchema {
  collectionName: 'components_layout_intro_texts';
  info: {
    description: '';
    displayName: 'intro text';
  };
  attributes: {
    intro: Schema.Attribute.RichText;
    link: Schema.Attribute.Component<'components.link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.images': ComponentsImages;
      'components.intro': ComponentsIntro;
      'components.link': ComponentsLink;
      'layout.intro-text': LayoutIntroText;
    }
  }
}
