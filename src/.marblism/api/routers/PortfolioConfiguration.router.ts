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

        createMany: procedure.input($Schema.PortfolioConfigurationInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).portfolioConfiguration.createMany(input as any))),

        create: procedure.input($Schema.PortfolioConfigurationInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).portfolioConfiguration.create(input as any))),

        deleteMany: procedure.input($Schema.PortfolioConfigurationInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).portfolioConfiguration.deleteMany(input as any))),

        delete: procedure.input($Schema.PortfolioConfigurationInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).portfolioConfiguration.delete(input as any))),

        findFirst: procedure.input($Schema.PortfolioConfigurationInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).portfolioConfiguration.findFirst(input as any))),

        findMany: procedure.input($Schema.PortfolioConfigurationInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).portfolioConfiguration.findMany(input as any))),

        findUnique: procedure.input($Schema.PortfolioConfigurationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).portfolioConfiguration.findUnique(input as any))),

        updateMany: procedure.input($Schema.PortfolioConfigurationInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).portfolioConfiguration.updateMany(input as any))),

        update: procedure.input($Schema.PortfolioConfigurationInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).portfolioConfiguration.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PortfolioConfigurationCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PortfolioConfigurationCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PortfolioConfigurationCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PortfolioConfigurationCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PortfolioConfigurationCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PortfolioConfigurationCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PortfolioConfigurationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PortfolioConfigurationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PortfolioConfigurationCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PortfolioConfigurationCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PortfolioConfigurationGetPayload<T>, Context>) => Promise<Prisma.PortfolioConfigurationGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PortfolioConfigurationDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PortfolioConfigurationDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PortfolioConfigurationDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PortfolioConfigurationDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PortfolioConfigurationDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PortfolioConfigurationDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PortfolioConfigurationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PortfolioConfigurationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PortfolioConfigurationDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PortfolioConfigurationDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PortfolioConfigurationGetPayload<T>, Context>) => Promise<Prisma.PortfolioConfigurationGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PortfolioConfigurationFindFirstArgs, TData = Prisma.PortfolioConfigurationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PortfolioConfigurationFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PortfolioConfigurationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PortfolioConfigurationFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PortfolioConfigurationFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PortfolioConfigurationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PortfolioConfigurationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PortfolioConfigurationFindManyArgs, TData = Array<Prisma.PortfolioConfigurationGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.PortfolioConfigurationFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PortfolioConfigurationGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PortfolioConfigurationFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PortfolioConfigurationFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PortfolioConfigurationGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PortfolioConfigurationGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PortfolioConfigurationFindUniqueArgs, TData = Prisma.PortfolioConfigurationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PortfolioConfigurationFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PortfolioConfigurationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PortfolioConfigurationFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PortfolioConfigurationFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PortfolioConfigurationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PortfolioConfigurationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PortfolioConfigurationUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PortfolioConfigurationUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PortfolioConfigurationUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PortfolioConfigurationUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PortfolioConfigurationUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PortfolioConfigurationUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PortfolioConfigurationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PortfolioConfigurationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PortfolioConfigurationUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PortfolioConfigurationUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PortfolioConfigurationGetPayload<T>, Context>) => Promise<Prisma.PortfolioConfigurationGetPayload<T>>
            };

    };
}
