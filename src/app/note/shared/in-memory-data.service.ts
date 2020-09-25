import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb(reqInfo?: RequestInfo): {} {
    const notes = [
      { id: 1, content: 'Lorem ipsum #dolor sit amet consectetur adipisicing @elit. Rerum, quae.', hashTags: ['dolor'], mentions: ['elit'] },
      { id: 2, content: 'Perferendis, dolorem illum #nesciunt tenetur #quae dicta @quia nostrum? Eum.', hashTags: ['nesciunt', 'quae'], mentions: ['quia'] },
      { id: 3, content: 'Perferendis, dolorem illum #nesciunt tenetur #quae dicta @quia nostrum? Eum.', hashTags: ['nesciunt', 'quae'], mentions: ['quia'] },
      { id: 4, content: 'Perferendis, dolorem illum #nesciunt tenetur #quae dicta @quia nostrum? Eum.', hashTags: ['nesciunt', 'quae'], mentions: ['quia'] },
      { id: 5, content: 'Perferendis, dolorem illum #nesciunt tenetur #quae dicta @quia nostrum? Eum.', hashTags: ['nesciunt', 'quae'], mentions: ['quia'] },
      { id: 6, content: 'Perferendis, dolorem illum #nesciunt tenetur #quae dicta @quia nostrum? Eum.', hashTags: ['nesciunt', 'quae'], mentions: ['quia'] },
      { id: 7, content: 'Perferendis, dolorem illum #nesciunt tenetur #quae dicta @quia nostrum? Eum.', hashTags: ['nesciunt', 'quae'], mentions: ['quia'] },
      { id: 8, content: 'Perferendis, dolorem illum #nesciunt tenetur #quae dicta @quia nostrum? Eum.', hashTags: ['nesciunt', 'quae'], mentions: ['quia'] },
      { id: 9, content: 'Perferendis, dolorem illum #nesciunt tenetur #quae dicta @quia nostrum? Eum.', hashTags: ['nesciunt', 'quae'], mentions: ['quia'] },
      { id: 10, content: 'Perferendis, dolorem illum #nesciunt tenetur #quae dicta @quia nostrum? Eum.', hashTags: ['nesciunt', 'quae'], mentions: ['quia'] },
    ];
    return { notes };
  }
}









