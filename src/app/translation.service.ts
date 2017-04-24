import { Injectable } from '@angular/core';

@Injectable()
export class TranslationService {

  private translations = [
    { language: "en-GB", resources: [ { key: "greeting", translation:"hello"  } ]  },
    { language: "en-FR", resources: [ { key: "greeting", translation:"bonjour" } ]  }
  ];

  constructor() { }

  getResource(language:string, key:string):string {
    var resource = this.translations.find(o => o.language == language).resources.find(o => o.key == key);  

    if (resource) {
      return resource.translation;
    } else {
      return `~${key}`;
    }    
  }

}
