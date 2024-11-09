/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.PortfolioAssetInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).portfolioAsset.createMany(input as any))),

        create: procedure.input($Schema.PortfolioAssetInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).portfolioAsset.create(input as any))),

        deleteMany: procedure.input($Schema.PortfolioAssetInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).portfolioAsset.deleteMany(input as any))),

        delete: procedure.input($Schema.PortfolioAssetInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).portfolioAsset.delete(input as any))),

        findFirst: procedure.input($Schema.PortfolioAssetInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).portfolioAsset.findFirst(input as any))),

        findMany: procedure.input($Schema.PortfolioAssetInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).portfolioAsset.findMany(input as any))),

        findUnique: procedure.input($Schema.PortfolioAssetInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).portfolioAsset.findUnique(input as any))),

        updateMany: procedure.input($Schema.PortfolioAssetInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).portfolioAsset.updateMany(input as any))),

        update: procedure.input($Schema.PortfolioAssetInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).portfolioAsset.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PortfolioAssetCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PortfolioAssetCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PortfolioAssetCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PortfolioAssetCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PortfolioAssetCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PortfolioAssetCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PortfolioAssetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PortfolioAssetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PortfolioAssetCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PortfolioAssetCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PortfolioAssetGetPayload<T>, Context>) => Promise<Prisma.PortfolioAssetGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PortfolioAssetDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PortfolioAssetDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PortfolioAssetDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PortfolioAssetDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PortfolioAssetDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PortfolioAssetDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PortfolioAssetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PortfolioAssetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PortfolioAssetDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PortfolioAssetDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PortfolioAssetGetPayload<T>, Context>) => Promise<Prisma.PortfolioAssetGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PortfolioAssetFindFirstArgs, TData = Prisma.PortfolioAssetGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PortfolioAssetFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PortfolioAssetGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PortfolioAssetFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PortfolioAssetFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PortfolioAssetGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PortfolioAssetGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PortfolioAssetFindManyArgs, TData = Array<Prisma.PortfolioAssetGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.PortfolioAssetFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PortfolioAssetGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PortfolioAssetFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PortfolioAssetFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PortfolioAssetGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PortfolioAssetGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PortfolioAssetFindUniqueArgs, TData = Prisma.PortfolioAssetGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PortfolioAssetFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PortfolioAssetGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PortfolioAssetFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PortfolioAssetFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PortfolioAssetGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PortfolioAssetGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PortfolioAssetUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PortfolioAssetUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PortfolioAssetUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PortfolioAssetUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PortfolioAssetUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PortfolioAssetUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PortfolioAssetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PortfolioAssetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PortfolioAssetUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PortfolioAssetUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PortfolioAssetGetPayload<T>, Context>) => Promise<Prisma.PortfolioAssetGetPayload<T>>
            };

    };
}
