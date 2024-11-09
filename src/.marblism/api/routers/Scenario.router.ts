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

        createMany: procedure.input($Schema.ScenarioInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).scenario.createMany(input as any))),

        create: procedure.input($Schema.ScenarioInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).scenario.create(input as any))),

        deleteMany: procedure.input($Schema.ScenarioInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).scenario.deleteMany(input as any))),

        delete: procedure.input($Schema.ScenarioInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).scenario.delete(input as any))),

        findFirst: procedure.input($Schema.ScenarioInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).scenario.findFirst(input as any))),

        findMany: procedure.input($Schema.ScenarioInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).scenario.findMany(input as any))),

        findUnique: procedure.input($Schema.ScenarioInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).scenario.findUnique(input as any))),

        updateMany: procedure.input($Schema.ScenarioInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).scenario.updateMany(input as any))),

        update: procedure.input($Schema.ScenarioInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).scenario.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ScenarioCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ScenarioCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ScenarioCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ScenarioCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ScenarioCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ScenarioCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ScenarioGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ScenarioGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ScenarioCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ScenarioCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ScenarioGetPayload<T>, Context>) => Promise<Prisma.ScenarioGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ScenarioDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ScenarioDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ScenarioDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ScenarioDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ScenarioDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ScenarioDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ScenarioGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ScenarioGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ScenarioDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ScenarioDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ScenarioGetPayload<T>, Context>) => Promise<Prisma.ScenarioGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ScenarioFindFirstArgs, TData = Prisma.ScenarioGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ScenarioFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ScenarioGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ScenarioFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ScenarioFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ScenarioGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ScenarioGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ScenarioFindManyArgs, TData = Array<Prisma.ScenarioGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ScenarioFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ScenarioGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ScenarioFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ScenarioFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ScenarioGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ScenarioGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ScenarioFindUniqueArgs, TData = Prisma.ScenarioGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ScenarioFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ScenarioGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ScenarioFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ScenarioFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ScenarioGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ScenarioGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ScenarioUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ScenarioUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ScenarioUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ScenarioUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ScenarioUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ScenarioUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ScenarioGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ScenarioGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ScenarioUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ScenarioUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ScenarioGetPayload<T>, Context>) => Promise<Prisma.ScenarioGetPayload<T>>
            };

    };
}
