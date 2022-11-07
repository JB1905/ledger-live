import type { CurrenciesData } from "@ledgerhq/types-live";
import type { Transaction } from "../types";
const dataset: CurrenciesData<Transaction> = {
  FIXME_ignoreAccountFields: [
    "bitcoinResources.walletAccount", // it is not "stable"
    "bitcoinResources.utxos", // TODO: fix ordering
  ],
  scanAccounts: [
    {
      name: "komodo seed 1",
      apdus: `
      => b001000000
      <= 01064b6f6d6f646f05322e302e3601029000
      => e04000000d038000002c8000008d80000000
      <= 4104fae4276bde6ebc93171a37a746cec04f1dc74d35d0f598ce891cc5f2bfb32581281ee63a73d12c86804feddd4ebd40dcecd5bb19e7cc0eafd6dcc75f062ce27b22524e46587770555339424171675050574e354d6d3157425445656f6e4b646d635668b8108a95d4f2b809ce1478e3963edf1361433afdb1d4fdbc9103b46fd66e8cd39000
      => b001000000
      <= 01064b6f6d6f646f05322e302e3601029000
      => e040000015058000002c8000008d800000000000000000000000
      <= 410460c8aed642d9d7114be3b3af97af7f76e79803cecc6b743c5ad142d81826d52fe724496fee10b511f26ea97eba4585df41bc573d0e5b2858d6bdf7375f3f1f2f22524d6b6561537275386b33354657787663456e7133346332346f526e4e7a6858564a0fc3243bf491aeeaca183521f20b801fb5df20bef2ff3d0f272c2fcb380ada0d9000
      => b001000000
      <= 01064b6f6d6f646f05322e302e3601029000
      => e040000009028000002c8000008d
      <= 4104fb0f483df5f252ff2ef489859d4f630bcd15ff6706fb3c8515f65f9faeedef1ab8ca4a561dc9366d5c3e456b2c4765e4c7b5098dcf3abd468cecba3ef0bdf2702252533231756d716a70587241624c654b535242315374556d6a447634576e7861473852450a66190968881e3775771f4dd7cfa944c14f0aef3b28fd87c7fa87df1cda9000
      => e04000000d038000002c8000008d80000000
      <= 4104fae4276bde6ebc93171a37a746cec04f1dc74d35d0f598ce891cc5f2bfb32581281ee63a73d12c86804feddd4ebd40dcecd5bb19e7cc0eafd6dcc75f062ce27b22524e46587770555339424171675050574e354d6d3157425445656f6e4b646d635668b8108a95d4f2b809ce1478e3963edf1361433afdb1d4fdbc9103b46fd66e8cd39000
      => b001000000
      <= 01064b6f6d6f646f05322e302e3601029000
      => e040000015058000002c8000008d800000010000000000000000
      <= 4104504f0167df2f767c7c4e34dfc680713a1517f841723308affd854a316d2e474c4121b3087afd3fe5a050be0c20049f90748a487a5a4a9a52217b6d889c1af65b22524e62717735385534647236393375365534763339344b626b664d5933457766414c8cb4b70dd8793d8522828ad4ccf72e40ecd408e366f14fd6cc6bf588498ad7ff9000
      => b001000000
      <= 01064b6f6d6f646f05322e302e3601029000
      => e040000009028000002c8000008d
      <= 4104fb0f483df5f252ff2ef489859d4f630bcd15ff6706fb3c8515f65f9faeedef1ab8ca4a561dc9366d5c3e456b2c4765e4c7b5098dcf3abd468cecba3ef0bdf2702252533231756d716a70587241624c654b535242315374556d6a447634576e7861473852450a66190968881e3775771f4dd7cfa944c14f0aef3b28fd87c7fa87df1cda9000
      => e04000000d038000002c8000008d80000001
      <= 4104afc746a683fe2df9eb031de1ca3fe38b7629a5041e636f49e8ba735798c63a1ef7abcfb679e49dd341751e4076c7ef68efe5e112d84a5b85d60a64f0aba138ce2252447977384b4e6b39524d48424166566a50704b4c4c79675556596d427262647553eb3fb39433f5d61a779326613fa8572dab7bf44dfcdf85832e47400d730501009000
      => b001000000
      <= 01064b6f6d6f646f05322e302e3601029000
      => e040000015058000002c8000008d800000020000000000000000
      <= 4104a444bf0e3967e0ab18c6afd400f75e3f2ecf7d67b365141991c78655418bf4235a8493197b9f4136c0fb18b74be78d7160fe85241e86a3347cab4af4753a082b22524a33514159586a584675786d4e713764344654546d48473233414d62794b516562906322907ac5814ebaf8345dfaa772b07b9477de092e3e38a986c13f69c03d889000
      => b001000000
      <= 01064b6f6d6f646f05322e302e3601029000
      => e040000009028000002c8000008d
      <= 4104fb0f483df5f252ff2ef489859d4f630bcd15ff6706fb3c8515f65f9faeedef1ab8ca4a561dc9366d5c3e456b2c4765e4c7b5098dcf3abd468cecba3ef0bdf2702252533231756d716a70587241624c654b535242315374556d6a447634576e7861473852450a66190968881e3775771f4dd7cfa944c14f0aef3b28fd87c7fa87df1cda9000
      => e04000000d038000002c8000008d80000002
      <= 410433d32f24c1c7559b584b027374e174a90ad76043b6da35ec1a4439129b69c6d4ac48f8e9a501c0c3385cec4b4bada92fef39110d538300b1c30e2eb3e97c51e722524c7a5457527467767676515847693973384764724e42573664535238355467777281f1d25097c9aa1905e33355a70704595e9a26e0331398dac8fe55abee25b70e9000
      => b001000000
      <= 01064b6f6d6f646f05322e302e3601029000
      => e040000015058000002c8000008d800000030000000000000000
      <= 41040e2060d2f1ccc4ef871be5384cfc448b039e2e2ede5d7fbfa0d0853221f8ef1711c991833c2b7f3a47255fba6fdfac1a06b2e48694b5ad1e37cbf31031ac4a7f225250354267526955585337567843526278623466445462397972444a394e5432776dd5c1e6589c64601388e3f5ce55465a48c0fe56fef5ec74902a2f7a78f23f06479000
      => b001000000
      <= 01064b6f6d6f646f05322e302e3601029000
      => e040000009028000002c8000008d
      <= 4104fb0f483df5f252ff2ef489859d4f630bcd15ff6706fb3c8515f65f9faeedef1ab8ca4a561dc9366d5c3e456b2c4765e4c7b5098dcf3abd468cecba3ef0bdf2702252533231756d716a70587241624c654b535242315374556d6a447634576e7861473852450a66190968881e3775771f4dd7cfa944c14f0aef3b28fd87c7fa87df1cda9000
      => e04000000d038000002c8000008d80000003
      <= 410438536ef44d799e26a0f6621b5b826df393f02549358fff8ba3dd62d3aa41b40c908f261e451087ebcddeeb049bbf639ec60341ea034208d606dc2f4a630fad0522524a4434705965746b547068705a524c556a4d7a477732586d7a56374b684d59446d008fa8e820bb4cbd993bdcf2d41406a70fecf6bd238c556b214585d70ec983939000
      `,
    },
  ],
};
export default dataset;
