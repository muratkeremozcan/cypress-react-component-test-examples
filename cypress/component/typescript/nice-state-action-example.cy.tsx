import App from './nice-state-action-example'

describe('App', () => {
  it('should get data and display', () => {
    cy.intercept('GET', 'https://hn.algolia.com/**', { body: data, delay: 100 })
    cy.mount(<App />)
    cy.contains('Loading...')
    cy.getByCy('item').should('have.length.gt', 1)
  })
})

const data = {
  hits: [
    {
      created_at: '2015-02-22T18:03:36.000Z',
      title: 'Goodbye “undefined is not a function”',
      url: 'https://plus.google.com/+AddyOsmani/posts/DdWkiKsvbA2',
      author: 'tosh',
      points: 522,
      story_text: null,
      comment_text: null,
      num_comments: 65,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1424628216,
      relevancy_score: 5861,
      _tags: ['story', 'author_tosh', 'story_9090227'],
      objectID: '9090227',
      _highlightResult: {
        title: {
          value: 'Goodbye “\u003cem\u003eundefined\u003c/em\u003e is not a function”',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        url: {
          value: 'https://plus.google.com/+AddyOsmani/posts/DdWkiKsvbA2',
          matchLevel: 'none',
          matchedWords: []
        },
        author: { value: 'tosh', matchLevel: 'none', matchedWords: [] }
      }
    },
    {
      created_at: '2019-07-17T12:03:45.000Z',
      title: 'Zelda Screen Transitions Are Undefined Behaviour',
      url: 'https://gridbugs.org/zelda-screen-transitions-are-undefined-behaviour/',
      author: 'Kaali',
      points: 366,
      story_text: null,
      comment_text: null,
      num_comments: 100,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1563365025,
      relevancy_score: 8952,
      _tags: ['story', 'author_Kaali', 'story_20458493'],
      objectID: '20458493',
      _highlightResult: {
        title: {
          value: 'Zelda Screen Transitions Are \u003cem\u003eUndefined\u003c/em\u003e Behaviour',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        url: {
          value:
            'https://gridbugs.org/zelda-screen-transitions-are-\u003cem\u003eundefined\u003c/em\u003e-behaviour/',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        author: { value: 'Kaali', matchLevel: 'none', matchedWords: [] }
      }
    },
    {
      created_at: '2017-02-14T00:19:07.000Z',
      title: 'I Do Not Know C: Short quiz on undefined behavior (2015)',
      url: 'http://kukuruku.co/hub/programming/i-do-not-know-c',
      author: 'waynecolvin',
      points: 214,
      story_text: null,
      comment_text: null,
      num_comments: 178,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1487031547,
      relevancy_score: 7258,
      _tags: ['story', 'author_waynecolvin', 'story_13640156'],
      objectID: '13640156',
      _highlightResult: {
        title: {
          value:
            'I Do Not Know C: Short quiz on \u003cem\u003eundefined\u003c/em\u003e behavior (2015)',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        url: {
          value: 'http://kukuruku.co/hub/programming/i-do-not-know-c',
          matchLevel: 'none',
          matchedWords: []
        },
        author: { value: 'waynecolvin', matchLevel: 'none', matchedWords: [] }
      }
    },
    {
      created_at: '2021-05-20T14:29:55.000Z',
      title: 'Undefined behavior in C is a reading error',
      url: 'https://www.yodaiken.com/2021/05/19/undefined-behavior-in-c-is-a-reading-error/',
      author: 'zdw',
      points: 203,
      story_text: null,
      comment_text: null,
      num_comments: 491,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1621520995,
      _tags: ['story', 'author_zdw', 'story_27221552'],
      objectID: '27221552',
      _highlightResult: {
        title: {
          value: '\u003cem\u003eUndefined\u003c/em\u003e behavior in C is a reading error',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        url: {
          value:
            'https://www.yodaiken.com/2021/05/19/\u003cem\u003eundefined\u003c/em\u003e-behavior-in-c-is-a-reading-error/',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        author: { value: 'zdw', matchLevel: 'none', matchedWords: [] }
      }
    },
    {
      created_at: '2018-08-08T12:21:38.000Z',
      title: 'µUBSan: clean-room reimplementation of the Undefined Behavior Sanitizer runtime',
      url: 'https://blog.netbsd.org/tnf/entry/introduction_to_%C2%B5ubsan_a_clean',
      author: 'ingve',
      points: 182,
      story_text: null,
      comment_text: null,
      num_comments: 60,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1533730898,
      relevancy_score: 8293,
      _tags: ['story', 'author_ingve', 'story_17715252'],
      objectID: '17715252',
      _highlightResult: {
        title: {
          value:
            'µUBSan: clean-room reimplementation of the \u003cem\u003eUndefined\u003c/em\u003e Behavior Sanitizer runtime',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        url: {
          value: 'https://blog.netbsd.org/tnf/entry/introduction_to_%C2%B5ubsan_a_clean',
          matchLevel: 'none',
          matchedWords: []
        },
        author: { value: 'ingve', matchLevel: 'none', matchedWords: [] }
      }
    },
    {
      created_at: '2011-05-14T19:49:02.000Z',
      title: 'What Every C Programmer Should Know About Undefined Behavior #2/3',
      url: 'http://blog.llvm.org/2011/05/what-every-c-programmer-should-know_14.html',
      author: 'ryannielsen',
      points: 170,
      story_text: '',
      comment_text: null,
      num_comments: 43,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1305402542,
      relevancy_score: 3212,
      _tags: ['story', 'author_ryannielsen', 'story_2548410'],
      objectID: '2548410',
      _highlightResult: {
        title: {
          value:
            'What Every C Programmer Should Know About \u003cem\u003eUndefined\u003c/em\u003e Behavior #2/3',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        url: {
          value: 'http://blog.llvm.org/2011/05/what-every-c-programmer-should-know_14.html',
          matchLevel: 'none',
          matchedWords: []
        },
        author: { value: 'ryannielsen', matchLevel: 'none', matchedWords: [] },
        story_text: { value: '', matchLevel: 'none', matchedWords: [] }
      }
    },
    {
      created_at: '2011-05-21T10:19:11.000Z',
      title: 'What Every C Programmer Should Know About Undefined Behavior #3/3',
      url: 'http://blog.llvm.org/2011/05/what-every-c-programmer-should-know_21.html',
      author: 'ryannielsen',
      points: 162,
      story_text: '',
      comment_text: null,
      num_comments: 10,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1305973151,
      relevancy_score: 3226,
      _tags: ['story', 'author_ryannielsen', 'story_2570609'],
      objectID: '2570609',
      _highlightResult: {
        title: {
          value:
            'What Every C Programmer Should Know About \u003cem\u003eUndefined\u003c/em\u003e Behavior #3/3',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        url: {
          value: 'http://blog.llvm.org/2011/05/what-every-c-programmer-should-know_21.html',
          matchLevel: 'none',
          matchedWords: []
        },
        author: { value: 'ryannielsen', matchLevel: 'none', matchedWords: [] },
        story_text: { value: '', matchLevel: 'none', matchedWords: [] }
      }
    },
    {
      created_at: '2017-12-24T15:28:36.000Z',
      title: 'Undefined vs. Unsafe in Rust',
      url: 'https://manishearth.github.io/blog/2017/12/24/undefined-vs-unsafe-in-rust/',
      author: 'ingve',
      points: 160,
      story_text: null,
      comment_text: null,
      num_comments: 47,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1514129316,
      relevancy_score: 7849,
      _tags: ['story', 'author_ingve', 'story_15999901'],
      objectID: '15999901',
      _highlightResult: {
        title: {
          value: '\u003cem\u003eUndefined\u003c/em\u003e vs. Unsafe in Rust',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        url: {
          value:
            'https://manishearth.github.io/blog/2017/12/24/\u003cem\u003eundefined\u003c/em\u003e-vs-unsafe-in-rust/',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        author: { value: 'ingve', matchLevel: 'none', matchedWords: [] }
      }
    },
    {
      created_at: '2022-11-28T06:03:37.000Z',
      title: 'GCC undefined behaviors are getting wild',
      url: 'http://blog.pkh.me/p/37-gcc-undefined-behaviors-are-getting-wild.html',
      author: 'signa11',
      points: 156,
      story_text: null,
      comment_text: null,
      num_comments: 349,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1669615417,
      _tags: ['story', 'author_signa11', 'story_33770277'],
      objectID: '33770277',
      _highlightResult: {
        title: {
          value: 'GCC \u003cem\u003eundefined\u003c/em\u003e behaviors are getting wild',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        url: {
          value:
            'http://blog.pkh.me/p/37-gcc-\u003cem\u003eundefined\u003c/em\u003e-behaviors-are-getting-wild.html',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        author: { value: 'signa11', matchLevel: 'none', matchedWords: [] }
      }
    },
    {
      created_at: '2011-05-12T10:05:48.000Z',
      title: 'What Every C Programmer Should Know About Undefined Behavior #1/3',
      url: 'http://blog.llvm.org/2011/05/what-every-c-programmer-should-know.html',
      author: 'zeugma',
      points: 155,
      story_text: '',
      comment_text: null,
      num_comments: 18,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1305194748,
      relevancy_score: 3212,
      _tags: ['story', 'author_zeugma', 'story_2540017'],
      objectID: '2540017',
      _highlightResult: {
        title: {
          value:
            'What Every C Programmer Should Know About \u003cem\u003eUndefined\u003c/em\u003e Behavior #1/3',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        url: {
          value: 'http://blog.llvm.org/2011/05/what-every-c-programmer-should-know.html',
          matchLevel: 'none',
          matchedWords: []
        },
        author: { value: 'zeugma', matchLevel: 'none', matchedWords: [] },
        story_text: { value: '', matchLevel: 'none', matchedWords: [] }
      }
    },
    {
      created_at: '2022-11-28T10:36:40.000Z',
      title: 'Falsehoods programmers believe about undefined behavior',
      url: 'https://predr.ag/blog/falsehoods-programmers-believe-about-undefined-behavior/',
      author: 'sanxiyn',
      points: 151,
      story_text: null,
      comment_text: null,
      num_comments: 226,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1669631800,
      _tags: ['story', 'author_sanxiyn', 'story_33771922'],
      objectID: '33771922',
      _highlightResult: {
        title: {
          value:
            'Falsehoods programmers believe about \u003cem\u003eundefined\u003c/em\u003e behavior',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        url: {
          value:
            'https://predr.ag/blog/falsehoods-programmers-believe-about-\u003cem\u003eundefined\u003c/em\u003e-behavior/',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        author: { value: 'sanxiyn', matchLevel: 'none', matchedWords: [] }
      }
    },
    {
      created_at: '2017-07-05T06:08:28.000Z',
      title: 'Undefined Behavior in 2017',
      url: 'https://blog.regehr.org/archives/1520',
      author: 'ingve',
      points: 143,
      story_text: null,
      comment_text: null,
      num_comments: 113,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1499234908,
      relevancy_score: 7526,
      _tags: ['story', 'author_ingve', 'story_14700251'],
      objectID: '14700251',
      _highlightResult: {
        title: {
          value: '\u003cem\u003eUndefined\u003c/em\u003e Behavior in 2017',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        url: {
          value: 'https://blog.regehr.org/archives/1520',
          matchLevel: 'none',
          matchedWords: []
        },
        author: { value: 'ingve', matchLevel: 'none', matchedWords: [] }
      }
    },
    {
      created_at: '2017-09-24T12:22:59.000Z',
      title: 'Why undefined behavior may call a never-called function',
      url: 'https://kristerw.blogspot.com/2017/09/why-undefined-behavior-may-call-never.html',
      author: 'pavel_lishin',
      points: 139,
      story_text: null,
      comment_text: null,
      num_comments: 170,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1506255779,
      relevancy_score: 7674,
      _tags: ['story', 'author_pavel_lishin', 'story_15324414'],
      objectID: '15324414',
      _highlightResult: {
        title: {
          value:
            'Why \u003cem\u003eundefined\u003c/em\u003e behavior may call a never-called function',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        url: {
          value:
            'https://kristerw.blogspot.com/2017/09/why-\u003cem\u003eundefined\u003c/em\u003e-behavior-may-call-never.html',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        author: { value: 'pavel_lishin', matchLevel: 'none', matchedWords: [] }
      }
    },
    {
      created_at: '2021-10-31T20:39:40.000Z',
      title: 'Perfecting GLFW for Zig, and finding lurking undefined behavior that went unnot',
      url: 'https://devlog.hexops.com/2021/perfecting-glfw-for-zig-and-finding-undefined-behavior',
      author: 'todsacerdoti',
      points: 136,
      story_text: null,
      comment_text: null,
      num_comments: 57,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1635712780,
      _tags: ['story', 'author_todsacerdoti', 'story_29060200'],
      objectID: '29060200',
      _highlightResult: {
        title: {
          value:
            'Perfecting GLFW for Zig, and finding lurking \u003cem\u003eundefined\u003c/em\u003e behavior that went unnot',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        url: {
          value:
            'https://devlog.hexops.com/2021/perfecting-glfw-for-zig-and-finding-\u003cem\u003eundefined\u003c/em\u003e-behavior',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        author: { value: 'todsacerdoti', matchLevel: 'none', matchedWords: [] }
      }
    },
    {
      created_at: '2017-01-05T00:13:09.000Z',
      title: 'What Every C Programmer Should Know About Undefined Behavior (2011)',
      url: 'http://blog.llvm.org/2011/05/what-every-c-programmer-should-know_14.html',
      author: 'BuuQu9hu',
      points: 129,
      story_text: null,
      comment_text: null,
      num_comments: 61,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1483575189,
      relevancy_score: 7177,
      _tags: ['story', 'author_BuuQu9hu', 'story_13323450'],
      objectID: '13323450',
      _highlightResult: {
        title: {
          value:
            'What Every C Programmer Should Know About \u003cem\u003eUndefined\u003c/em\u003e Behavior (2011)',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        url: {
          value: 'http://blog.llvm.org/2011/05/what-every-c-programmer-should-know_14.html',
          matchLevel: 'none',
          matchedWords: []
        },
        author: { value: 'BuuQu9hu', matchLevel: 'none', matchedWords: [] }
      }
    },
    {
      created_at: '2014-06-27T16:51:58.000Z',
      title: 'Undefined behavior can result in time travel',
      url: 'http://blogs.msdn.com/b/oldnewthing/archive/2014/06/27/10537746.aspx',
      author: 'ingve',
      points: 125,
      story_text: '',
      comment_text: null,
      num_comments: 88,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1403887918,
      relevancy_score: 5403,
      _tags: ['story', 'author_ingve', 'story_7954944'],
      objectID: '7954944',
      _highlightResult: {
        title: {
          value: '\u003cem\u003eUndefined\u003c/em\u003e behavior can result in time travel',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        url: {
          value: 'http://blogs.msdn.com/b/oldnewthing/archive/2014/06/27/10537746.aspx',
          matchLevel: 'none',
          matchedWords: []
        },
        author: { value: 'ingve', matchLevel: 'none', matchedWords: [] },
        story_text: { value: '', matchLevel: 'none', matchedWords: [] }
      }
    },
    {
      created_at: '2017-07-26T14:16:46.000Z',
      title: 'Defining the Undefinedness of C (2015) [pdf]',
      url: 'http://fsl.cs.illinois.edu/FSL/papers/2015/hathhorn-ellison-rosu-2015-pldi/hathhorn-ellison-rosu-2015-pldi-public.pdf',
      author: 'gbrown_',
      points: 124,
      story_text: null,
      comment_text: null,
      num_comments: 89,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1501078606,
      relevancy_score: 7567,
      _tags: ['story', 'author_gbrown_', 'story_14856315'],
      objectID: '14856315',
      _highlightResult: {
        title: {
          value: 'Defining the \u003cem\u003eUndefined\u003c/em\u003eness of C (2015) [pdf]',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        url: {
          value:
            'http://fsl.cs.illinois.edu/FSL/papers/2015/hathhorn-ellison-rosu-2015-pldi/hathhorn-ellison-rosu-2015-pldi-public.pdf',
          matchLevel: 'none',
          matchedWords: []
        },
        author: { value: 'gbrown_', matchLevel: 'none', matchedWords: [] }
      }
    },
    {
      created_at: '2017-04-14T20:31:08.000Z',
      title: 'Taming Undefined Behavior in LLVM',
      url: 'https://blog.regehr.org/archives/1496',
      author: 'ingve',
      points: 121,
      story_text: null,
      comment_text: null,
      num_comments: 62,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1492201868,
      relevancy_score: 7365,
      _tags: ['story', 'author_ingve', 'story_14117069'],
      objectID: '14117069',
      _highlightResult: {
        title: {
          value: 'Taming \u003cem\u003eUndefined\u003c/em\u003e Behavior in LLVM',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        url: {
          value: 'https://blog.regehr.org/archives/1496',
          matchLevel: 'none',
          matchedWords: []
        },
        author: { value: 'ingve', matchLevel: 'none', matchedWords: [] }
      }
    },
    {
      created_at: '2017-02-14T23:31:47.000Z',
      title: 'Undefined Behavior != Unsafe Programming',
      url: 'http://blog.regehr.org/archives/1467',
      author: 'steveklabnik',
      points: 119,
      story_text: null,
      comment_text: null,
      num_comments: 70,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1487115107,
      relevancy_score: 7258,
      _tags: ['story', 'author_steveklabnik', 'story_13648333'],
      objectID: '13648333',
      _highlightResult: {
        title: {
          value: '\u003cem\u003eUndefined\u003c/em\u003e Behavior != Unsafe Programming',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        url: {
          value: 'http://blog.regehr.org/archives/1467',
          matchLevel: 'none',
          matchedWords: []
        },
        author: { value: 'steveklabnik', matchLevel: 'none', matchedWords: [] }
      }
    },
    {
      created_at: '2018-07-21T08:51:50.000Z',
      title: 'The Value of Undefined Behavior',
      url: 'https://nullprogram.com/blog/2018/07/20/',
      author: 'ingve',
      points: 113,
      story_text: null,
      comment_text: null,
      num_comments: 81,
      story_id: null,
      story_title: null,
      story_url: null,
      parent_id: null,
      created_at_i: 1532163110,
      relevancy_score: 8252,
      _tags: ['story', 'author_ingve', 'story_17581319'],
      objectID: '17581319',
      _highlightResult: {
        title: {
          value: 'The Value of \u003cem\u003eUndefined\u003c/em\u003e Behavior',
          matchLevel: 'full',
          fullyHighlighted: false,
          matchedWords: ['undefined']
        },
        url: {
          value: 'https://nullprogram.com/blog/2018/07/20/',
          matchLevel: 'none',
          matchedWords: []
        },
        author: { value: 'ingve', matchLevel: 'none', matchedWords: [] }
      }
    }
  ],
  nbHits: 18776,
  page: 0,
  nbPages: 50,
  hitsPerPage: 20,
  exhaustiveNbHits: true,
  exhaustiveTypo: true,
  exhaustive: { nbHits: true, typo: true },
  query: 'undefined',
  params: 'advancedSyntax=true\u0026analytics=true\u0026analyticsTags=backend\u0026query=undefined',
  processingTimeMS: 12,
  processingTimingsMS: {
    afterFetch: { total: 2 },
    fetch: { scanning: 1, total: 9 },
    request: { roundTrip: 13 },
    total: 12
  },
  serverTimeMS: 12
}
