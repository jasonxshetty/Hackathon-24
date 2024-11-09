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

        createMany: procedure.input($Schema.NewsInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).news.createMany(input as any))),

        create: procedure.input($Schema.NewsInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).news.create(input as any))),

        deleteMany: procedure.input($Schema.NewsInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).news.deleteMany(input as any))),

        delete: procedure.input($Schema.NewsInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).news.delete(input as any))),

        findFirst: procedure.input($Schema.NewsInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).news.findFirst(input as any))),

        findMany: procedure.input($Schema.NewsInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).news.findMany(input as any))),

        findUnique: procedure.input($Schema.NewsInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).news.findUnique(input as any))),

        updateMany: procedure.input($Schema.NewsInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).news.updateMany(input as any))),

        update: procedure.input($Schema.NewsInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).news.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.NewsCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NewsCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NewsCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NewsCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.NewsCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NewsCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.NewsGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.NewsGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NewsCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NewsCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.NewsGetPayload<T>, Context>) => Promise<Prisma.NewsGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.NewsDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NewsDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NewsDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NewsDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.NewsDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NewsDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.NewsGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.NewsGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NewsDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NewsDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.NewsGetPayload<T>, Context>) => Promise<Prisma.NewsGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.NewsFindFirstArgs, TData = Prisma.NewsGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.NewsFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.NewsGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.NewsFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.NewsFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.NewsGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.NewsGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.NewsFindManyArgs, TData = Array<Prisma.NewsGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.NewsFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.NewsGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.NewsFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.NewsFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.NewsGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.NewsGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.NewsFindUniqueArgs, TData = Prisma.NewsGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.NewsFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.NewsGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.NewsFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.NewsFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.NewsGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.NewsGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.NewsUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NewsUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NewsUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NewsUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.NewsUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NewsUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.NewsGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.NewsGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NewsUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NewsUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.NewsGetPayload<T>, Context>) => Promise<Prisma.NewsGetPayload<T>>
            };

    };
}
