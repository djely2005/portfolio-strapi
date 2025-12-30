import type { Schema, Struct } from '@strapi/strapi';

export interface ProjectTechnology extends Struct.ComponentSchema {
  collectionName: 'components_project_technologies';
  info: {
    displayName: 'Technology';
    icon: 'server';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'project.technology': ProjectTechnology;
    }
  }
}
