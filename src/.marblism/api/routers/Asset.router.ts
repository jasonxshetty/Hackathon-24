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

        createMany: procedure.input($Schema.AssetInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).asset.createMany(input as any))),

        create: procedure.input($Schema.AssetInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).asset.create(input as any))),

        deleteMany: procedure.input($Schema.AssetInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).asset.deleteMany(input as any))),

        delete: procedure.input($Schema.AssetInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).asset.delete(input as any))),

        findFirst: procedure.input($Schema.AssetInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).asset.findFirst(input as any))),

        findMany: procedure.input($Schema.AssetInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).asset.findMany(input as any))),

        findUnique: procedure.input($Schema.AssetInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).asset.findUnique(input as any))),

        updateMany: procedure.input($Schema.AssetInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).asset.updateMany(input as any))),

        update: procedure.input($Schema.AssetInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).asset.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.AssetCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AssetCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AssetCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AssetCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.AssetCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AssetCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AssetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AssetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AssetCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AssetCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AssetGetPayload<T>, Context>) => Promise<Prisma.AssetGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.AssetDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AssetDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AssetDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AssetDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.AssetDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AssetDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AssetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AssetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AssetDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AssetDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AssetGetPayload<T>, Context>) => Promise<Prisma.AssetGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.AssetFindFirstArgs, TData = Prisma.AssetGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AssetFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AssetGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AssetFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AssetFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AssetGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AssetGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.AssetFindManyArgs, TData = Array<Prisma.AssetGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.AssetFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.AssetGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AssetFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AssetFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.AssetGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.AssetGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.AssetFindUniqueArgs, TData = Prisma.AssetGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AssetFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AssetGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AssetFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AssetFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AssetGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AssetGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.AssetUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AssetUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AssetUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AssetUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.AssetUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AssetUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AssetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AssetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AssetUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AssetUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AssetGetPayload<T>, Context>) => Promise<Prisma.AssetGetPayload<T>>
            };

    };
}
