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

        createMany: procedure.input($Schema.PortfolioInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).portfolio.createMany(input as any))),

        create: procedure.input($Schema.PortfolioInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).portfolio.create(input as any))),

        deleteMany: procedure.input($Schema.PortfolioInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).portfolio.deleteMany(input as any))),

        delete: procedure.input($Schema.PortfolioInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).portfolio.delete(input as any))),

        findFirst: procedure.input($Schema.PortfolioInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).portfolio.findFirst(input as any))),

        findMany: procedure.input($Schema.PortfolioInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).portfolio.findMany(input as any))),

        findUnique: procedure.input($Schema.PortfolioInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).portfolio.findUnique(input as any))),

        updateMany: procedure.input($Schema.PortfolioInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).portfolio.updateMany(input as any))),

        update: procedure.input($Schema.PortfolioInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).portfolio.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PortfolioCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PortfolioCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PortfolioCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PortfolioCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PortfolioCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PortfolioCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PortfolioGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PortfolioGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PortfolioCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PortfolioCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PortfolioGetPayload<T>, Context>) => Promise<Prisma.PortfolioGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PortfolioDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PortfolioDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PortfolioDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PortfolioDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PortfolioDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PortfolioDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PortfolioGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PortfolioGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PortfolioDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PortfolioDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PortfolioGetPayload<T>, Context>) => Promise<Prisma.PortfolioGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PortfolioFindFirstArgs, TData = Prisma.PortfolioGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PortfolioFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PortfolioGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PortfolioFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PortfolioFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PortfolioGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PortfolioGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PortfolioFindManyArgs, TData = Array<Prisma.PortfolioGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.PortfolioFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PortfolioGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PortfolioFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PortfolioFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PortfolioGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PortfolioGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PortfolioFindUniqueArgs, TData = Prisma.PortfolioGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PortfolioFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PortfolioGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PortfolioFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PortfolioFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PortfolioGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PortfolioGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PortfolioUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PortfolioUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PortfolioUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PortfolioUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PortfolioUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PortfolioUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PortfolioGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PortfolioGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PortfolioUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PortfolioUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PortfolioGetPayload<T>, Context>) => Promise<Prisma.PortfolioGetPayload<T>>
            };

    };
}
