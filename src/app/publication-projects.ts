const cdn = 'https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/';

function images(...files: string[]): readonly string[] {
  return files.map((file) => `${cdn}${file}`);
}

export interface PublicationProject {
  readonly slug: string;
  readonly name: string;
  readonly number: string;
  readonly sourceUrl: string;
  readonly images: readonly string[];
  readonly videoEmbedUrl?: string;
}

export const publicationProjects: readonly PublicationProject[] = [
  {
    slug: 'niechec',
    name: 'Niechęć',
    number: '01',
    sourceUrl: 'https://mateuszczech.com/niechec',
    images: images(
      'f34f6103-a619-4d5a-87fd-82088b037b03_rw_600.jpg?h=815fb63be4a73bc5cb0956e4b9288c6d',
      '3d8f25ed-ebb2-432e-912f-87247e25d544_rw_1200.jpg?h=b849132c07511a0063f58b9739c87362',
      '1a1f3a9c-f23b-4b42-a49d-ab29730253bc_rw_1200.jpg?h=ee0a0e8eb424c8a552dd402bbc2054a9',
      '2f7b5bf1-6b63-44bf-a812-0a254e422ae9_rw_1200.jpg?h=7dc53c1c772ab5321fa9b7119a468ab8',
      'afa91861-ae8c-473a-9aa3-9f4f52211b42_rw_1200.jpg?h=9517cb878864c4c5ddc86df6f934e25e',
      '3c7c7553-e392-4742-9ee3-992ff046f8a8_rw_1200.jpg?h=333a9c7064713e84e3fc497f489cd8ca',
      '4ecd61ef-171b-42bf-9e47-0610887b3502_rw_1920.jpg?h=e3887d3420786a38934abf3609e042d6',
      '5f0890dc-c30a-41d1-84fe-cab5336f2a89_rw_1200.jpg?h=2f64ad5d460d80ba8d6f1360a9457b6a'
    )
  },
  {
    slug: 'miuosh-smolik-nospr',
    name: 'Miuosh Smolik NOSPR',
    number: '02',
    sourceUrl: 'https://mateuszczech.com/miuosh-smolik-nospr',
    images: images(
      '8d165369-63b3-41e6-8dbb-6c2ce10e7bea_rw_1200.jpg?h=0579d2cd2edae91045e7a5939e85ab0a',
      'c6ff8d58-42fc-4254-8c98-b1fd9e5c19f6_rw_1920.jpg?h=9555fb107ff2734b45385867c23f679b',
      '39e0c6d4-e912-4e71-9ae3-cd3b932c3565_rw_1200.jpg?h=9b872e8a23f79758573797f6a6eb134c',
      'd835509f-0b79-4d3d-bbcc-acc7d2cd10cd_rw_1200.jpg?h=25d54efb5eff6075f287c77f0330483e'
    )
  },
  {
    slug: 'miuosh-swietlikowo',
    name: 'Miuosh Świetlikowo',
    number: '03',
    sourceUrl: 'https://mateuszczech.com/miuosh-swietlikowo',
    images: images(
      '2dd52f72-6c3b-4fda-86e9-db51d1d78e93_rw_1200.jpg?h=4ed094f25b907bbb14516ff2f3f0c2a5',
      '4c3c6391-2942-422d-a7e8-609cd9e2ebe7_rw_1200.jpg?h=ac763ed1c79ecfe4ae38c2e8eb2edbaf'
    )
  },
  {
    slug: 'scenozstapienie',
    name: 'Scenozstąpienie',
    number: '04',
    sourceUrl: 'https://mateuszczech.com/scenozstapienie',
    images: images('cb4f9e9e-de01-40d7-b61e-8fe547e67596_rw_1920.jpg?h=be726f17741acfb152aa1fa8beada901')
  },
  {
    slug: 'keke',
    name: 'KĘKĘ - Mr. Kękę',
    number: '05',
    sourceUrl: 'https://mateuszczech.com/keke',
    images: images(
      '38c2ccac-0cf6-4751-ab2a-9d68d2770f1e_rw_1920.jpg?h=2467a7be5b3c84a8570007015b67ecc8',
      '9e2790de-44f2-4d36-a558-5b193d5ab759_rw_1200.jpg?h=48e76492244ed66ffa90db2888b0f6d6'
    )
  },
  {
    slug: 'sportpl-w-katarze',
    name: 'sport.pl w Katarze',
    number: '06',
    sourceUrl: 'https://mateuszczech.com/sportpl-w-katarze',
    images: images(
      '349080c5-1cbd-41d2-adfd-3baedbff6ec5_rw_1920.png?h=cbbd11faeacc56b82ceb003b9d6f4efc',
      '2b7d9c99-180f-4bb5-87d4-bcb14b01cdca_rw_1920.jpg?h=09d3a8b3e96fa76741991280e4d2afa0',
      '3f64c8d6-7bcd-4fc4-b499-c39520146977_rw_1920.jpg?h=976c075c1b5dce9e6539256e47595851',
      '24d92ef3-e021-47b7-997f-50297c761981_rw_1920.jpg?h=5381f8f3aa5fc099a283b90b15d8c0bf',
      'a52ecd5c-0f6f-46cb-9b32-e26d7a5aa0aa_rw_1920.jpg?h=2a8d37323b243b402a6d02512a6dbf04',
      'a29388e5-b4bd-4b91-8946-8e63a1ae894d_rw_1920.jpg?h=6360300ad550432d48b6afeb87977020'
    )
  },
  {
    slug: 'poluzjanci',
    name: 'Poluzjanci',
    number: '07',
    sourceUrl: 'https://mateuszczech.com/poluzjanci',
    images: images(
      '4a9e1115-fc86-4bbe-8686-6b004af69537_rw_1200.jpg?h=5f5743e32265c0b35690976c862e712b',
      '178d837a-002a-4c69-a384-24ae2b77e285_rw_1200.jpeg?h=946835b2453576ba9cc4ba33d4d58d38'
    )
  },
  {
    slug: 'grubson-na-szczycie',
    name: 'Grubson Na Szczycie',
    number: '08',
    sourceUrl: 'https://mateuszczech.com/grubson-na-szczycie',
    images: images('4527baaa-a2d5-4357-9bee-bf60d01624d1_rw_600.jpg?h=a5e3c7dece40e929dd5899c3146e7504')
  },
  {
    slug: 'dawid-kwiatkowski',
    name: 'Dawid Kwiatkowski',
    number: '09',
    sourceUrl: 'https://mateuszczech.com/dawid-kwiatkowski',
    images: images('d4dca1ff-75b3-43b7-87ca-34764981ad68_rw_1920.jpg?h=bbb6ae4f7f1235e287507ee25abc0eef')
  },
  {
    slug: 'wojtek-mazolewski',
    name: 'Wojtek Mazolewski',
    number: '10',
    sourceUrl: 'https://mateuszczech.com/wojtek-mazolewski',
    images: images(
      'ae61f28d-4cb7-4587-a4fb-9550e4bceae1_rw_1200.jpg?h=7c5408faa56c4452bcf87d700dd501bc',
      '940a64ad-b3cf-48ce-a9c3-0a281f372624_rw_1920.jpg?h=39c00e6aa8320cccd4593ce25e41c535'
    )
  },
  {
    slug: 'wojciech-mazolewski',
    name: 'Wojciech Mazolewski',
    number: '11',
    sourceUrl: 'https://mateuszczech.com/wojciech-mazolewski',
    images: images('a0bcc732-48fe-4e3b-9029-4227b7b687a1_rw_1200.jpg?h=8e3df7bb61e68ebf035e3c51dfe633d3')
  },
  {
    slug: 'vnm',
    name: 'VNM',
    number: '12',
    sourceUrl: 'https://mateuszczech.com/vnm',
    images: images('82b151f9-5af7-4243-a7d8-079e13de3ede_rw_1920.PNG?h=efb112aa5c80b6ab677f49165047531e')
  },
  {
    slug: 'vnm-exit-2020',
    name: 'VNM EXIT 2020',
    number: '13',
    sourceUrl: 'https://mateuszczech.com/vnm-exit-2020',
    images: images(
      'cdb836ca-bf8d-4425-a194-b3db0ba024b8_rw_1200.jpg?h=f5a4b910ec5d116f0105bbd55ea6f4f2',
      '3edf31d4-f791-4970-b4fc-32890d75d13b_rw_1200.jpg?h=89e0ac18ea4bed876f7ac12d9b7ed99c'
    )
  },
  {
    slug: 'wmq',
    name: 'WMQ',
    number: '14',
    sourceUrl: 'https://mateuszczech.com/wmq',
    images: images(
      'edc80b21-fcc3-4b78-8952-fb59af319ba1_rw_1200.jpg?h=9cf5683151e85fb01f1055ce2f59c6e0',
      '3058358b-c3f6-4809-894e-538799a6e36e_rw_1920.jpg?h=1cda206968b605b2031eb9cedddbb48a',
      'fb77c048-283e-431b-9282-9fdbc8deab93_rw_1920.jpg?h=e27cc3fb62e0d6be01e0572617796839'
    )
  },
  {
    slug: 'modern-lies',
    name: 'Modern Lies',
    number: '15',
    sourceUrl: 'https://mateuszczech.com/modern-lies',
    images: images(
      'ca9899c0-ba4d-4f3c-8e5d-7d435a113ba6_rw_1920.jpg?h=b8cc38c5ef3a974a0261faf0200ca815',
      '7da8446b-af9f-45c8-836b-103d71360b22_rw_1920.jpg?h=9ec53cc53abc28e9943314b8baa5c6a4'
    )
  },
  {
    slug: 'czyzykiewicz-cislo',
    name: 'Czyżykiewicz Cisło',
    number: '16',
    sourceUrl: 'https://mateuszczech.com/czyzykiewicz-cislo',
    images: images('6c0d43ea-2d8b-47ea-9f95-f8a28af84734_rw_1200.jpeg?h=1ef968619b8df6156f3ddd61967e4044')
  },
  {
    slug: 'natalia-sikora',
    name: 'Natalia Sikora',
    number: '17',
    sourceUrl: 'https://mateuszczech.com/natalia-sikora',
    images: images('95d9716d-740d-4993-a91a-91e1d788f43f_rw_1200.jpg?h=b1badc51eee6dbc56d028c3a4d26e303')
  },
  {
    slug: 'mazolewski-x-szczyl',
    name: 'Mazolewski x Szczyl',
    number: '18',
    sourceUrl: 'https://mateuszczech.com/mazolewski-x-szczyl',
    images: images('c2956742-427d-432d-9195-a3cf118f5e52_rw_1920.jpg?h=ea3b660e87a212c8f63002fbef856caf')
  }
];
