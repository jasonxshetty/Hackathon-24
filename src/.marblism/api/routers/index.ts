/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createAssetRouter from "./Asset.router";
import createPortfolioRouter from "./Portfolio.router";
import createNewsRouter from "./News.router";
import createScenarioRouter from "./Scenario.router";
import createPortfolioAssetRouter from "./PortfolioAsset.router";
import createPortfolioConfigurationRouter from "./PortfolioConfiguration.router";
import createUserRouter from "./User.router";
import createAccountRouter from "./Account.router";
import createSessionRouter from "./Session.router";
import { ClientType as AssetClientType } from "./Asset.router";
import { ClientType as PortfolioClientType } from "./Portfolio.router";
import { ClientType as NewsClientType } from "./News.router";
import { ClientType as ScenarioClientType } from "./Scenario.router";
import { ClientType as PortfolioAssetClientType } from "./PortfolioAsset.router";
import { ClientType as PortfolioConfigurationClientType } from "./PortfolioConfiguration.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as SessionClientType } from "./Session.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        asset: createAssetRouter(router, procedure),
        portfolio: createPortfolioRouter(router, procedure),
        news: createNewsRouter(router, procedure),
        scenario: createScenarioRouter(router, procedure),
        portfolioAsset: createPortfolioAssetRouter(router, procedure),
        portfolioConfiguration: createPortfolioConfigurationRouter(router, procedure),
        user: createUserRouter(router, procedure),
        account: createAccountRouter(router, procedure),
        session: createSessionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    asset: AssetClientType<AppRouter>;
    portfolio: PortfolioClientType<AppRouter>;
    news: NewsClientType<AppRouter>;
    scenario: ScenarioClientType<AppRouter>;
    portfolioAsset: PortfolioAssetClientType<AppRouter>;
    portfolioConfiguration: PortfolioConfigurationClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
}
