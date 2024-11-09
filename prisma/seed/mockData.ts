import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('81771cdc-1221-49b8-a7e7-8d716a3de0f0', '1Hilda.Krajcik24@gmail.com', 'Michael Brown', 'https://i.imgur.com/YfJQV5z.png?id=3', 'ghi789', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('54a2223e-2046-4d34-aa36-7a4eae9c800d', '10Autumn47@gmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=12', 'def456', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('05c997d9-519d-4018-ae18-9d4e92662fb0', '19Sincere_Cummings@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=21', 'abc123', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('e42552e3-3e7d-4387-a992-1221aaeff176', '37Glenda.Rodriguez@yahoo.com', 'Emily Taylor', 'https://i.imgur.com/YfJQV5z.png?id=39', 'jkl012', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('b26a4cf4-b195-45cd-abf8-1c505555aef4', '46Felipe.Leannon@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=48', 'abc123', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('8c8a86d3-e427-4c94-9023-0ec98a01db56', '55Lane_Gleichner79@hotmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=57', 'ghi789', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('91bb42f8-4297-4aae-a1ce-1c9d7f120060', '64Imani25@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=66', 'abc123', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('6878fd1a-50d1-4147-9ae5-121e4521da91', '73Diamond_Mertz54@hotmail.com', 'Emily Taylor', 'https://i.imgur.com/YfJQV5z.png?id=75', 'mno345', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('2dd1c3ce-cc77-4340-ba95-9e459042aeb8', '82Aric_Nicolas45@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=84', 'def456', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Asset" ("id", "symbol", "name", "type", "currentPrice", "riskFactor", "sentimentScore") VALUES ('4a4da56c-a57c-4ae6-b8df-1a40dcc004b0', 'GOOGL', 'Alphabet Inc.', 'Crypto', '720.50', 'High', '0.75');
INSERT INTO "Asset" ("id", "symbol", "name", "type", "currentPrice", "riskFactor", "sentimentScore") VALUES ('1a9c24b1-a86e-4095-a023-8416236ce823', 'TSLA', 'Tesla Inc.', 'Stock', '3400.20', 'Low', '0.60');
INSERT INTO "Asset" ("id", "symbol", "name", "type", "currentPrice", "riskFactor", "sentimentScore") VALUES ('a2809f2a-0573-42f9-8555-e09170c94878', 'AAPL', 'Amazon.com Inc.', 'Stock', '45000.00', 'Low', '0.80');
INSERT INTO "Asset" ("id", "symbol", "name", "type", "currentPrice", "riskFactor", "sentimentScore") VALUES ('6f5aa5ec-1598-4f38-ad3b-a9412ff19357', 'AMZN', 'Alphabet Inc.', 'Stock', '3400.20', 'Moderate', '0.50');
INSERT INTO "Asset" ("id", "symbol", "name", "type", "currentPrice", "riskFactor", "sentimentScore") VALUES ('cd9359db-5983-4f35-b4af-6623fcc10dcc', 'AMZN', 'Tesla Inc.', 'Stock', '45000.00', 'Moderate', '0.75');
INSERT INTO "Asset" ("id", "symbol", "name", "type", "currentPrice", "riskFactor", "sentimentScore") VALUES ('e7ee6d61-658d-4dab-b750-335afbe577b4', 'GOOGL', 'Apple Inc.', 'Stock', '3400.20', 'Very High', '0.60');
INSERT INTO "Asset" ("id", "symbol", "name", "type", "currentPrice", "riskFactor", "sentimentScore") VALUES ('0ed5fa44-cabd-4bb8-8fca-b5802e92c665', 'BTC', 'Apple Inc.', 'Stock', '145.30', 'Moderate', '0.80');
INSERT INTO "Asset" ("id", "symbol", "name", "type", "currentPrice", "riskFactor", "sentimentScore") VALUES ('ba696971-ca76-46a1-8e10-d62a57184e67', 'GOOGL', 'Alphabet Inc.', 'Stock', '3400.20', 'High', '0.60');
INSERT INTO "Asset" ("id", "symbol", "name", "type", "currentPrice", "riskFactor", "sentimentScore") VALUES ('095ecbfb-6941-455b-8bba-85bef92f0420', 'AMZN', 'Alphabet Inc.', 'Stock', '720.50', 'High', '0.80');
INSERT INTO "Asset" ("id", "symbol", "name", "type", "currentPrice", "riskFactor", "sentimentScore") VALUES ('122c4e3f-38e5-47d7-b81e-9efa6f64958f', 'AMZN', 'Amazon.com Inc.', 'Stock', '145.30', 'Moderate', '0.70');

INSERT INTO "Portfolio" ("id", "name", "riskScore", "totalValue", "investorProfile", "userId") VALUES ('5e6fd850-070a-45e8-a978-a3b13a32abe7', 'Gamma Investments', '2.8', '275000', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=164', '91bb42f8-4297-4aae-a1ce-1c9d7f120060');
INSERT INTO "Portfolio" ("id", "name", "riskScore", "totalValue", "investorProfile", "userId") VALUES ('29fed37d-d50d-4e04-a756-e8f8fc48d366', 'Epsilon Ventures', '2.8', '320000', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=169', '54a2223e-2046-4d34-aa36-7a4eae9c800d');
INSERT INTO "Portfolio" ("id", "name", "riskScore", "totalValue", "investorProfile", "userId") VALUES ('1a00ff10-0456-4bdd-b62f-6eaeb55339b0', 'Alpha Fund', '4.2', '275000', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=174', '91bb42f8-4297-4aae-a1ce-1c9d7f120060');
INSERT INTO "Portfolio" ("id", "name", "riskScore", "totalValue", "investorProfile", "userId") VALUES ('b68306a7-59d3-4449-a798-ea9f4a3026ea', 'Beta Portfolio', '2.8', '150000', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=179', '91bb42f8-4297-4aae-a1ce-1c9d7f120060');
INSERT INTO "Portfolio" ("id", "name", "riskScore", "totalValue", "investorProfile", "userId") VALUES ('a9e136ea-a4e9-470e-8e45-bf1fa32be0dd', 'Beta Portfolio', '5.0', '320000', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=184', '54a2223e-2046-4d34-aa36-7a4eae9c800d');
INSERT INTO "Portfolio" ("id", "name", "riskScore", "totalValue", "investorProfile", "userId") VALUES ('d5186807-e416-4472-b61d-92c5b2c60e01', 'Epsilon Ventures', '2.8', '150000', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=189', '81771cdc-1221-49b8-a7e7-8d716a3de0f0');
INSERT INTO "Portfolio" ("id", "name", "riskScore", "totalValue", "investorProfile", "userId") VALUES ('77f75a0c-c812-4397-8f78-86506caabac9', 'Beta Portfolio', '3.5', '150000', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=194', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Portfolio" ("id", "name", "riskScore", "totalValue", "investorProfile", "userId") VALUES ('2a505170-2c8b-492d-ab58-081f0e67f966', 'Gamma Investments', '3.9', '450000', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=199', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Portfolio" ("id", "name", "riskScore", "totalValue", "investorProfile", "userId") VALUES ('6d8e04be-ddf5-4d93-bde6-1e772d512c72', 'Gamma Investments', '5.0', '320000', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=204', '8c8a86d3-e427-4c94-9023-0ec98a01db56');
INSERT INTO "Portfolio" ("id", "name", "riskScore", "totalValue", "investorProfile", "userId") VALUES ('2b510ea1-9ea0-4fac-8250-4c4cb06a5b59', 'Alpha Fund', '3.9', '450000', 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf?id=209', 'e42552e3-3e7d-4387-a992-1221aaeff176');

INSERT INTO "News" ("id", "headline", "summary", "sentimentScore", "publishedAt", "assetId") VALUES ('e5cf9ac6-4cd7-41ff-906a-f03f16732034', 'Tech Stocks Surge Amidst Market Optimism', 'Tech stocks have seen a significant rise today driven by positive market sentiment and strong earnings reports.', 'positive', '2024-05-02T11:17:59.041Z', 'a2809f2a-0573-42f9-8555-e09170c94878');
INSERT INTO "News" ("id", "headline", "summary", "sentimentScore", "publishedAt", "assetId") VALUES ('7fd341c6-aa7b-4985-bd25-d3541e28e047', 'Energy Sector Sees Growth with Rising Oil Prices', 'Cryptocurrency markets are experiencing high volatility following new regulatory announcements from major economies.', 'positive', '2024-06-19T17:51:44.533Z', '095ecbfb-6941-455b-8bba-85bef92f0420');
INSERT INTO "News" ("id", "headline", "summary", "sentimentScore", "publishedAt", "assetId") VALUES ('eaccd33d-fe29-4c37-9916-2f9ffaa2d9c9', 'Bond Yields Decline as Investors Seek Safety', 'Investors are flocking to bonds as a safe haven causing yields to drop amid economic uncertainty.', 'negative', '2024-04-23T09:28:35.461Z', '6f5aa5ec-1598-4f38-ad3b-a9412ff19357');
INSERT INTO "News" ("id", "headline", "summary", "sentimentScore", "publishedAt", "assetId") VALUES ('a4a20ed6-c450-4fa9-8aab-2ba9f3bbf098', 'Crypto Market Faces Volatility After Regulatory News', 'Tech stocks have seen a significant rise today driven by positive market sentiment and strong earnings reports.', 'neutral', '2025-04-08T01:59:27.471Z', 'e7ee6d61-658d-4dab-b750-335afbe577b4');
INSERT INTO "News" ("id", "headline", "summary", "sentimentScore", "publishedAt", "assetId") VALUES ('ce50f5a4-b730-4b32-9d00-58eb059944b8', 'Retail Stocks Boosted by Strong Consumer Spending', 'Investors are flocking to bonds as a safe haven causing yields to drop amid economic uncertainty.', 'positive', '2024-04-28T22:12:35.729Z', '1a9c24b1-a86e-4095-a023-8416236ce823');
INSERT INTO "News" ("id", "headline", "summary", "sentimentScore", "publishedAt", "assetId") VALUES ('23be2b18-dd6f-46b7-b593-2fcdf256cbf8', 'Energy Sector Sees Growth with Rising Oil Prices', 'Retail stocks are on the rise supported by robust consumer spending and betterthanexpected sales figures.', 'negative', '2024-03-29T21:03:47.430Z', 'ba696971-ca76-46a1-8e10-d62a57184e67');
INSERT INTO "News" ("id", "headline", "summary", "sentimentScore", "publishedAt", "assetId") VALUES ('84dc16f9-4c19-4298-8027-806673ba44fe', 'Energy Sector Sees Growth with Rising Oil Prices', 'Tech stocks have seen a significant rise today driven by positive market sentiment and strong earnings reports.', 'negative', '2024-01-19T00:38:14.421Z', 'cd9359db-5983-4f35-b4af-6623fcc10dcc');
INSERT INTO "News" ("id", "headline", "summary", "sentimentScore", "publishedAt", "assetId") VALUES ('1a3aa380-e936-44eb-9647-92dca6eab65c', 'Bond Yields Decline as Investors Seek Safety', 'Cryptocurrency markets are experiencing high volatility following new regulatory announcements from major economies.', 'positive', '2024-02-17T05:03:52.808Z', 'a2809f2a-0573-42f9-8555-e09170c94878');
INSERT INTO "News" ("id", "headline", "summary", "sentimentScore", "publishedAt", "assetId") VALUES ('477d3369-2796-48ce-9842-ae83f63bf54a', 'Tech Stocks Surge Amidst Market Optimism', 'Investors are flocking to bonds as a safe haven causing yields to drop amid economic uncertainty.', 'positive', '2024-04-26T11:52:41.259Z', '1a9c24b1-a86e-4095-a023-8416236ce823');
INSERT INTO "News" ("id", "headline", "summary", "sentimentScore", "publishedAt", "assetId") VALUES ('e6cba958-5d28-410c-bbcf-d08a791ed372', 'Bond Yields Decline as Investors Seek Safety', 'Retail stocks are on the rise supported by robust consumer spending and betterthanexpected sales figures.', 'negative', '2024-12-11T01:14:57.099Z', 'a2809f2a-0573-42f9-8555-e09170c94878');

INSERT INTO "Scenario" ("id", "name", "description", "parameters", "isCustom", "userId") VALUES ('d7cfbd18-c363-483b-9b48-98b64b418447', 'Geopolitical Tension', 'A sudden and significant decline in stock market prices leading to a sharp decrease in portfolio value.', '{"valetudo":"caecus","vulpes":"aeternus","angelus":"ratione","audacia":"alveus","subito":"cohors"}'::jsonb, false, 'b26a4cf4-b195-45cd-abf8-1c505555aef4');
INSERT INTO "Scenario" ("id", "name", "description", "parameters", "isCustom", "userId") VALUES ('6c70b62c-e950-49fe-9c32-6cd408390829', 'Market Crash', 'A major technological advancement that disrupts industries and creates new investment opportunities.', '{"utique":"cimentarius","cura":"thymum","cibus":"conor","callide":"creta"}'::jsonb, false, '91bb42f8-4297-4aae-a1ce-1c9d7f120060');
INSERT INTO "Scenario" ("id", "name", "description", "parameters", "isCustom", "userId") VALUES ('be5444b8-d1bb-4bfd-9b0d-7a5980f383ee', 'Bull Market', 'Escalating geopolitical conflicts impacting global markets and causing heightened volatility.', '{"corrigo":"delectatio","curia":"carpo","cohibeo":"absque","comis":"tergum","vigor":"veritatis"}'::jsonb, true, '8c8a86d3-e427-4c94-9023-0ec98a01db56');
INSERT INTO "Scenario" ("id", "name", "description", "parameters", "isCustom", "userId") VALUES ('010e0e26-8863-47a4-a984-734e527cd5ef', 'Market Crash', 'A major technological advancement that disrupts industries and creates new investment opportunities.', '{"odio":"villa","exercitationem":"sollers","constans":"vulgaris","carmen":"aptus"}'::jsonb, false, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Scenario" ("id", "name", "description", "parameters", "isCustom", "userId") VALUES ('942dafa5-bbbd-484e-a1b4-e6c2e8f5cd0c', 'Geopolitical Tension', 'A major technological advancement that disrupts industries and creates new investment opportunities.', '{"uterque":"adficio","desino":"derelinquo","utpote":"cuppedia","paulatim":"eligendi"}'::jsonb, true, '91bb42f8-4297-4aae-a1ce-1c9d7f120060');
INSERT INTO "Scenario" ("id", "name", "description", "parameters", "isCustom", "userId") VALUES ('11e6d410-ca05-4143-8d98-e0fd1ea13427', 'Bull Market', 'Escalating geopolitical conflicts impacting global markets and causing heightened volatility.', '{"minima":"aptus","vapulus":"denique","esse":"vitae","speciosus":"repellendus"}'::jsonb, true, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Scenario" ("id", "name", "description", "parameters", "isCustom", "userId") VALUES ('a9ca8cdd-bf1a-4c1d-84da-92b9ba1602b4', 'Market Crash', 'A period of rising stock prices resulting in increased portfolio value and potential gains.', '{"strenuus":"blandior","voluntarius":"error","arma":"amoveo"}'::jsonb, true, '2dd1c3ce-cc77-4340-ba95-9e459042aeb8');
INSERT INTO "Scenario" ("id", "name", "description", "parameters", "isCustom", "userId") VALUES ('a7cfd96e-823b-40db-a198-1c8fe2103bf1', 'Bull Market', 'A major technological advancement that disrupts industries and creates new investment opportunities.', '{"infit":"ascit","cohors":"vaco","auditor":"cito","decens":"consectetur"}'::jsonb, true, '6878fd1a-50d1-4147-9ae5-121e4521da91');
INSERT INTO "Scenario" ("id", "name", "description", "parameters", "isCustom", "userId") VALUES ('a499751c-14e1-499a-b8be-a8618a2ff801', 'Market Crash', 'Escalating geopolitical conflicts impacting global markets and causing heightened volatility.', '{"pariatur":"pauci","adduco":"correptius","adeptio":"cenaculum","patrocinor":"doloribus","arcus":"venio"}'::jsonb, false, '54a2223e-2046-4d34-aa36-7a4eae9c800d');
INSERT INTO "Scenario" ("id", "name", "description", "parameters", "isCustom", "userId") VALUES ('06d64612-5f17-4331-a825-b21fa685b643', 'Bull Market', 'A period of rising stock prices resulting in increased portfolio value and potential gains.', '{"spiculum":"adipisci","substantia":"suadeo","ultio":"tutis","conventus":"sopor"}'::jsonb, false, '81771cdc-1221-49b8-a7e7-8d716a3de0f0');

INSERT INTO "PortfolioAsset" ("id", "quantity", "purchasePrice", "portfolioId", "assetId") VALUES ('70f3f1be-c5a2-433b-b4b5-7f881d9cc3fa', '250', '120.00', '77f75a0c-c812-4397-8f78-86506caabac9', '4a4da56c-a57c-4ae6-b8df-1a40dcc004b0');
INSERT INTO "PortfolioAsset" ("id", "quantity", "purchasePrice", "portfolioId", "assetId") VALUES ('2308d54b-701a-4956-8796-2af309356eb7', '150', '120.00', 'b68306a7-59d3-4449-a798-ea9f4a3026ea', '122c4e3f-38e5-47d7-b81e-9efa6f64958f');
INSERT INTO "PortfolioAsset" ("id", "quantity", "purchasePrice", "portfolioId", "assetId") VALUES ('2a932f76-9b46-4cca-8fe4-3762761098b6', '100', '200.75', 'a9e136ea-a4e9-470e-8e45-bf1fa32be0dd', 'ba696971-ca76-46a1-8e10-d62a57184e67');
INSERT INTO "PortfolioAsset" ("id", "quantity", "purchasePrice", "portfolioId", "assetId") VALUES ('31bd5346-9237-41b4-b367-9f3d0b43e31a', '250', '50.25', '2a505170-2c8b-492d-ab58-081f0e67f966', '095ecbfb-6941-455b-8bba-85bef92f0420');
INSERT INTO "PortfolioAsset" ("id", "quantity", "purchasePrice", "portfolioId", "assetId") VALUES ('aefddc77-cc40-4c4a-acae-11e6c0d00b96', '75', '200.75', '2a505170-2c8b-492d-ab58-081f0e67f966', 'e7ee6d61-658d-4dab-b750-335afbe577b4');
INSERT INTO "PortfolioAsset" ("id", "quantity", "purchasePrice", "portfolioId", "assetId") VALUES ('e063f18b-af92-4085-b6e5-4928c7f2a253', '250', '50.25', '2b510ea1-9ea0-4fac-8250-4c4cb06a5b59', 'e7ee6d61-658d-4dab-b750-335afbe577b4');
INSERT INTO "PortfolioAsset" ("id", "quantity", "purchasePrice", "portfolioId", "assetId") VALUES ('d4a6e922-4053-416e-a49e-e2cc31da9a8f', '75', '120.00', 'a9e136ea-a4e9-470e-8e45-bf1fa32be0dd', '6f5aa5ec-1598-4f38-ad3b-a9412ff19357');
INSERT INTO "PortfolioAsset" ("id", "quantity", "purchasePrice", "portfolioId", "assetId") VALUES ('900a3118-7569-409d-a86d-86f00d7330f6', '100', '75.50', 'a9e136ea-a4e9-470e-8e45-bf1fa32be0dd', '1a9c24b1-a86e-4095-a023-8416236ce823');
INSERT INTO "PortfolioAsset" ("id", "quantity", "purchasePrice", "portfolioId", "assetId") VALUES ('8a7c67e8-73ab-46d7-992e-e11750e44fe7', '250', '200.75', '29fed37d-d50d-4e04-a756-e8f8fc48d366', '6f5aa5ec-1598-4f38-ad3b-a9412ff19357');
INSERT INTO "PortfolioAsset" ("id", "quantity", "purchasePrice", "portfolioId", "assetId") VALUES ('fd8b11c1-571a-44a5-900e-98424cc36bae', '250', '75.50', '1a00ff10-0456-4bdd-b62f-6eaeb55339b0', '1a9c24b1-a86e-4095-a023-8416236ce823');

INSERT INTO "PortfolioConfiguration" ("id", "name", "configuration", "simulatedRiskScore", "simulatedValue", "portfolioId", "userId") VALUES ('b146443a-bd38-4475-97aa-e73fd10f395e', 'Conservative Portfolio', '{"vesica":"distinctio","verbum":"crepusculum","utrum":"corona","careo":"suus","adsuesco":"totus"}'::jsonb, '12.5', '150000', '2a505170-2c8b-492d-ab58-081f0e67f966', 'b26a4cf4-b195-45cd-abf8-1c505555aef4');
INSERT INTO "PortfolioConfiguration" ("id", "name", "configuration", "simulatedRiskScore", "simulatedValue", "portfolioId", "userId") VALUES ('9674e450-8a7c-44c2-87c8-403de39744fc', 'Crypto Heavy', '{"admoveo":"comparo","calco":"circumvenio","vespillo":"audax","adduco":"altus","paulatim":"desolo"}'::jsonb, '45.3', '750000', '5e6fd850-070a-45e8-a978-a3b13a32abe7', '6878fd1a-50d1-4147-9ae5-121e4521da91');
INSERT INTO "PortfolioConfiguration" ("id", "name", "configuration", "simulatedRiskScore", "simulatedValue", "portfolioId", "userId") VALUES ('6d35c17d-5678-4566-9a65-4029367bed2b', 'Balanced Growth', '{"solvo":"capio","desipio":"fuga","derelinquo":"iusto","tamen":"quam","studio":"callide"}'::jsonb, '45.3', '250000', '5e6fd850-070a-45e8-a978-a3b13a32abe7', '6878fd1a-50d1-4147-9ae5-121e4521da91');
INSERT INTO "PortfolioConfiguration" ("id", "name", "configuration", "simulatedRiskScore", "simulatedValue", "portfolioId", "userId") VALUES ('7eb62d4f-4087-4fa3-b1a9-2d3037c3f664', 'Balanced Growth', '{"tremo":"concedo","turbo":"auditor","error":"comes","utroque":"viscus"}'::jsonb, '45.3', '250000', '6d8e04be-ddf5-4d93-bde6-1e772d512c72', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PortfolioConfiguration" ("id", "name", "configuration", "simulatedRiskScore", "simulatedValue", "portfolioId", "userId") VALUES ('cb5d404a-2561-454d-8697-4a6aa2b16e5d', 'Balanced Growth', '{"id":"veritas","spectaculum":"cito","exercitationem":"creta","apparatus":"antea"}'::jsonb, '34.2', '120000', '5e6fd850-070a-45e8-a978-a3b13a32abe7', '05c997d9-519d-4018-ae18-9d4e92662fb0');
INSERT INTO "PortfolioConfiguration" ("id", "name", "configuration", "simulatedRiskScore", "simulatedValue", "portfolioId", "userId") VALUES ('cb00d00d-f0b4-4eeb-ab60-99352f539796', 'Dividend Focus', '{"vulnero":"deorsum","super":"derelinquo","soleo":"ait","degusto":"solum"}'::jsonb, '34.2', '750000', '6d8e04be-ddf5-4d93-bde6-1e772d512c72', 'e42552e3-3e7d-4387-a992-1221aaeff176');
INSERT INTO "PortfolioConfiguration" ("id", "name", "configuration", "simulatedRiskScore", "simulatedValue", "portfolioId", "userId") VALUES ('732cb617-5bae-4faf-ae7c-5dc506551e84', 'Conservative Portfolio', '{"armarium":"impedit","tondeo":"amplus","vomer":"vulnus","blandior":"deleo","ancilla":"defendo"}'::jsonb, '45.3', '120000', '6d8e04be-ddf5-4d93-bde6-1e772d512c72', '2dd1c3ce-cc77-4340-ba95-9e459042aeb8');
INSERT INTO "PortfolioConfiguration" ("id", "name", "configuration", "simulatedRiskScore", "simulatedValue", "portfolioId", "userId") VALUES ('992ce6c3-aa9d-4500-9b1e-d18f9d3577ed', 'Conservative Portfolio', '{"caries":"officia","fugit":"verbum","delinquo":"vinum"}'::jsonb, '12.5', '120000', '77f75a0c-c812-4397-8f78-86506caabac9', '6878fd1a-50d1-4147-9ae5-121e4521da91');
INSERT INTO "PortfolioConfiguration" ("id", "name", "configuration", "simulatedRiskScore", "simulatedValue", "portfolioId", "userId") VALUES ('bc67ca75-f48b-4fa9-a82b-e2524506a800', 'Dividend Focus', '{"cubitum":"confero","tantum":"cohors","basium":"eligendi","bellum":"balbus","vulgivagus":"sumo"}'::jsonb, '78.9', '750000', 'd5186807-e416-4472-b61d-92c5b2c60e01', '2dd1c3ce-cc77-4340-ba95-9e459042aeb8');
INSERT INTO "PortfolioConfiguration" ("id", "name", "configuration", "simulatedRiskScore", "simulatedValue", "portfolioId", "userId") VALUES ('cec42dea-e1fb-4c0c-8b27-8dafef992628', 'Crypto Heavy', '{"suffoco":"conspergo","consuasor":"baiulus","suspendo":"allatus","varius":"vobis"}'::jsonb, '89.7', '120000', 'd5186807-e416-4472-b61d-92c5b2c60e01', 'e42552e3-3e7d-4387-a992-1221aaeff176');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
