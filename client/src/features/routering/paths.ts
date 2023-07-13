import { ApiRecordId } from "@features/api";

export const paths = {
  root: () => "/",

  bonuses: () => "/bonuses",
  about: () => "/about",
  events: () => "/events",
  eventDetail: (id: ApiRecordId) => `${paths.events()}/${id}`,

  faq: () => "/faq",
  zakat: () => "/zakat",

  auth: () => "/auth",
  restorePassword: () => "/restore-password",
  secretCode: () => `${paths.restorePassword()}/secret-code`,
  newPassword: () => `${paths.restorePassword()}/new-password`,

  profile: () => "/profile",
  profileHistory: () => `${paths.profile()}/history`,
  profilePayments: () => `${paths.profile()}/payments`,
  profileZakat: () => `${paths.profile()}/zakat`,

  profileCard: (id: ApiRecordId) => `${paths.profile()}/cards/${id}`,

  bonusesNewPartners: () => `${paths.bonuses()}/new-partners`,
  bonusesPartners: () => `${paths.bonuses()}/partners`,
  bonusesPartnerDetail: (id: ApiRecordId) => `${paths.bonusesPartners()}/${id}`,
  bonusesRules: () => `${paths.bonuses()}/rules`,
  bonusesMap: () => `${paths.bonuses()}/map`,
  bonusesFaq: () => `${paths.bonuses()}/faq`,
  bonusesMobileApp: () => `${paths.bonuses()}/mobile-app`,
  bonusesPartnership: () => `${paths.bonuses()}/partnership`,

  investments: () => "/investments",
  investmentsTariffs: () => `${paths.investments()}/tariffs`,
  investmentsTariffsDetail: (id: ApiRecordId) =>
    `${paths.investmentsTariffs()}/${id}`,
  investmentsFunds: () => `${paths.investments()}/funds`,
  investmentsFundsDetail: (id: ApiRecordId) =>
    `${paths.investmentsFunds()}/${id}`,
  investmentsStocks: () => `${paths.investments()}/stocks`,
  investmentsStocksDetail: (id: ApiRecordId) =>
    `${paths.investmentsStocks()}/${id}`,
  investmentsFinancesNews: () => `${paths.investments()}/finances-news`,
  investmentsFinancesNewsDetail: (id: ApiRecordId) =>
    `${paths.investmentsFinancesNews()}/${id}`,
  investmentsCurrencyExchange: () => `${paths.investments()}/currency-exchange`,
  investmentsFaq: () => `${paths.investments()}/faq`,
  investmentsPartnership: () => `${paths.investments()}/partnership`,

  finances: () => "/finances",
  financesIndividualsOffers: () => `${paths.finances()}/individuals-offers`,
  financesIndividualsOffersDetail: (id: ApiRecordId) =>
    `${paths.financesIndividualsOffers()}/${id}`,
  financesBusinessOffers: () => `${paths.finances()}/business-offers`,
  financesBusinessOffersDetail: (id: ApiRecordId) =>
    `${paths.financesBusinessOffers()}/${id}`,
  banks: () => "/banks",
  banksDetail: (id: ApiRecordId) => `${paths.banks()}/${id}`,

  mobileApp: () => `/mobile-app`,

  notImplemented: () => "/not-implemented",

  knowledge: () => "/knowledge",
  knowledge1: (id: ApiRecordId) => `${paths.knowledge()}/${id}`,
};
