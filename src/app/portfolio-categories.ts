const cdn = 'https://cdn.myportfolio.com/1ae1782f-bf75-40a2-a983-b0b5ac077fec/';

function galleryImages(files: readonly string[]): readonly string[] {
  return files.map((file) => `${cdn}${file}`);
}

export interface PortfolioCategory {
  readonly slug: string;
  readonly name: string;
  readonly number: string;
  readonly coverImage: string;
  readonly sourceUrl: string;
  readonly images: readonly string[];
  readonly videoEmbedUrl?: string;
}

export const portfolioCategories: readonly PortfolioCategory[] = [
  {
    slug: 'portret',
    name: 'Portret',
    number: '01',
    coverImage: `${cdn}239558a7-16c5-4cc7-8734-fdb6c7a82046_rwc_0x209x1439x1125x640.jpg?h=672d2e846c1d6fbdf7d01e3fe98c42c6`,
    sourceUrl: 'https://mateuszczech.com/portret',
    images: galleryImages([
      '8c9abbf4-20a3-45bd-be48-412131a52aa6_rw_1920.jpg?h=0a3a45896b7e634cca67b4605f9e1bb0',
      '1b794f15-f625-491b-af58-b24e50acc61d_rw_1920.JPG?h=188c8a439659d85dafcb1cd566f78670',
      'a105fe4e-b52b-4255-bc7a-9a2825196026_rw_1920.jpg?h=4f891fa7466576b4ea29165652095bce',
      'e560271a-7fd4-40e1-b1ce-020125ab01b9_rw_1200.jpg?h=0073c6d3539803d9a4c02e65e773c8a7',
      'fb4d5ffc-0b8f-4de1-8323-9d23538f0e2c_rw_1920.jpg?h=0021df1c3baa9cad4bdac4e9d1b255f8',
      '53b616de-8339-42f7-8e04-227cbebe1260_rw_1920.jpg?h=2073070f7226b34b41bfb8f6a0965080',
      'd80288b9-b4bc-434a-9452-e606f98dae77_rw_1920.jpg?h=accc9b53e008a795c4f2ec95265392a8',
      'ce508ac2-b128-4b6c-b522-0675ec11e395_rw_1920.jpg?h=51d8d3d9917b6846b0b6ffab2ca17468',
      'a12b4630-441e-42f5-80d5-e05f7d638592_rw_1920.jpg?h=2f15020086f292ca6eca71298e96d749',
      'c9073e5b-2236-46cf-b0de-94da1467bc25_rw_1920.jpg?h=9fe054585cc463f1bbd88489ea6958d7',
      '105d4c39-7d5a-43ad-9b58-091bc6165ae8_rw_1920.jpg?h=4663f36b3cf7e792fa5194872abac721',
      'b88a29e3-ce56-4558-9c65-1d6ef2d65761_rw_1920.jpg?h=be89ef979f8603cc382396bdc8521f74',
      '92e61460-aa7e-4b91-b6f1-e6246c2ee440_rw_1920.jpg?h=753051d7d77aa13f3741c0fd1ad65cf7',
      '89a413bc-bb66-4157-ac3e-bfdce6826e5a_rw_1920.jpg?h=f034e72beb466bb27d3f022208089965',
      'dc22bfca-4704-404b-b06c-7ceedc6a2687_rw_1920.jpg?h=b8381bb4728a2fca214266317c19deb9',
      'c625f4e9-927e-4315-9f44-9c54e8610ae4_rw_1920.jpg?h=69f337218d17edcddf9497032f946c9c',
      'b8e84512-bb6a-4fe8-99f8-fbeaf896ff6a_rw_1200.jpg?h=5d74481536ae65b2075e577103274b52',
      'f14fbc33-bf21-4298-bc3a-cb90af09a3d0_rw_1920.jpg?h=05f5150693a73835c57757fa7790e20b',
      'e43e2e2f-3b0d-4c26-982e-01f6eb9a40e0_rw_1920.jpg?h=5cf1a92bc9764297f8cc8776677784da',
      '1c43d058-fd3f-4e28-92ff-8f0eb5a46e62_rw_1920.jpg?h=c34af6872a3465cc33ae65aa85f8a5e3',
      '58d82dcb-c9a6-4c9c-a3d7-915fb4223d48_rw_1920.jpg?h=7f73a79666701c2bc4e1e31fc96b1154',
      '5db953b3-ecf6-4a6d-a1df-843f574bdc5e_rw_1920.JPG?h=b45a8f59ba1c940e0a327762753fb1f2',
      '6fc8a0f0-710d-4058-9a76-375e8657e670_rw_1920.jpg?h=f9638d9058ff34a8b85468541268fb4d',
      'cdb4a5a2-4133-4130-a641-ede7449d587c_rw_1920.jpg?h=6f53707ed7bc66d6d2f3fe6da996e0d0',
      'a4f8ca7a-3c49-4be2-8907-85fab6e6e25a_rw_1920.JPG?h=3ffe3ced1acf2663175e868921eb6c5a',
      '07fa59b9-65db-4cce-963b-1fe76e265280_rw_3840.JPG?h=e7a01b2d401f7a3a4d4178358a4bd8fb',
      'd49d43cb-d53b-4cfd-8613-9803b4aaf2c9_rw_1920.JPG?h=5b0a94d1881d9b0d2caf72294d49e54c',
      '58e5245c-51bd-4ce6-a1f7-a9f954a1a13a_rw_1200.jpg?h=22af9a550c984a56681379f82aec4d8a',
      '45a85c68-c124-4fac-8f76-83ee355a0c66_rw_1200.jpg?h=140dc00a96c3f112401597d11adf7d8a',
      'aaccc13e-c5d0-493c-8e82-1fbe30a2d24b_rw_1200.jpg?h=b9d369f94913e6080bb4b41942f7f307',
      '9ef1e86c-c6d0-45da-a3ac-2b540453816e_rw_1200.jpg?h=756f4b0976bb2edaffb938d7a281b0c7',
      '2c0f7660-35e4-40e1-bbda-d11e5fd584d2_rw_1200.jpg?h=74de6d071d4e31ce4c7f3328e8c4292d',
      'a0d7a33e-573e-401b-b41f-b4c3fbcf66d6_rw_1200.jpg?h=71ccf125686043b8668ae365ae2d227d',
      '182f3569-aca6-406c-b499-03fe287a3702_rw_1200.jpg?h=f880077b19dd30543503e1125159df76',
      '6ddda005-7596-4e31-91b8-3cb641697107_rw_1200.jpg?h=d870694ed6f62ec9afcf75ab6cfd2f99',
      '1d3b2823-a656-435c-96a9-84be5f707035_rw_1920.jpg?h=120884586af79ce9298f52ffbb4bb112',
      '6dd99b53-0931-439d-927d-40358e2a628d_rw_1920.jpg?h=63da81d5dc5fd75a01d4b24440c8f181',
      '3adda690-9e45-40bd-9ac4-b7e77929d0e2_rw_1920.JPG?h=46bf9a1e89a4d9f959a9ed7f43872eab',
      '8520a5d7-0724-4298-a028-dc3d9e221efd_rw_1920.jpg?h=a8afdd776b45dc15581718fd965039a3',
      '438c19e0-70a2-4393-900e-ddc095523c84_rw_1920.jpg?h=862fb50da93d797f246d26701ec6a2f0',
      '4fbdf21e-a1e9-4083-948f-f1f5562871ff_rw_1920.jpg?h=b5418eef7ccc5a50d88e31b1ef5f635c',
      'bc57e1f2-2482-4f6c-a6b5-02efd244072f_rw_1920.jpg?h=064cb58c3588e4def425201e9be33760',
      '278c5ed5-a915-4bd8-a1c6-726c8857db99_rw_1920.jpg?h=37c5d4fd105be995cd47ff0f15346971'
    ])
  },
  {
    slug: 'scena',
    name: 'Scena',
    number: '02',
    coverImage: `${cdn}59ac7570-ddf3-4e6a-bac4-eb418e7e36d5_rwc_141x0x1637x1280x640.jpg?h=3c9064f30e2ff0b96e8cdbd9d4ef376a`,
    sourceUrl: 'https://mateuszczech.com/scena',
    images: galleryImages([
      '7ef9e4cc-4f62-4f60-8028-3b99ddcf3f97_rw_1920.jpg?h=e33530c09124555871f4e3417da12982',
      '8567082b-565d-40a6-aaf7-e4c8aefa64b6_rw_1920.jpg?h=e21dc1124bbd0660264740bb71035d8d',
      '4919c050-53d4-48e8-8af8-abba1da79fb7_rw_1920.jpg?h=02b9a64187d95685e143c96def1fdad7',
      '32fb7f69-f63a-4ab9-8ae9-9074fb37a3af_rw_1920.jpg?h=6328fe3fab36b26053b7f9c11f29a731',
      '86fb0e9f-c28b-4239-b65e-70c27e4c745b_rw_1920.jpg?h=7678fb4de94577850a03386f4bfd8057',
      'a356ba09-65fb-425e-9877-6c479d042daa_rw_1920.jpg?h=401dd5c3166ce75a7f308f91a0332e13',
      '5405156c-cecd-4f42-a056-0deb7d5c2696_rw_1920.jpg?h=19b9a492956294c3d2eebd68db1b18a0',
      '08a78800-c7d6-4b97-90f6-3227442bbe0f_rw_1920.jpg?h=b41579d5654e6fdf13be21f1da36eb08',
      '1c455074-21b0-4eb1-8d20-489066314172_rw_1920.jpg?h=dd52e7dcd2bf8370b2205fb9d4bfc942',
      '0d37718a-2935-4c9d-adc7-b7f6f46b553e_rw_1920.jpg?h=44efeaf1bdac12d93844734c36474d4c',
      'bb417773-a07b-4911-b253-46e96dea8273_rw_1920.JPG?h=4201b1f52a105128e27a1ccdad351bb5',
      'cd9ed374-6083-4d8d-9111-d5ad49015a03_rw_1920.jpg?h=d5a7ce10ad172d6388be130c6ddc2b38',
      '5c0b19a6-11c3-400c-a57d-cf43d67a5f07_rw_1920.jpg?h=d12184e23337f60d06766c39fe04c3df',
      'fcf03089-6eb9-43da-92ba-cf9862000a5f_rw_1920.jpg?h=c9cac75ceb0328a29ca214f4c47ab7e7',
      'e4fa38fc-21bb-4c1e-a9fd-d3502cf01b67_rw_1920.jpg?h=dd694569bae3013bd4f565dad7dac362',
      'af356351-4053-4293-b9b8-2b30dac72233_rw_1920.JPG?h=59c18c3d5a956995bd3896e3a94d9a51',
      '9fb403ae-6690-43bc-9981-ccba6d3fee4a_rw_1920.jpg?h=72725fbc78ebd47db2acbd6a9312f3b0',
      'e7873aaa-8055-4b26-a329-e948a4df6b00_rw_1920.jpg?h=ee29651c8f9d8e2ac092ec8f4553078a',
      'b6925f35-3f53-4f7e-87c1-4f25915ce090_rw_1920.jpg?h=c31f76973c1446e8fd75f2273a35885e',
      'de8ac63b-cc2e-492b-970a-5fefbcdb48c6_rw_1920.jpg?h=999e50b9759be99cb3a86382b043afef',
      '6feb5840-59ab-47a2-addf-322765121c11_rw_1920.JPG?h=260605fea6a0651bbd19fe776df0c618',
      '5cc4feac-d2af-4524-9350-00f2b3a896e7_rw_1920.JPG?h=78074c672598efee320a88301ddf5e7d',
      'd4c0fc2d-63ba-4d4a-a5a4-5234a91e9352_rw_1920.JPG?h=f8bd1ca000f2b6a82f2ac4e9b62df1b2',
      'a004705e-3598-4c2e-9923-f254e648c599_rw_1920.JPG?h=ea3ce80e3a66a8c283ae996e3f644dc1',
      '87d9270b-b439-463b-8623-cbe126b054d1_rw_1920.JPG?h=90ad6b8e6df6e5340d26aa2fcead38c9',
      'cbc9a81a-787b-42a9-8575-20814eb1bb9d_rw_1920.JPG?h=1a8029bd2fc4adc82d7b7446148a8b04',
      '38e5bf2c-7519-483c-8910-1e699a548a5f_rw_1920.jpg?h=3f3efa4c5721475bc92c05bfe80b5840',
      '577bc89b-95de-47dc-a83f-e06f40f205e1_rw_1920.jpg?h=8331d11ba97ef88d2542436e526c2493',
      '079af271-2aea-40cc-9158-13c291672296_rw_1920.jpg?h=81d45e5662b86e281c73685c3f6196e0',
      'e8688a39-acf4-4af9-8eec-f2ac1e4fd346_rw_1920.JPG?h=eea632c5ccba22618fb76ae75293a6df',
      '0ea0b139-d25b-4b98-b4a3-4d3b8e0f162f_rw_1920.JPG?h=7a99dfaf2d3f02d2d4a1f7170c3a78f4'
    ])
  },
  {
    slug: 'gastro',
    name: 'Gastro',
    number: '03',
    coverImage: `${cdn}12ce18ed-32a6-4da9-b509-5683ff004ce9_rwc_0x686x1659x1297x640.jpg?h=e06bbe9f87e22bff3795527e462bf038`,
    sourceUrl: 'https://mateuszczech.com/gastro',
    images: galleryImages([
      'c2d31101-9c22-4fde-ac8c-e1d5ffaba95a_rw_1200.jpg?h=f430bc742fc92ad265d434561599d171',
      '5824c182-9fe4-44f0-8938-e52c91b9e498_rw_1920.jpg?h=2fc0649ddfba1a08893a74ebdc25f463',
      'dc4cf582-1c09-4e80-99b4-159f9cfacdf8_rw_1920.jpg?h=1911cab959f85d4fb69b96b277ee6039',
      '22cf8fce-7d86-4185-8b7f-90fbb1671af6_rw_1920.jpg?h=f388cb7ebdb1d5a6561c17055964d62f',
      '6c2a6c77-7081-45d2-95bb-2d10fe37f403_rw_1200.jpg?h=d1f85853cb871924279d208b46a69c87',
      'dc91d16b-3e4e-4f23-8c3f-a11a74574a11_rw_1920.jpg?h=aec2a1d254893c677dcd9f3bfc49930d',
      'e9bc1e4d-de17-4cb1-9b3d-bf310b14c4b5_rw_1920.JPG?h=06599e1ce7d3eac9f3b33d7ee3e00d0b',
      'e20a78e2-a27d-4aae-ba8a-2dc8dfba2488_rw_1920.JPG?h=52103fd7a77b6f905b9b82026147f46a',
      '255ea218-0395-432d-a8d2-95ceaef75dc3_rw_1920.JPG?h=6a2a1e02b62cc277a23ea8736da93282',
      '5f028549-4856-44e6-8bd0-8a24c69bf16e_rw_1920.jpg?h=11c3650efbae9d166acb57dae64d397f',
      'e2a45e50-2b14-46f7-93ff-60febbb5ba00_rw_1200.jpg?h=915571338cf2cde2f91ce1527d45248d',
      '4743ea63-50cb-4e61-8a98-b4524766a03d_rw_1920.jpg?h=55b3d2b97290e60799a58a7d9bac1b07',
      'acbbdb64-a91d-4a7b-abd2-2ed91c2afcd4_rw_1200.jpg?h=d76c891be8d1c989dfeb271fec8b7ec2',
      '75e331b4-87e2-4316-9052-8e29ce2a0717_rw_1920.jpg?h=9303bf6d348f53e18c38e661656f4514',
      '88a8e3c7-7394-4ece-8868-033b433e7340_rw_1920.jpeg?h=7af3d85e848707abcc9bbb43c8a854a7',
      'e96b7ae5-1863-4a23-b0b8-188c7881b3f4_rw_1920.jpeg?h=95ad555f66fe9401e23fb95deeb9ec4e',
      '8276d0c3-d373-4e0a-9098-02dae3a793cf_rw_1920.jpeg?h=6c80a7ee2f911a434bf99ed665678d52',
      '3cece490-804d-48d6-a090-b1b515512a66_rw_1920.jpeg?h=28ba6603eb05739365ab387ff33c60b9',
      '141627e5-5b9a-48b3-b3bb-5243abb4e358_rw_1920.JPG?h=c68ebfc2283aa773b69b67024a4de7f9',
      '31ff0b92-c2e4-48f1-bbef-a953cee91797_rw_1920.jpg?h=38cb88938cd32b251f373e898db34500',
      'ca67d78a-6a08-4466-ab19-03b7df01b0ec_rw_1920.JPG?h=66b7e712172164d1072dd66d98330a0c',
      '085f6705-9097-4894-8b30-e66988a36806_rw_1920.jpg?h=c2a477dbab58245ecc2d3cccbe4bbb7f',
      '0364536f-87f4-4dd8-80d3-e731e14466a7_rw_1920.jpg?h=09a5ae99c325a8beeea3057ff674a07f',
      '6eb0d867-c3a1-4fa6-9bb7-1b75c40bf19e_rw_1920.jpg?h=ba04aff0be7046f7b2e82219b625cc8a',
      'c0345e75-6d48-4990-a10f-61fa9e5a202a_rw_1920.jpg?h=c61d611158eab2b4ef840401ccce2805',
      'cafad6a2-44f8-41e1-a97f-bd468a212376_rw_1920.jpg?h=cda99d5eb8898596d6ea12d18a456d71',
      '1c578ae1-02ff-4af1-8cf0-9332b466207c_rw_1920.jpg?h=a7a4e5878d37a8311875fb3cfa672c9e',
      '09984f1d-a411-4a3b-a51d-06413bb7ef58_rw_1920.jpg?h=c2466d2e0a1369a705cc65384df991ea',
      '16da33a6-d3c1-48f5-a3d7-fba63bc347dc_rw_1920.jpg?h=1b58b64a8c52c13906418189b2ba33a6',
      '021eb846-85b4-4336-ab1e-432269384456_rw_1920.jpg?h=a84ae7bbaaf3b6a1174874a409bc6770',
      'b7ace7cc-051a-447e-ac4b-3d0ea9fa6d5d_rw_1920.jpg?h=30be93e74e4531c8c41dbbb648356cb8',
      '0103c173-46eb-49b9-a02b-de621ce48286_rw_1920.jpg?h=a0ee157f9c78b7a5e8a85dd490cf30d7',
      'ada5c874-3871-4998-9632-befa54808fc0_rw_1920.jpg?h=8fe877002e4305d66d89ab4a3f942bc6',
      '2f06816e-4ce5-4735-ac46-7b71c0740c5c_rw_1920.jpg?h=2c5022185887c39e064950aab03437f0',
      'e4e09536-c57a-43a8-ba6f-a30fee00180c_rw_1920.jpg?h=dafb624c8c6aaef90c6b8340f05ba150',
      'fc40eb47-c554-46f5-ac4d-47bc0513119f_rw_1920.jpg?h=9b023503b5befa33a5f5e9050e947e0c',
      'b5bdaab4-cf11-486b-aa86-ac1ae56e4687_rw_1920.jpg?h=fa15023c09c7028a6400e6a4dcfc0d72',
      '7fa60cc6-da8f-4ff5-bfed-473a1e84375e_rw_1920.jpg?h=0a89bead917bbe6d22c872e72a13ee3f',
      '1751e96d-ac0e-4cd6-aa96-a6f16e544a00_rw_1920.jpg?h=46d6e8875a497d137bf5248bf4ff31f5',
      '523e26b3-6aaa-4752-b6af-37fd59afc87b_rw_1920.jpg?h=bf250bed4d32a88d10f83ed498181496'
    ])
  },
  {
    slug: 'nagranialektorskie',
    name: 'Nagrania Lektorskie',
    number: '04',
    coverImage: `${cdn}cbd8464f-7b12-4386-9bf0-05605abab5db_rwc_147x0x1203x941x640.png?h=6c7e288f60b55c344650a3585f3bca29`,
    sourceUrl: 'https://mateuszczech.com/nagranialektorskie',
    images: [],
    videoEmbedUrl: 'https://www-ccv.adobe.io/v1/player/ccv/NYy-iEXAr8b/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View'
  }
];
