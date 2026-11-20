export interface WeddingStory {
  readonly slug: string;
  readonly name: string;
  readonly number: string;
  readonly coverImage: string;
  readonly sourceUrl: string;
  readonly images: readonly string[];
  readonly videoEmbedUrl?: string;
}

export const weddingStories: readonly WeddingStory[] = [
  {
    slug: 'martyna-i-jakub',
    name: 'Martyna i Jakub',
    number: '01',
    coverImage: 'https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/74c2ba19-0192-40e3-9f8c-5407200f788e_rw_1920.jpg?h=89152f97bc7809401e6fbf99c04eea23',
    sourceUrl: 'https://mateuszczech.com/martyna-i-jakub',
    images: [
      'https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/74c2ba19-0192-40e3-9f8c-5407200f788e_rw_1920.jpg?h=89152f97bc7809401e6fbf99c04eea23',
      'https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/58fd8daa-9d32-48a8-8076-25db1c536047_rw_1920.jpg?h=cd6da7a5308685b4675f2656fa35b65e',
      'https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/3427ee5c-17ea-4296-9172-89fe745ac825_rw_1920.jpg?h=890b7932c0443964bc1ef6f9c42c58fb',
      'https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/6901d26f-d02b-4cc4-878a-972ba9b10abe_rw_1920.jpg?h=1fea86d7863c4c800d27df5d94a44e8f',
      'https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/6be1a577-ec9b-4b05-ac2a-6d771f655ba5_rw_1920.jpg?h=4d44b12683661e1a3c15a12f64b350a2'
    ]
  },
  {
    slug: 'alicja-i-patryk',
    name: 'Alicja i Patryk',
    number: '02',
    coverImage: 'https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/2ac70de0-2ab1-4cde-92a4-4cc3bfd3c15a_rw_1920.jpg?h=37f0b20aa0edc1da8891e48e93f10960',
    sourceUrl: 'https://mateuszczech.com/alicja-i-patryk',
    images: [
      'https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/2ac70de0-2ab1-4cde-92a4-4cc3bfd3c15a_rw_1920.jpg?h=37f0b20aa0edc1da8891e48e93f10960',
      'https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/fd988471-ad3b-495f-b5a0-960a6c96db25_rw_1920.jpg?h=91ade78c87910e8a991bcdb52fcac467',
      'https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/a685c31c-4ca0-4730-a609-189809cc9ab1_rw_1920.jpg?h=e8b767c1500dce280375d0f2035b34bb',
      'https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/782cdefa-df5d-47c1-86c9-8d8efa003048_rw_1920.jpg?h=de8e188cc4e049dc88c7f42d17ce9fcd'
    ]
  },
  {
    slug: 'dominika-i-mateusz',
    name: 'Dominika i Mateusz',
    number: '03',
    coverImage: 'https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/5e508492-4845-422b-9e49-d4b5d405d053_rw_1920.jpg?h=9576de9815b00b082fcc12d03a2d99f7',
    sourceUrl: 'https://mateuszczech.com/dominika-i-mateusz',
    images: [
      'https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/5e508492-4845-422b-9e49-d4b5d405d053_rw_1920.jpg?h=9576de9815b00b082fcc12d03a2d99f7',
      'https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/9633c5ff-5c51-4258-b8d2-32cbfdb05c68_rw_1920.jpg?h=52d99fab553a10cdd3b5e4667824b935',
      'https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/ae1088de-8d1f-4577-9795-14125257081b_rw_1920.jpg?h=16717425347bc516d05a2524cfe8d99e'
    ]
  },
  {
    slug: 'natalia-i-rafal',
    name: 'Natalia i Rafał',
    number: '04',
    coverImage: 'https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/998a9f92-e3a2-40a7-8893-205531797506_rw_1920.jpg?h=4ed2568fad7e5c2413f17ff2cf169a7c',
    sourceUrl: 'https://mateuszczech.com/natalia-i-rafal',
    images: [
      'https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/998a9f92-e3a2-40a7-8893-205531797506_rw_1920.jpg?h=4ed2568fad7e5c2413f17ff2cf169a7c',
      'https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/03f371da-160f-4497-af0a-6279abb9c3fd_rw_1920.jpg?h=3eda9e29e42f84af1da6fedf6e782c79',
      'https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/d74203ec-ac90-4297-966d-e7498e9bf590_rw_1920.jpg?h=318ab989ba6978ffc238b17ddc698f56',
      'https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/78f7694f-bf2d-4762-9a36-9be271bdf97e_rw_1920.jpg?h=7de65792b35beda41fb4a8ebfd2c05b5'
    ]
  }
];
