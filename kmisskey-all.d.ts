type Nullable<T> = T | null | undefined
declare function KtSingleton<T>(): T & (abstract new() => any);
export declare namespace kotlin.collections {
    interface KtMap<K, V> {
        asJsReadonlyMapView(): ReadonlyMap<K, V>;
        readonly __doNotUseOrImplementIt: {
            readonly "kotlin.collections.KtMap": unique symbol;
        };
    }
    abstract class KtMap<K, V> extends KtSingleton<KtMap.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace KtMap.$metadata$ {
        abstract class constructor {
            fromJsMap<K, V>(map: ReadonlyMap<K, V>): kotlin.collections.KtMap<K, V>;
            private constructor();
        }
    }
}
export declare namespace io.ktor.client.engine.js {
    /** @deprecated  */
    const initHook: any;
}
export declare namespace work.socialhub.kmisskey {
    interface Misskey {
        meta(): work.socialhub.kmisskey.api.MetaResource;
        announcements(): work.socialhub.kmisskey.api.AnnouncementsResource;
        federation(): work.socialhub.kmisskey.api.FederationResource;
        ap(): work.socialhub.kmisskey.api.ApResource;
        app(): work.socialhub.kmisskey.api.AppResource;
        auth(): work.socialhub.kmisskey.api.AuthResource;
        accounts(): work.socialhub.kmisskey.api.AccountsResource;
        users(): work.socialhub.kmisskey.api.UsersResource;
        lists(): work.socialhub.kmisskey.api.ListsResource;
        channels(): work.socialhub.kmisskey.api.ChannelsResource;
        antennas(): work.socialhub.kmisskey.api.AntennasResource;
        clips(): work.socialhub.kmisskey.api.ClipsResource;
        notes(): work.socialhub.kmisskey.api.NotesResource;
        reactions(): work.socialhub.kmisskey.api.ReactionsResource;
        favorites(): work.socialhub.kmisskey.api.FavoritesResource;
        following(): work.socialhub.kmisskey.api.FollowingResource;
        mutes(): work.socialhub.kmisskey.api.MutesResource;
        blocks(): work.socialhub.kmisskey.api.BlocksResource;
        polls(): work.socialhub.kmisskey.api.PollsResource;
        messages(): work.socialhub.kmisskey.api.MessagesResource;
        files(): work.socialhub.kmisskey.api.FilesResource;
        hashtags(): work.socialhub.kmisskey.api.HashtagsResource;
        other(): work.socialhub.kmisskey.api.OtherResource;
        webhook(): work.socialhub.kmisskey.api.WebhooksResource;
        gallery(): work.socialhub.kmisskey.api.GalleriesResource;
        readonly uri: string;
        readonly host: string;
        readonly i: Nullable<string>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.Misskey": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface AccountsResource {
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.AccountsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface AnnouncementsResource {
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.AnnouncementsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface AntennasResource {
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.AntennasResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface ApResource {
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.ApResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface AppResource {
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.AppResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface AuthResource {
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.AuthResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface BlocksResource {
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.BlocksResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface ChannelsResource {
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.ChannelsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface ClipsResource {
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.ClipsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface FavoritesResource {
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.FavoritesResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface FederationResource {
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.FederationResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface FilesResource {
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.FilesResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface FollowingResource {
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.FollowingResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface GalleriesResource {
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.GalleriesResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface HashtagsResource {
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.HashtagsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface ListsResource {
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.ListsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface MessagesResource {
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.MessagesResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface MetaResource {
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.MetaResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface MutesResource {
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.MutesResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface NotesResource {
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.NotesResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface OtherResource {
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.OtherResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface PollsResource {
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.PollsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface ReactionsResource {
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.ReactionsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface UsersResource {
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.UsersResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface WebhooksResource {
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.WebhooksResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api.model {
    class PollRequest {
        constructor();
        get choices(): Nullable<Array<string>>;
        set choices(value: Nullable<Array<string>>);
        get multiple(): Nullable<boolean>;
        set multiple(value: Nullable<boolean>);
        get expiresAt(): Nullable<number>;
        set expiresAt(value: Nullable<number>);
        get expiredAfter(): Nullable<number>;
        set expiredAfter(value: Nullable<number>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace PollRequest.$metadata$ {
        const constructor: abstract new () => PollRequest;
    }
    namespace PollRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request {
    class AnnouncementsRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
        get withUnreads(): Nullable<boolean>;
        set withUnreads(value: Nullable<boolean>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace AnnouncementsRequest.$metadata$ {
        const constructor: abstract new () => AnnouncementsRequest;
    }
    namespace AnnouncementsRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request {
    class ApShowRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get uri(): Nullable<string>;
        set uri(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ApShowRequest.$metadata$ {
        const constructor: abstract new () => ApShowRequest;
    }
    namespace ApShowRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request {
    class CreateAppRequest {
        constructor();
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get permission(): Nullable<Array<string>>;
        set permission(value: Nullable<Array<string>>);
        get callbackUrl(): Nullable<string>;
        set callbackUrl(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace CreateAppRequest.$metadata$ {
        const constructor: abstract new () => CreateAppRequest;
    }
    namespace CreateAppRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request {
    class GenerateAuthSessionRequest {
        constructor();
        get appSecret(): Nullable<string>;
        set appSecret(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace GenerateAuthSessionRequest.$metadata$ {
        const constructor: abstract new () => GenerateAuthSessionRequest;
    }
    namespace GenerateAuthSessionRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request {
    class GetMiAuthUriRequest {
        constructor();
        get sessionId(): Nullable<string>;
        set sessionId(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get iconUri(): Nullable<string>;
        set iconUri(value: Nullable<string>);
        get callbackUrl(): Nullable<string>;
        set callbackUrl(value: Nullable<string>);
        get permission(): Nullable<Array<string>>;
        set permission(value: Nullable<Array<string>>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace GetMiAuthUriRequest.$metadata$ {
        const constructor: abstract new () => GetMiAuthUriRequest;
    }
    namespace GetMiAuthUriRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request {
    class ReadAnnouncementRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(announcementId: string);
        get announcementId(): string;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ReadAnnouncementRequest.$metadata$ {
        const constructor: abstract new () => ReadAnnouncementRequest;
    }
    namespace ReadAnnouncementRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request {
    class UserKeyAuthSessionRequest {
        constructor();
        get appSecret(): Nullable<string>;
        set appSecret(value: Nullable<string>);
        get token(): Nullable<string>;
        set token(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UserKeyAuthSessionRequest.$metadata$ {
        const constructor: abstract new () => UserKeyAuthSessionRequest;
    }
    namespace UserKeyAuthSessionRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.antennas {
    class AntennasListRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace AntennasListRequest.$metadata$ {
        const constructor: abstract new () => AntennasListRequest;
    }
    namespace AntennasListRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.antennas {
    class AntennasNotesRequest /* extends work.socialhub.kmisskey.api.request.protocol.FullPagingTokenRequest */ {
        constructor();
        get antennaId(): Nullable<string>;
        set antennaId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace AntennasNotesRequest.$metadata$ {
        const constructor: abstract new () => AntennasNotesRequest;
    }
    namespace AntennasNotesRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.blocks {
    class BlocksCreateRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace BlocksCreateRequest.$metadata$ {
        const constructor: abstract new () => BlocksCreateRequest;
    }
    namespace BlocksCreateRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.blocks {
    class BlocksDeleteRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace BlocksDeleteRequest.$metadata$ {
        const constructor: abstract new () => BlocksDeleteRequest;
    }
    namespace BlocksDeleteRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.blocks {
    class BlocksListRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace BlocksListRequest.$metadata$ {
        const constructor: abstract new () => BlocksListRequest;
    }
    namespace BlocksListRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.channels {
    class ChannelsFollowedRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ChannelsFollowedRequest.$metadata$ {
        const constructor: abstract new () => ChannelsFollowedRequest;
    }
    namespace ChannelsFollowedRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.channels {
    class ChannelsMyFavoritesRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ChannelsMyFavoritesRequest.$metadata$ {
        const constructor: abstract new () => ChannelsMyFavoritesRequest;
    }
    namespace ChannelsMyFavoritesRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.channels {
    class ChannelsOwnedRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ChannelsOwnedRequest.$metadata$ {
        const constructor: abstract new () => ChannelsOwnedRequest;
    }
    namespace ChannelsOwnedRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.channels {
    class ChannelsShowRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get channelId(): Nullable<string>;
        set channelId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ChannelsShowRequest.$metadata$ {
        const constructor: abstract new () => ChannelsShowRequest;
    }
    namespace ChannelsShowRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.channels {
    class ChannelsTimelineRequest /* extends work.socialhub.kmisskey.api.request.protocol.FullPagingTokenRequest */ {
        constructor();
        get channelId(): Nullable<string>;
        set channelId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ChannelsTimelineRequest.$metadata$ {
        const constructor: abstract new () => ChannelsTimelineRequest;
    }
    namespace ChannelsTimelineRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.clips {
    class ClipsAddNoteRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(noteId: string, clipId: string);
        get noteId(): string;
        get clipId(): string;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ClipsAddNoteRequest.$metadata$ {
        const constructor: abstract new () => ClipsAddNoteRequest;
    }
    namespace ClipsAddNoteRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.clips {
    class ClipsCreateRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get public(): Nullable<boolean>;
        set public(value: Nullable<boolean>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ClipsCreateRequest.$metadata$ {
        const constructor: abstract new () => ClipsCreateRequest;
    }
    namespace ClipsCreateRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.clips {
    class ClipsDeleteRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(clipId: string);
        get clipId(): string;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ClipsDeleteRequest.$metadata$ {
        const constructor: abstract new () => ClipsDeleteRequest;
    }
    namespace ClipsDeleteRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.clips {
    class ClipsListRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ClipsListRequest.$metadata$ {
        const constructor: abstract new () => ClipsListRequest;
    }
    namespace ClipsListRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.clips {
    class ClipsNotesRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
        get clipId(): Nullable<string>;
        set clipId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ClipsNotesRequest.$metadata$ {
        const constructor: abstract new () => ClipsNotesRequest;
    }
    namespace ClipsNotesRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.clips {
    class ClipsRemoveNoteRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(noteId: string, clipId: string);
        get noteId(): string;
        get clipId(): string;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ClipsRemoveNoteRequest.$metadata$ {
        const constructor: abstract new () => ClipsRemoveNoteRequest;
    }
    namespace ClipsRemoveNoteRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.clips {
    class ClipsShowRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(clipId: string);
        get clipId(): string;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ClipsShowRequest.$metadata$ {
        const constructor: abstract new () => ClipsShowRequest;
    }
    namespace ClipsShowRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.clips {
    class ClipsUpdateRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get clipId(): Nullable<string>;
        set clipId(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get public(): Nullable<boolean>;
        set public(value: Nullable<boolean>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ClipsUpdateRequest.$metadata$ {
        const constructor: abstract new () => ClipsUpdateRequest;
    }
    namespace ClipsUpdateRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.favorites {
    class FavoritesCreateRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get noteId(): Nullable<string>;
        set noteId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace FavoritesCreateRequest.$metadata$ {
        const constructor: abstract new () => FavoritesCreateRequest;
    }
    namespace FavoritesCreateRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.favorites {
    class FavoritesDeleteRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get noteId(): Nullable<string>;
        set noteId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace FavoritesDeleteRequest.$metadata$ {
        const constructor: abstract new () => FavoritesDeleteRequest;
    }
    namespace FavoritesDeleteRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.federation {
    class ShowInstanceRequest {
        constructor();
        get host(): Nullable<string>;
        set host(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ShowInstanceRequest.$metadata$ {
        const constructor: abstract new () => ShowInstanceRequest;
    }
    namespace ShowInstanceRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.files {
    class FilesCreateRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get folderId(): Nullable<string>;
        set folderId(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get comment(): Nullable<string>;
        set comment(value: Nullable<string>);
        get sensitive(): Nullable<boolean>;
        set sensitive(value: Nullable<boolean>);
        get force(): Nullable<boolean>;
        set force(value: Nullable<boolean>);
        get bytes(): Nullable<Int8Array>;
        set bytes(value: Nullable<Int8Array>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace FilesCreateRequest.$metadata$ {
        const constructor: abstract new () => FilesCreateRequest;
    }
    namespace FilesCreateRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.following {
    class FollowingCreateRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace FollowingCreateRequest.$metadata$ {
        const constructor: abstract new () => FollowingCreateRequest;
    }
    namespace FollowingCreateRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.following {
    class FollowingDeleteRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace FollowingDeleteRequest.$metadata$ {
        const constructor: abstract new () => FollowingDeleteRequest;
    }
    namespace FollowingDeleteRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.following {
    class FollowingRequestsAcceptRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace FollowingRequestsAcceptRequest.$metadata$ {
        const constructor: abstract new () => FollowingRequestsAcceptRequest;
    }
    namespace FollowingRequestsAcceptRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.following {
    class FollowingRequestsListRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace FollowingRequestsListRequest.$metadata$ {
        const constructor: abstract new () => FollowingRequestsListRequest;
    }
    namespace FollowingRequestsListRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.following {
    class FollowingRequestsRejectRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace FollowingRequestsRejectRequest.$metadata$ {
        const constructor: abstract new () => FollowingRequestsRejectRequest;
    }
    namespace FollowingRequestsRejectRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.gallery {
    class CreateGalleryPostRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(title: string, fileIds: Array<string>);
        get title(): string;
        set title(value: string);
        get fileIds(): Array<string>;
        set fileIds(value: Array<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get isSensitive(): boolean;
        set isSensitive(value: boolean);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace CreateGalleryPostRequest.$metadata$ {
        const constructor: abstract new () => CreateGalleryPostRequest;
    }
    namespace CreateGalleryPostRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.gallery {
    class DeleteGalleryPostRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(postId: string);
        get postId(): string;
        set postId(value: string);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace DeleteGalleryPostRequest.$metadata$ {
        const constructor: abstract new () => DeleteGalleryPostRequest;
    }
    namespace DeleteGalleryPostRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.gallery {
    class LikeGalleryPostRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(postId: string);
        get postId(): string;
        set postId(value: string);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace LikeGalleryPostRequest.$metadata$ {
        const constructor: abstract new () => LikeGalleryPostRequest;
    }
    namespace LikeGalleryPostRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.gallery {
    class ListGalleryPostsRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ListGalleryPostsRequest.$metadata$ {
        const constructor: abstract new () => ListGalleryPostsRequest;
    }
    namespace ListGalleryPostsRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.gallery {
    class ShowGalleryPostRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get postId(): Nullable<string>;
        set postId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ShowGalleryPostRequest.$metadata$ {
        const constructor: abstract new () => ShowGalleryPostRequest;
    }
    namespace ShowGalleryPostRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.gallery {
    class UnlikeGalleryPostRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(postId: string);
        get postId(): string;
        set postId(value: string);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UnlikeGalleryPostRequest.$metadata$ {
        const constructor: abstract new () => UnlikeGalleryPostRequest;
    }
    namespace UnlikeGalleryPostRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.gallery {
    class UpdateGalleryPostRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(postId: string, title: string, fileIds: Array<string>);
        get postId(): string;
        set postId(value: string);
        get title(): string;
        set title(value: string);
        get fileIds(): Array<string>;
        set fileIds(value: Array<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get isSensitive(): boolean;
        set isSensitive(value: boolean);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UpdateGalleryPostRequest.$metadata$ {
        const constructor: abstract new () => UpdateGalleryPostRequest;
    }
    namespace UpdateGalleryPostRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.hashtags {
    class HashtagsTrendRequest {
        constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace HashtagsTrendRequest.$metadata$ {
        const constructor: abstract new () => HashtagsTrendRequest;
    }
    namespace HashtagsTrendRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.i {
    class IFavoritesRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace IFavoritesRequest.$metadata$ {
        const constructor: abstract new () => IFavoritesRequest;
    }
    namespace IFavoritesRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.i {
    class IListGalleryPostsRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace IListGalleryPostsRequest.$metadata$ {
        const constructor: abstract new () => IListGalleryPostsRequest;
    }
    namespace IListGalleryPostsRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.i {
    class INotificationsRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
        get following(): Nullable<boolean>;
        set following(value: Nullable<boolean>);
        get markAsRead(): Nullable<boolean>;
        set markAsRead(value: Nullable<boolean>);
        get includeTypes(): Nullable<Array<string>>;
        set includeTypes(value: Nullable<Array<string>>);
        get excludeTypes(): Nullable<Array<string>>;
        set excludeTypes(value: Nullable<Array<string>>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace INotificationsRequest.$metadata$ {
        const constructor: abstract new () => INotificationsRequest;
    }
    namespace INotificationsRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.i {
    class IPinRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(noteId: string);
        get noteId(): string;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace IPinRequest.$metadata$ {
        const constructor: abstract new () => IPinRequest;
    }
    namespace IPinRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.i {
    class IRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace IRequest.$metadata$ {
        const constructor: abstract new () => IRequest;
    }
    namespace IRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.i {
    class IUnpinRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(noteId: string);
        get noteId(): string;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace IUnpinRequest.$metadata$ {
        const constructor: abstract new () => IUnpinRequest;
    }
    namespace IUnpinRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.i {
    class IUpdateRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get location(): Nullable<string>;
        set location(value: Nullable<string>);
        get birthday(): Nullable<string>;
        set birthday(value: Nullable<string>);
        get lang(): Nullable<string>;
        set lang(value: Nullable<string>);
        get avatarId(): Nullable<string>;
        set avatarId(value: Nullable<string>);
        get bannerId(): Nullable<string>;
        set bannerId(value: Nullable<string>);
        get fields(): Array<work.socialhub.kmisskey.entity.Field>;
        set fields(value: Array<work.socialhub.kmisskey.entity.Field>);
        get isLocked(): Nullable<boolean>;
        set isLocked(value: Nullable<boolean>);
        get isExplorable(): Nullable<boolean>;
        set isExplorable(value: Nullable<boolean>);
        get hideOnlineStatus(): Nullable<boolean>;
        set hideOnlineStatus(value: Nullable<boolean>);
        get publicReactions(): Nullable<boolean>;
        set publicReactions(value: Nullable<boolean>);
        get carefulBot(): Nullable<boolean>;
        set carefulBot(value: Nullable<boolean>);
        get autoAcceptFollowed(): Nullable<boolean>;
        set autoAcceptFollowed(value: Nullable<boolean>);
        get noCrawle(): Nullable<boolean>;
        set noCrawle(value: Nullable<boolean>);
        get preventAiLearning(): Nullable<boolean>;
        set preventAiLearning(value: Nullable<boolean>);
        get isBot(): Nullable<boolean>;
        set isBot(value: Nullable<boolean>);
        get isCat(): Nullable<boolean>;
        set isCat(value: Nullable<boolean>);
        get injectFeaturedNote(): Nullable<boolean>;
        set injectFeaturedNote(value: Nullable<boolean>);
        get receiveAnnouncementEmail(): Nullable<boolean>;
        set receiveAnnouncementEmail(value: Nullable<boolean>);
        get alwaysMarkNsfw(): Nullable<boolean>;
        set alwaysMarkNsfw(value: Nullable<boolean>);
        get autoSensitive(): Nullable<boolean>;
        set autoSensitive(value: Nullable<boolean>);
        get ffVisibility(): Nullable<string>;
        set ffVisibility(value: Nullable<string>);
        get pinnedPageId(): Nullable<string>;
        set pinnedPageId(value: Nullable<string>);
        get mutedWords(): Array<Array<string>>;
        set mutedWords(value: Array<Array<string>>);
        get mutedInstances(): Array<string>;
        set mutedInstances(value: Array<string>);
        get mutingNotificationTypes(): Array<string>;
        set mutingNotificationTypes(value: Array<string>);
        get emailNotificationTypes(): Array<string>;
        set emailNotificationTypes(value: Array<string>);
        get alsoKnownAs(): Array<string>;
        set alsoKnownAs(value: Array<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace IUpdateRequest.$metadata$ {
        const constructor: abstract new () => IUpdateRequest;
    }
    namespace IUpdateRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.lists {
    class UsersListsCreateRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(name: string);
        get name(): string;
        set name(value: string);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UsersListsCreateRequest.$metadata$ {
        const constructor: abstract new () => UsersListsCreateRequest;
    }
    namespace UsersListsCreateRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.lists {
    class UsersListsDeleteRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(listId: string);
        get listId(): string;
        set listId(value: string);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UsersListsDeleteRequest.$metadata$ {
        const constructor: abstract new () => UsersListsDeleteRequest;
    }
    namespace UsersListsDeleteRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.lists {
    class UsersListsListRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UsersListsListRequest.$metadata$ {
        const constructor: abstract new () => UsersListsListRequest;
    }
    namespace UsersListsListRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.lists {
    class UsersListsPullRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get listId(): Nullable<string>;
        set listId(value: Nullable<string>);
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UsersListsPullRequest.$metadata$ {
        const constructor: abstract new () => UsersListsPullRequest;
    }
    namespace UsersListsPullRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.lists {
    class UsersListsPushRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get listId(): Nullable<string>;
        set listId(value: Nullable<string>);
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UsersListsPushRequest.$metadata$ {
        const constructor: abstract new () => UsersListsPushRequest;
    }
    namespace UsersListsPushRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.lists {
    class UsersListsShowRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get listId(): Nullable<string>;
        set listId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UsersListsShowRequest.$metadata$ {
        const constructor: abstract new () => UsersListsShowRequest;
    }
    namespace UsersListsShowRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.lists {
    class UsersListsUpdateRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(listId: string, name: string);
        get listId(): string;
        set listId(value: string);
        get name(): string;
        set name(value: string);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UsersListsUpdateRequest.$metadata$ {
        const constructor: abstract new () => UsersListsUpdateRequest;
    }
    namespace UsersListsUpdateRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.messages {
    class MessagingHistoryRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get group(): Nullable<boolean>;
        set group(value: Nullable<boolean>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace MessagingHistoryRequest.$metadata$ {
        const constructor: abstract new () => MessagingHistoryRequest;
    }
    namespace MessagingHistoryRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.messages {
    class MessagingMessagesCreateRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get groupId(): Nullable<string>;
        set groupId(value: Nullable<string>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get fileId(): Nullable<string>;
        set fileId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace MessagingMessagesCreateRequest.$metadata$ {
        const constructor: abstract new () => MessagingMessagesCreateRequest;
    }
    namespace MessagingMessagesCreateRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.messages {
    class MessagingMessagesDeleteRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get messageId(): Nullable<string>;
        set messageId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace MessagingMessagesDeleteRequest.$metadata$ {
        const constructor: abstract new () => MessagingMessagesDeleteRequest;
    }
    namespace MessagingMessagesDeleteRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.messages {
    class MessagingMessagesRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get groupId(): Nullable<string>;
        set groupId(value: Nullable<string>);
        get markAsRead(): Nullable<boolean>;
        set markAsRead(value: Nullable<boolean>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace MessagingMessagesRequest.$metadata$ {
        const constructor: abstract new () => MessagingMessagesRequest;
    }
    namespace MessagingMessagesRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.meta {
    class EmojisRequest {
        constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace EmojisRequest.$metadata$ {
        const constructor: abstract new () => EmojisRequest;
    }
    namespace EmojisRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.meta {
    class MetaRequest {
        constructor();
        get detail(): Nullable<boolean>;
        set detail(value: Nullable<boolean>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace MetaRequest.$metadata$ {
        const constructor: abstract new () => MetaRequest;
    }
    namespace MetaRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.mutes {
    class MutesCreateRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace MutesCreateRequest.$metadata$ {
        const constructor: abstract new () => MutesCreateRequest;
    }
    namespace MutesCreateRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.mutes {
    class MutesDeleteRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace MutesDeleteRequest.$metadata$ {
        const constructor: abstract new () => MutesDeleteRequest;
    }
    namespace MutesDeleteRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.mutes {
    class MutesListRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace MutesListRequest.$metadata$ {
        const constructor: abstract new () => MutesListRequest;
    }
    namespace MutesListRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NoteUnrenoteRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get noteId(): Nullable<string>;
        set noteId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace NoteUnrenoteRequest.$metadata$ {
        const constructor: abstract new () => NoteUnrenoteRequest;
    }
    namespace NoteUnrenoteRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NotesChildrenRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
        get noteId(): Nullable<string>;
        set noteId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace NotesChildrenRequest.$metadata$ {
        const constructor: abstract new () => NotesChildrenRequest;
    }
    namespace NotesChildrenRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NotesConversationRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get noteId(): Nullable<string>;
        set noteId(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get offset(): Nullable<number>;
        set offset(value: Nullable<number>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace NotesConversationRequest.$metadata$ {
        const constructor: abstract new () => NotesConversationRequest;
    }
    namespace NotesConversationRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NotesCreateRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get visibility(): Nullable<string>;
        set visibility(value: Nullable<string>);
        get visibleUserIds(): Nullable<Array<string>>;
        set visibleUserIds(value: Nullable<Array<string>>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get cw(): Nullable<string>;
        set cw(value: Nullable<string>);
        get viaMobile(): Nullable<boolean>;
        set viaMobile(value: Nullable<boolean>);
        get localOnly(): Nullable<boolean>;
        set localOnly(value: Nullable<boolean>);
        get noExtractMentions(): Nullable<boolean>;
        set noExtractMentions(value: Nullable<boolean>);
        get noExtractHashtags(): Nullable<boolean>;
        set noExtractHashtags(value: Nullable<boolean>);
        get noExtractEmojis(): Nullable<boolean>;
        set noExtractEmojis(value: Nullable<boolean>);
        get fileIds(): Nullable<Array<string>>;
        set fileIds(value: Nullable<Array<string>>);
        get replyId(): Nullable<string>;
        set replyId(value: Nullable<string>);
        get renoteId(): Nullable<string>;
        set renoteId(value: Nullable<string>);
        get channelId(): Nullable<string>;
        set channelId(value: Nullable<string>);
        get poll(): Nullable<work.socialhub.kmisskey.api.model.PollRequest>;
        set poll(value: Nullable<work.socialhub.kmisskey.api.model.PollRequest>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace NotesCreateRequest.$metadata$ {
        const constructor: abstract new () => NotesCreateRequest;
    }
    namespace NotesCreateRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NotesDeleteRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get noteId(): Nullable<string>;
        set noteId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace NotesDeleteRequest.$metadata$ {
        const constructor: abstract new () => NotesDeleteRequest;
    }
    namespace NotesDeleteRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NotesFeaturedRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get offset(): Nullable<number>;
        set offset(value: Nullable<number>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace NotesFeaturedRequest.$metadata$ {
        const constructor: abstract new () => NotesFeaturedRequest;
    }
    namespace NotesFeaturedRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NotesGlobalTimelineRequest /* extends work.socialhub.kmisskey.api.request.protocol.FullPagingTokenRequest */ {
        constructor();
        get withFiles(): Nullable<boolean>;
        set withFiles(value: Nullable<boolean>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace NotesGlobalTimelineRequest.$metadata$ {
        const constructor: abstract new () => NotesGlobalTimelineRequest;
    }
    namespace NotesGlobalTimelineRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NotesHybridTimelineRequest /* extends work.socialhub.kmisskey.api.request.protocol.FullPagingTokenRequest */ {
        constructor();
        get includeMyRenotes(): Nullable<boolean>;
        set includeMyRenotes(value: Nullable<boolean>);
        get includeRenotedMyNotes(): Nullable<boolean>;
        set includeRenotedMyNotes(value: Nullable<boolean>);
        get includeLocalRenotes(): Nullable<boolean>;
        set includeLocalRenotes(value: Nullable<boolean>);
        get withFiles(): Nullable<boolean>;
        set withFiles(value: Nullable<boolean>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace NotesHybridTimelineRequest.$metadata$ {
        const constructor: abstract new () => NotesHybridTimelineRequest;
    }
    namespace NotesHybridTimelineRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NotesLocalTimelineRequest /* extends work.socialhub.kmisskey.api.request.protocol.FullPagingTokenRequest */ {
        constructor();
        get withFiles(): Nullable<boolean>;
        set withFiles(value: Nullable<boolean>);
        get fileType(): Nullable<Array<string>>;
        set fileType(value: Nullable<Array<string>>);
        get excludeNsfw(): Nullable<boolean>;
        set excludeNsfw(value: Nullable<boolean>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace NotesLocalTimelineRequest.$metadata$ {
        const constructor: abstract new () => NotesLocalTimelineRequest;
    }
    namespace NotesLocalTimelineRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NotesMentionsRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
        get following(): Nullable<boolean>;
        set following(value: Nullable<boolean>);
        get visibility(): Nullable<string>;
        set visibility(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace NotesMentionsRequest.$metadata$ {
        const constructor: abstract new () => NotesMentionsRequest;
    }
    namespace NotesMentionsRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NotesReactionsRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
        get noteId(): Nullable<string>;
        set noteId(value: Nullable<string>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get offset(): Nullable<number>;
        set offset(value: Nullable<number>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace NotesReactionsRequest.$metadata$ {
        const constructor: abstract new () => NotesReactionsRequest;
    }
    namespace NotesReactionsRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NotesRenotesRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
        get noteId(): Nullable<string>;
        set noteId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace NotesRenotesRequest.$metadata$ {
        const constructor: abstract new () => NotesRenotesRequest;
    }
    namespace NotesRenotesRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NotesRepliesRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
        get noteId(): Nullable<string>;
        set noteId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace NotesRepliesRequest.$metadata$ {
        const constructor: abstract new () => NotesRepliesRequest;
    }
    namespace NotesRepliesRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NotesRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
        get local(): Nullable<boolean>;
        set local(value: Nullable<boolean>);
        get reply(): Nullable<boolean>;
        set reply(value: Nullable<boolean>);
        get renote(): Nullable<boolean>;
        set renote(value: Nullable<boolean>);
        get withFiles(): Nullable<boolean>;
        set withFiles(value: Nullable<boolean>);
        get poll(): Nullable<boolean>;
        set poll(value: Nullable<boolean>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace NotesRequest.$metadata$ {
        const constructor: abstract new () => NotesRequest;
    }
    namespace NotesRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NotesSearchByTagRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor(tag: string);
        get tag(): string;
        get reply(): Nullable<boolean>;
        set reply(value: Nullable<boolean>);
        get renote(): Nullable<boolean>;
        set renote(value: Nullable<boolean>);
        get withFiles(): Nullable<boolean>;
        set withFiles(value: Nullable<boolean>);
        get poll(): Nullable<boolean>;
        set poll(value: Nullable<boolean>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace NotesSearchByTagRequest.$metadata$ {
        const constructor: abstract new () => NotesSearchByTagRequest;
    }
    namespace NotesSearchByTagRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NotesSearchRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
        get query(): Nullable<string>;
        set query(value: Nullable<string>);
        get host(): Nullable<string>;
        set host(value: Nullable<string>);
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace NotesSearchRequest.$metadata$ {
        const constructor: abstract new () => NotesSearchRequest;
    }
    namespace NotesSearchRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NotesShowRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get noteId(): Nullable<string>;
        set noteId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace NotesShowRequest.$metadata$ {
        const constructor: abstract new () => NotesShowRequest;
    }
    namespace NotesShowRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NotesTimelineRequest /* extends work.socialhub.kmisskey.api.request.protocol.FullPagingTokenRequest */ {
        constructor();
        get includeMyRenotes(): Nullable<boolean>;
        set includeMyRenotes(value: Nullable<boolean>);
        get includeRenotedMyNotes(): Nullable<boolean>;
        set includeRenotedMyNotes(value: Nullable<boolean>);
        get includeLocalRenotes(): Nullable<boolean>;
        set includeLocalRenotes(value: Nullable<boolean>);
        get withFiles(): Nullable<boolean>;
        set withFiles(value: Nullable<boolean>);
        get withReplies(): Nullable<boolean>;
        set withReplies(value: Nullable<boolean>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace NotesTimelineRequest.$metadata$ {
        const constructor: abstract new () => NotesTimelineRequest;
    }
    namespace NotesTimelineRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NotesUserListTimelineRequest /* extends work.socialhub.kmisskey.api.request.protocol.FullPagingTokenRequest */ {
        constructor();
        get listId(): Nullable<string>;
        set listId(value: Nullable<string>);
        get includeMyRenotes(): Nullable<boolean>;
        set includeMyRenotes(value: Nullable<boolean>);
        get includeRenotedMyNotes(): Nullable<boolean>;
        set includeRenotedMyNotes(value: Nullable<boolean>);
        get includeLocalRenotes(): Nullable<boolean>;
        set includeLocalRenotes(value: Nullable<boolean>);
        get withFiles(): Nullable<boolean>;
        set withFiles(value: Nullable<boolean>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace NotesUserListTimelineRequest.$metadata$ {
        const constructor: abstract new () => NotesUserListTimelineRequest;
    }
    namespace NotesUserListTimelineRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class UsersNotesRequest /* extends work.socialhub.kmisskey.api.request.protocol.FullPagingTokenRequest */ {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get includeReplies(): Nullable<boolean>;
        set includeReplies(value: Nullable<boolean>);
        get includeMyRenotes(): Nullable<boolean>;
        set includeMyRenotes(value: Nullable<boolean>);
        get excludeNsfw(): Nullable<boolean>;
        set excludeNsfw(value: Nullable<boolean>);
        get withFiles(): Nullable<boolean>;
        set withFiles(value: Nullable<boolean>);
        get withChannelNotes(): Nullable<boolean>;
        set withChannelNotes(value: Nullable<boolean>);
        get fileType(): Nullable<Array<string>>;
        set fileType(value: Nullable<Array<string>>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UsersNotesRequest.$metadata$ {
        const constructor: abstract new () => UsersNotesRequest;
    }
    namespace UsersNotesRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.other {
    class ServiceWorkerRegisterRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get endpoint(): Nullable<string>;
        set endpoint(value: Nullable<string>);
        get auth(): Nullable<string>;
        set auth(value: Nullable<string>);
        get publickey(): Nullable<string>;
        set publickey(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ServiceWorkerRegisterRequest.$metadata$ {
        const constructor: abstract new () => ServiceWorkerRegisterRequest;
    }
    namespace ServiceWorkerRegisterRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.polls {
    class PollsVoteRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get noteId(): Nullable<string>;
        set noteId(value: Nullable<string>);
        get choice(): Nullable<number>;
        set choice(value: Nullable<number>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace PollsVoteRequest.$metadata$ {
        const constructor: abstract new () => PollsVoteRequest;
    }
    namespace PollsVoteRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.reactions {
    class ReactionsCreateRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get noteId(): Nullable<string>;
        set noteId(value: Nullable<string>);
        get reaction(): Nullable<string>;
        set reaction(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ReactionsCreateRequest.$metadata$ {
        const constructor: abstract new () => ReactionsCreateRequest;
    }
    namespace ReactionsCreateRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.reactions {
    class ReactionsDeleteRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get noteId(): Nullable<string>;
        set noteId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ReactionsDeleteRequest.$metadata$ {
        const constructor: abstract new () => ReactionsDeleteRequest;
    }
    namespace ReactionsDeleteRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.users {
    class ListUserGalleryPostsRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor(userId: string);
        get userId(): string;
        set userId(value: string);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ListUserGalleryPostsRequest.$metadata$ {
        const constructor: abstract new () => ListUserGalleryPostsRequest;
    }
    namespace ListUserGalleryPostsRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.users {
    class UsersFollowersRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingRequest */ {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get username(): Nullable<string>;
        set username(value: Nullable<string>);
        get host(): Nullable<string>;
        set host(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UsersFollowersRequest.$metadata$ {
        const constructor: abstract new () => UsersFollowersRequest;
    }
    namespace UsersFollowersRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.users {
    class UsersFollowingsRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingRequest */ {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get username(): Nullable<string>;
        set username(value: Nullable<string>);
        get host(): Nullable<string>;
        set host(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UsersFollowingsRequest.$metadata$ {
        const constructor: abstract new () => UsersFollowingsRequest;
    }
    namespace UsersFollowingsRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.users {
    class UsersReactionsRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UsersReactionsRequest.$metadata$ {
        const constructor: abstract new () => UsersReactionsRequest;
    }
    namespace UsersReactionsRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.users {
    class UsersRecommendationRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get offset(): Nullable<number>;
        set offset(value: Nullable<number>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UsersRecommendationRequest.$metadata$ {
        const constructor: abstract new () => UsersRecommendationRequest;
    }
    namespace UsersRecommendationRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.users {
    class UsersRelationRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get userId(): Array<string>;
        set userId(value: Array<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UsersRelationRequest.$metadata$ {
        const constructor: abstract new () => UsersRelationRequest;
    }
    namespace UsersRelationRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.users {
    class UsersSearchByUsernameAndHostRequest {
        constructor(username: string);
        get username(): string;
        set username(value: string);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get detail(): Nullable<boolean>;
        set detail(value: Nullable<boolean>);
        get host(): Nullable<string>;
        set host(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UsersSearchByUsernameAndHostRequest.$metadata$ {
        const constructor: abstract new () => UsersSearchByUsernameAndHostRequest;
    }
    namespace UsersSearchByUsernameAndHostRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.users {
    class UsersSearchRequest {
        constructor();
        get query(): Nullable<string>;
        set query(value: Nullable<string>);
        get offset(): Nullable<number>;
        set offset(value: Nullable<number>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get localOnly(): Nullable<boolean>;
        set localOnly(value: Nullable<boolean>);
        get detail(): Nullable<boolean>;
        set detail(value: Nullable<boolean>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UsersSearchRequest.$metadata$ {
        const constructor: abstract new () => UsersSearchRequest;
    }
    namespace UsersSearchRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.users {
    class UsersShowMultipleRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get userIds(): Array<string>;
        set userIds(value: Array<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UsersShowMultipleRequest.$metadata$ {
        const constructor: abstract new () => UsersShowMultipleRequest;
    }
    namespace UsersShowMultipleRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.users {
    class UsersShowSingleRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get username(): Nullable<string>;
        set username(value: Nullable<string>);
        get host(): Nullable<string>;
        set host(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UsersShowSingleRequest.$metadata$ {
        const constructor: abstract new () => UsersShowSingleRequest;
    }
    namespace UsersShowSingleRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.webhooks {
    class CreateWebhooksRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get on(): Nullable<Array<string>>;
        set on(value: Nullable<Array<string>>);
        get secret(): Nullable<string>;
        set secret(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace CreateWebhooksRequest.$metadata$ {
        const constructor: abstract new () => CreateWebhooksRequest;
    }
    namespace CreateWebhooksRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.webhooks {
    class DeleteWebhooksRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get webhookId(): Nullable<string>;
        set webhookId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace DeleteWebhooksRequest.$metadata$ {
        const constructor: abstract new () => DeleteWebhooksRequest;
    }
    namespace DeleteWebhooksRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.webhooks {
    class ListWebhooksRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ListWebhooksRequest.$metadata$ {
        const constructor: abstract new () => ListWebhooksRequest;
    }
    namespace ListWebhooksRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.webhooks {
    class ShowWebhooksRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get webhookId(): Nullable<string>;
        set webhookId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ShowWebhooksRequest.$metadata$ {
        const constructor: abstract new () => ShowWebhooksRequest;
    }
    namespace ShowWebhooksRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.webhooks {
    class UpdateWebhooksRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get webhookId(): Nullable<string>;
        set webhookId(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get on(): Nullable<Array<string>>;
        set on(value: Nullable<Array<string>>);
        get secret(): Nullable<string>;
        set secret(value: Nullable<string>);
        get active(): Nullable<boolean>;
        set active(value: Nullable<boolean>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UpdateWebhooksRequest.$metadata$ {
        const constructor: abstract new () => UpdateWebhooksRequest;
    }
    namespace UpdateWebhooksRequest {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.response {
    class ApShowResponse {
        constructor();
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get note(): Nullable<work.socialhub.kmisskey.entity.Note>;
        set note(value: Nullable<work.socialhub.kmisskey.entity.Note>);
        get user(): Nullable<work.socialhub.kmisskey.entity.user.User>;
        set user(value: Nullable<work.socialhub.kmisskey.entity.user.User>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ApShowResponse.$metadata$ {
        const constructor: abstract new () => ApShowResponse;
    }
}
export declare namespace work.socialhub.kmisskey.api.response {
    class CreateAppResponse {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get callbackUrl(): Nullable<string>;
        set callbackUrl(value: Nullable<string>);
        get permission(): Nullable<Array<string>>;
        set permission(value: Nullable<Array<string>>);
        get secret(): Nullable<string>;
        set secret(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace CreateAppResponse.$metadata$ {
        const constructor: abstract new () => CreateAppResponse;
    }
    namespace CreateAppResponse {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.response {
    class GenerateAuthSessionResponse {
        constructor();
        get token(): Nullable<string>;
        set token(value: Nullable<string>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace GenerateAuthSessionResponse.$metadata$ {
        const constructor: abstract new () => GenerateAuthSessionResponse;
    }
    namespace GenerateAuthSessionResponse {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.response {
    class UserKeyAuthSessionResponse {
        constructor();
        get accessToken(): Nullable<string>;
        set accessToken(value: Nullable<string>);
        get user(): Nullable<work.socialhub.kmisskey.entity.user.User>;
        set user(value: Nullable<work.socialhub.kmisskey.entity.user.User>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UserKeyAuthSessionResponse.$metadata$ {
        const constructor: abstract new () => UserKeyAuthSessionResponse;
    }
    namespace UserKeyAuthSessionResponse {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.response.federation {
    class FederationInstanceResponse {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get firstRetrievedAt(): Nullable<string>;
        set firstRetrievedAt(value: Nullable<string>);
        get host(): Nullable<string>;
        set host(value: Nullable<string>);
        get usersCount(): Nullable<number>;
        set usersCount(value: Nullable<number>);
        get notesCount(): Nullable<number>;
        set notesCount(value: Nullable<number>);
        get followingCount(): Nullable<number>;
        set followingCount(value: Nullable<number>);
        get followersCount(): Nullable<number>;
        set followersCount(value: Nullable<number>);
        get notResponding(): Nullable<boolean>;
        set notResponding(value: Nullable<boolean>);
        get suspended(): Nullable<boolean>;
        set suspended(value: Nullable<boolean>);
        get blocked(): Nullable<boolean>;
        set blocked(value: Nullable<boolean>);
        get softwareName(): Nullable<string>;
        set softwareName(value: Nullable<string>);
        get softwareVersion(): Nullable<string>;
        set softwareVersion(value: Nullable<string>);
        get openRegistrations(): Nullable<boolean>;
        set openRegistrations(value: Nullable<boolean>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get maintainerName(): Nullable<string>;
        set maintainerName(value: Nullable<string>);
        get maintainerEmail(): Nullable<string>;
        set maintainerEmail(value: Nullable<string>);
        get iconUrl(): Nullable<string>;
        set iconUrl(value: Nullable<string>);
        get faviconUrl(): Nullable<string>;
        set faviconUrl(value: Nullable<string>);
        get themeColor(): Nullable<string>;
        set themeColor(value: Nullable<string>);
        get infoUpdatedAt(): Nullable<string>;
        set infoUpdatedAt(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace FederationInstanceResponse.$metadata$ {
        const constructor: abstract new () => FederationInstanceResponse;
    }
    namespace FederationInstanceResponse {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.response.following {
    class FollowingRequestsListResponse {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get follower(): Nullable<work.socialhub.kmisskey.entity.user.User>;
        set follower(value: Nullable<work.socialhub.kmisskey.entity.user.User>);
        get followee(): Nullable<work.socialhub.kmisskey.entity.user.User>;
        set followee(value: Nullable<work.socialhub.kmisskey.entity.user.User>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace FollowingRequestsListResponse.$metadata$ {
        const constructor: abstract new () => FollowingRequestsListResponse;
    }
    namespace FollowingRequestsListResponse {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.response.i {
    class IFavoritesResponse {
        constructor();
        get id(): string;
        set id(value: string);
        get createdAt(): string;
        set createdAt(value: string);
        get noteId(): string;
        set noteId(value: string);
        get note(): work.socialhub.kmisskey.entity.Note;
        set note(value: work.socialhub.kmisskey.entity.Note);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace IFavoritesResponse.$metadata$ {
        const constructor: abstract new () => IFavoritesResponse;
    }
    namespace IFavoritesResponse {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.response.meta {
    class EmojisResponse {
        constructor();
        get emojis(): Array<work.socialhub.kmisskey.entity.Emoji>;
        set emojis(value: Array<work.socialhub.kmisskey.entity.Emoji>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace EmojisResponse.$metadata$ {
        const constructor: abstract new () => EmojisResponse;
    }
    namespace EmojisResponse {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.response.meta {
    class GetOnlineUsersCountResponse {
        constructor();
        get count(): Nullable<number>;
        set count(value: Nullable<number>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace GetOnlineUsersCountResponse.$metadata$ {
        const constructor: abstract new () => GetOnlineUsersCountResponse;
    }
    namespace GetOnlineUsersCountResponse {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.response.notes {
    class NotesCreateResponse {
        constructor();
        get createdNote(): work.socialhub.kmisskey.entity.Note;
        set createdNote(value: work.socialhub.kmisskey.entity.Note);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace NotesCreateResponse.$metadata$ {
        const constructor: abstract new () => NotesCreateResponse;
    }
    namespace NotesCreateResponse {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.response.notes {
    class NotesReactionsResponse {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get createdAt(): Nullable<string>;
        set createdAt(value: Nullable<string>);
        get user(): Nullable<work.socialhub.kmisskey.entity.user.User>;
        set user(value: Nullable<work.socialhub.kmisskey.entity.user.User>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace NotesReactionsResponse.$metadata$ {
        const constructor: abstract new () => NotesReactionsResponse;
    }
    namespace NotesReactionsResponse {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.response.notes {
    class UsersReactionsResponse {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get createdAt(): Nullable<string>;
        set createdAt(value: Nullable<string>);
        get user(): Nullable<work.socialhub.kmisskey.entity.user.User>;
        set user(value: Nullable<work.socialhub.kmisskey.entity.user.User>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get note(): Nullable<work.socialhub.kmisskey.entity.Note>;
        set note(value: Nullable<work.socialhub.kmisskey.entity.Note>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UsersReactionsResponse.$metadata$ {
        const constructor: abstract new () => UsersReactionsResponse;
    }
    namespace UsersReactionsResponse {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.response.other {
    class ServiceWorkerRegisterResponse {
        constructor();
        get state(): Nullable<string>;
        set state(value: Nullable<string>);
        get key(): Nullable<string>;
        set key(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace ServiceWorkerRegisterResponse.$metadata$ {
        const constructor: abstract new () => ServiceWorkerRegisterResponse;
    }
    namespace ServiceWorkerRegisterResponse {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.response.webhooks {
    class DeleteWebhooksResponse {
        constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace DeleteWebhooksResponse.$metadata$ {
        const constructor: abstract new () => DeleteWebhooksResponse;
    }
    namespace DeleteWebhooksResponse {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.response.webhooks {
    class UpdateWebhooksResponse {
        constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UpdateWebhooksResponse.$metadata$ {
        const constructor: abstract new () => UpdateWebhooksResponse;
    }
    namespace UpdateWebhooksResponse {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Achievement {
        constructor();
        get name(): string;
        set name(value: string);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Achievement.$metadata$ {
        const constructor: abstract new () => Achievement;
    }
    namespace Achievement {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Announcements {
        constructor();
        get id(): string;
        set id(value: string);
        get createdAt(): string;
        set createdAt(value: string);
        get updatedAt(): Nullable<string>;
        set updatedAt(value: Nullable<string>);
        get text(): string;
        set text(value: string);
        get title(): string;
        set title(value: string);
        get imageUrl(): Nullable<string>;
        set imageUrl(value: Nullable<string>);
        get icon(): string;
        set icon(value: string);
        get display(): string;
        set display(value: string);
        get needConfirmationToRead(): boolean;
        set needConfirmationToRead(value: boolean);
        get forYou(): boolean;
        set forYou(value: boolean);
        get closeDuration(): number;
        set closeDuration(value: number);
        get displayOrder(): number;
        set displayOrder(value: number);
        get silenced(): boolean;
        set silenced(value: boolean);
        get isRead(): boolean;
        set isRead(value: boolean);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Announcements.$metadata$ {
        const constructor: abstract new () => Announcements;
    }
    namespace Announcements {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Antenna {
        constructor();
        get id(): string;
        set id(value: string);
        get createdAt(): string;
        set createdAt(value: string);
        get name(): string;
        set name(value: string);
        get keywords(): Array<Array<string>>;
        set keywords(value: Array<Array<string>>);
        get excludeKeywords(): Array<Array<string>>;
        set excludeKeywords(value: Array<Array<string>>);
        get src(): string;
        set src(value: string);
        get userListId(): Nullable<string>;
        set userListId(value: Nullable<string>);
        get users(): Array<string>;
        set users(value: Array<string>);
        get caseSensitive(): boolean;
        set caseSensitive(value: boolean);
        get localOnly(): boolean;
        set localOnly(value: boolean);
        get notify(): boolean;
        set notify(value: boolean);
        get withReplies(): boolean;
        set withReplies(value: boolean);
        get withFile(): boolean;
        set withFile(value: boolean);
        get isActive(): boolean;
        set isActive(value: boolean);
        get hasUnreadNote(): boolean;
        set hasUnreadNote(value: boolean);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Antenna.$metadata$ {
        const constructor: abstract new () => Antenna;
    }
    namespace Antenna {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class AvatarDecoration {
        constructor();
        get id(): string;
        set id(value: string);
        get angle(): Nullable<number>;
        set angle(value: Nullable<number>);
        get flipH(): boolean;
        set flipH(value: boolean);
        get url(): string;
        set url(value: string);
        get offsetX(): Nullable<number>;
        set offsetX(value: Nullable<number>);
        get offsetY(): Nullable<number>;
        set offsetY(value: Nullable<number>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace AvatarDecoration.$metadata$ {
        const constructor: abstract new () => AvatarDecoration;
    }
    namespace AvatarDecoration {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class BadgeRole {
        constructor();
        get name(): string;
        set name(value: string);
        get iconUrl(): Nullable<string>;
        set iconUrl(value: Nullable<string>);
        get displayOrder(): number;
        set displayOrder(value: number);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace BadgeRole.$metadata$ {
        const constructor: abstract new () => BadgeRole;
    }
    namespace BadgeRole {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Block {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get createdAt(): Nullable<string>;
        set createdAt(value: Nullable<string>);
        get blockeeId(): Nullable<string>;
        set blockeeId(value: Nullable<string>);
        get blockee(): Nullable<work.socialhub.kmisskey.entity.user.UserLite>;
        set blockee(value: Nullable<work.socialhub.kmisskey.entity.user.UserLite>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Block.$metadata$ {
        const constructor: abstract new () => Block;
    }
    namespace Block {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Channel {
        constructor();
        get id(): string;
        set id(value: string);
        get createdAt(): Nullable<string>;
        set createdAt(value: Nullable<string>);
        get lastNotedAt(): Nullable<string>;
        set lastNotedAt(value: Nullable<string>);
        get name(): string;
        set name(value: string);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get bannerUrl(): Nullable<string>;
        set bannerUrl(value: Nullable<string>);
        get pinnedNoteIds(): Array<string>;
        set pinnedNoteIds(value: Array<string>);
        get color(): string;
        set color(value: string);
        get isArchived(): boolean;
        set isArchived(value: boolean);
        get notesCount(): number;
        set notesCount(value: number);
        get usersCount(): number;
        set usersCount(value: number);
        get isSensitive(): boolean;
        set isSensitive(value: boolean);
        get allowRenoteToExternal(): boolean;
        set allowRenoteToExternal(value: boolean);
        get isFollowing(): boolean;
        set isFollowing(value: boolean);
        get isFavorited(): boolean;
        set isFavorited(value: boolean);
        get pinnedNotes(): Array<work.socialhub.kmisskey.entity.Note>;
        set pinnedNotes(value: Array<work.socialhub.kmisskey.entity.Note>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Channel.$metadata$ {
        const constructor: abstract new () => Channel;
    }
    namespace Channel {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Choice {
        constructor();
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get votes(): Nullable<number>;
        set votes(value: Nullable<number>);
        get voted(): boolean;
        set voted(value: boolean);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Choice.$metadata$ {
        const constructor: abstract new () => Choice;
    }
    namespace Choice {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Clip {
        constructor();
        get id(): string;
        set id(value: string);
        get createdAt(): string;
        set createdAt(value: string);
        get lastClippedAt(): Nullable<string>;
        set lastClippedAt(value: Nullable<string>);
        get userId(): string;
        set userId(value: string);
        get user(): work.socialhub.kmisskey.entity.user.UserLite;
        set user(value: work.socialhub.kmisskey.entity.user.UserLite);
        get name(): string;
        set name(value: string);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get isPublic(): boolean;
        set isPublic(value: boolean);
        get favoritedCount(): number;
        set favoritedCount(value: number);
        get isFavorited(): boolean;
        set isFavorited(value: boolean);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Clip.$metadata$ {
        const constructor: abstract new () => Clip;
    }
    namespace Clip {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Color {
        constructor();
        get r(): number;
        set r(value: number);
        get g(): number;
        set g(value: number);
        get b(): number;
        set b(value: number);
        toString(): string;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Color.$metadata$ {
        const constructor: abstract new () => Color;
    }
    namespace Color {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Emoji {
        constructor();
        /** @deprecated  */
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        /** @deprecated  */
        get host(): Nullable<string>;
        set host(value: Nullable<string>);
        get name(): string;
        set name(value: string);
        get url(): string;
        set url(value: string);
        get category(): Nullable<string>;
        set category(value: Nullable<string>);
        get aliases(): Nullable<Array<string>>;
        set aliases(value: Nullable<Array<string>>);
        get width(): Nullable<number>;
        set width(value: Nullable<number>);
        get height(): Nullable<number>;
        set height(value: Nullable<number>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Emoji.$metadata$ {
        const constructor: abstract new () => Emoji;
    }
    namespace Emoji {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Emojis {
        constructor();
        get list(): Array<work.socialhub.kmisskey.entity.Emoji>;
        set list(value: Array<work.socialhub.kmisskey.entity.Emoji>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Emojis.$metadata$ {
        const constructor: abstract new () => Emojis;
    }
    namespace Emojis {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Field {
        constructor();
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Field.$metadata$ {
        const constructor: abstract new () => Field;
    }
    namespace Field {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class File {
        constructor();
        get id(): string;
        set id(value: string);
        get createdAt(): string;
        set createdAt(value: string);
        get name(): string;
        set name(value: string);
        get type(): string;
        set type(value: string);
        get md5(): string;
        set md5(value: string);
        get size(): number;
        set size(value: number);
        get isSensitive(): boolean;
        set isSensitive(value: boolean);
        get blurhash(): Nullable<string>;
        set blurhash(value: Nullable<string>);
        get properties(): Nullable<work.socialhub.kmisskey.entity.FileProperties>;
        set properties(value: Nullable<work.socialhub.kmisskey.entity.FileProperties>);
        get url(): string;
        set url(value: string);
        get thumbnailUrl(): Nullable<string>;
        set thumbnailUrl(value: Nullable<string>);
        get comment(): Nullable<string>;
        set comment(value: Nullable<string>);
        get folderId(): Nullable<string>;
        set folderId(value: Nullable<string>);
        get folder(): Nullable<work.socialhub.kmisskey.entity.Folder>;
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get user(): Nullable<work.socialhub.kmisskey.entity.user.UserLite>;
        set user(value: Nullable<work.socialhub.kmisskey.entity.user.UserLite>);
        extractedUrl(): string;
        extractedThumbnailUrl(): Nullable<string>;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace File.$metadata$ {
        const constructor: abstract new () => File;
    }
    namespace File {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
    class FileProperties {
        constructor();
        get width(): number;
        set width(value: number);
        get height(): number;
        set height(value: number);
        get orientation(): number;
        set orientation(value: number);
        get avgColor(): Nullable<string>;
        set avgColor(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace FileProperties.$metadata$ {
        const constructor: abstract new () => FileProperties;
    }
    namespace FileProperties {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Folder {
        constructor();
        get id(): string;
        set id(value: string);
        get createdAt(): string;
        set createdAt(value: string);
        get name(): string;
        set name(value: string);
        get parentId(): Nullable<string>;
        set parentId(value: Nullable<string>);
        get foldersCount(): number;
        set foldersCount(value: number);
        get filesCount(): number;
        set filesCount(value: number);
        get parent(): Nullable<work.socialhub.kmisskey.entity.Folder>;
        set parent(value: Nullable<work.socialhub.kmisskey.entity.Folder>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Folder.$metadata$ {
        const constructor: abstract new () => Folder;
    }
    namespace Folder {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class GalleryPost {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get createdAt(): Nullable<string>;
        set createdAt(value: Nullable<string>);
        get updatedAt(): Nullable<string>;
        set updatedAt(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get user(): Nullable<work.socialhub.kmisskey.entity.user.User>;
        set user(value: Nullable<work.socialhub.kmisskey.entity.user.User>);
        get fileIds(): Array<string>;
        set fileIds(value: Array<string>);
        get files(): Array<work.socialhub.kmisskey.entity.File>;
        set files(value: Array<work.socialhub.kmisskey.entity.File>);
        get tags(): Array<string>;
        set tags(value: Array<string>);
        get sensitive(): boolean;
        set sensitive(value: boolean);
        get liked(): boolean;
        set liked(value: boolean);
        get likedCount(): Nullable<number>;
        set likedCount(value: Nullable<number>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace GalleryPost.$metadata$ {
        const constructor: abstract new () => GalleryPost;
    }
    namespace GalleryPost {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Instance {
        constructor();
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get softwareName(): Nullable<string>;
        set softwareName(value: Nullable<string>);
        get softwareVersion(): Nullable<string>;
        set softwareVersion(value: Nullable<string>);
        get iconUrl(): Nullable<string>;
        set iconUrl(value: Nullable<string>);
        get faviconUrl(): Nullable<string>;
        set faviconUrl(value: Nullable<string>);
        get themeColor(): Nullable<string>;
        set themeColor(value: Nullable<string>);
        themeColorObject(): Nullable<work.socialhub.kmisskey.entity.Color>;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Instance.$metadata$ {
        const constructor: abstract new () => Instance;
    }
    namespace Instance {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Meta {
        constructor();
        get maintainerName(): Nullable<string>;
        set maintainerName(value: Nullable<string>);
        get maintainerEmail(): Nullable<string>;
        set maintainerEmail(value: Nullable<string>);
        get version(): Nullable<string>;
        set version(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get uri(): Nullable<string>;
        set uri(value: Nullable<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get langs(): Array<string>;
        set langs(value: Array<string>);
        get tosUrl(): Nullable<string>;
        set tosUrl(value: Nullable<string>);
        get repositoryUrl(): Nullable<string>;
        set repositoryUrl(value: Nullable<string>);
        get feedbackUrl(): Nullable<string>;
        set feedbackUrl(value: Nullable<string>);
        get defaultDarkTheme(): Nullable<string>;
        set defaultDarkTheme(value: Nullable<string>);
        get defaultLightTheme(): Nullable<string>;
        set defaultLightTheme(value: Nullable<string>);
        get disableRegistration(): Nullable<boolean>;
        set disableRegistration(value: Nullable<boolean>);
        get cacheRemoteFiles(): Nullable<boolean>;
        set cacheRemoteFiles(value: Nullable<boolean>);
        get emailRequiredForSignup(): Nullable<boolean>;
        set emailRequiredForSignup(value: Nullable<boolean>);
        get enableHcaptcha(): Nullable<boolean>;
        set enableHcaptcha(value: Nullable<boolean>);
        get hcaptchaSiteKey(): Nullable<string>;
        set hcaptchaSiteKey(value: Nullable<string>);
        get enableRecaptcha(): Nullable<boolean>;
        set enableRecaptcha(value: Nullable<boolean>);
        get recaptchaSiteKey(): Nullable<string>;
        set recaptchaSiteKey(value: Nullable<string>);
        get enableTurnstile(): Nullable<boolean>;
        set enableTurnstile(value: Nullable<boolean>);
        get turnstileSiteKey(): Nullable<string>;
        set turnstileSiteKey(value: Nullable<string>);
        get swPublickey(): Nullable<string>;
        set swPublickey(value: Nullable<string>);
        get mascotImageUrl(): Nullable<string>;
        set mascotImageUrl(value: Nullable<string>);
        get bannerUrl(): Nullable<string>;
        set bannerUrl(value: Nullable<string>);
        get errorImageUrl(): Nullable<string>;
        set errorImageUrl(value: Nullable<string>);
        get iconUrl(): Nullable<string>;
        set iconUrl(value: Nullable<string>);
        get maxNoteTextLength(): Nullable<number>;
        set maxNoteTextLength(value: Nullable<number>);
        get requireSetup(): Nullable<boolean>;
        set requireSetup(value: Nullable<boolean>);
        get enableEmail(): Nullable<boolean>;
        set enableEmail(value: Nullable<boolean>);
        get enableServiceWorker(): Nullable<boolean>;
        set enableServiceWorker(value: Nullable<boolean>);
        get translatorAvailable(): Nullable<boolean>;
        set translatorAvailable(value: Nullable<boolean>);
        get proxyAccountName(): Nullable<string>;
        set proxyAccountName(value: Nullable<string>);
        get policies(): Nullable<work.socialhub.kmisskey.entity.Policies>;
        set policies(value: Nullable<work.socialhub.kmisskey.entity.Policies>);
        get mediaProxy(): Nullable<string>;
        set mediaProxy(value: Nullable<string>);
        get features(): Nullable<work.socialhub.kmisskey.entity.MetaFeatures>;
        set features(value: Nullable<work.socialhub.kmisskey.entity.MetaFeatures>);
        /** @deprecated use /emojis endpoint. */
        get emojis(): Array<work.socialhub.kmisskey.entity.Emoji>;
        set emojis(value: Array<work.socialhub.kmisskey.entity.Emoji>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Meta.$metadata$ {
        const constructor: abstract new () => Meta;
    }
    namespace Meta {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class MetaFeatures {
        constructor();
        get registration(): boolean;
        set registration(value: boolean);
        get localTimeLine(): boolean;
        set localTimeLine(value: boolean);
        get globalTimeLine(): boolean;
        set globalTimeLine(value: boolean);
        get elasticsearch(): boolean;
        set elasticsearch(value: boolean);
        get hcaptcha(): boolean;
        set hcaptcha(value: boolean);
        get recaptcha(): boolean;
        set recaptcha(value: boolean);
        get objectStorage(): boolean;
        set objectStorage(value: boolean);
        get serviceWorker(): boolean;
        set serviceWorker(value: boolean);
        get miauth(): boolean;
        set miauth(value: boolean);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace MetaFeatures.$metadata$ {
        const constructor: abstract new () => MetaFeatures;
    }
    namespace MetaFeatures {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Note {
        constructor();
        get id(): string;
        set id(value: string);
        get createdAt(): string;
        set createdAt(value: string);
        get deletedAt(): Nullable<string>;
        set deletedAt(value: Nullable<string>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get cw(): Nullable<string>;
        set cw(value: Nullable<string>);
        get userId(): string;
        set userId(value: string);
        get user(): work.socialhub.kmisskey.entity.user.UserLite;
        set user(value: work.socialhub.kmisskey.entity.user.UserLite);
        get replyId(): Nullable<string>;
        set replyId(value: Nullable<string>);
        get renoteId(): Nullable<string>;
        set renoteId(value: Nullable<string>);
        get reply(): Nullable<work.socialhub.kmisskey.entity.Note>;
        set reply(value: Nullable<work.socialhub.kmisskey.entity.Note>);
        get renote(): Nullable<work.socialhub.kmisskey.entity.Note>;
        set renote(value: Nullable<work.socialhub.kmisskey.entity.Note>);
        get isHidden(): boolean;
        set isHidden(value: boolean);
        get visibility(): string;
        set visibility(value: string);
        get mentions(): Nullable<Array<string>>;
        set mentions(value: Nullable<Array<string>>);
        get visibleUserIds(): Nullable<Array<string>>;
        set visibleUserIds(value: Nullable<Array<string>>);
        get fileIds(): Nullable<Array<string>>;
        set fileIds(value: Nullable<Array<string>>);
        get files(): Nullable<Array<work.socialhub.kmisskey.entity.File>>;
        set files(value: Nullable<Array<work.socialhub.kmisskey.entity.File>>);
        get tags(): Nullable<Array<string>>;
        set tags(value: Nullable<Array<string>>);
        get poll(): Nullable<work.socialhub.kmisskey.entity.Poll>;
        set poll(value: Nullable<work.socialhub.kmisskey.entity.Poll>);
        get emojis(): Nullable<work.socialhub.kmisskey.entity.Emojis>;
        set emojis(value: Nullable<work.socialhub.kmisskey.entity.Emojis>);
        get channelId(): Nullable<string>;
        set channelId(value: Nullable<string>);
        get channel(): Nullable<work.socialhub.kmisskey.entity.Channel>;
        set channel(value: Nullable<work.socialhub.kmisskey.entity.Channel>);
        get localOnly(): boolean;
        set localOnly(value: boolean);
        get reactionAcceptance(): Nullable<string>;
        set reactionAcceptance(value: Nullable<string>);
        get reactionEmojis(): Nullable<work.socialhub.kmisskey.entity.Emojis>;
        set reactionEmojis(value: Nullable<work.socialhub.kmisskey.entity.Emojis>);
        get reactions(): kotlin.collections.KtMap<string, number>;
        set reactions(value: kotlin.collections.KtMap<string, number>);
        get renoteCount(): number;
        set renoteCount(value: number);
        get repliesCount(): number;
        set repliesCount(value: number);
        get uri(): Nullable<string>;
        set uri(value: Nullable<string>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get reactionAndUserPairCache(): Array<string>;
        set reactionAndUserPairCache(value: Array<string>);
        get clippedCount(): number;
        set clippedCount(value: number);
        get myReaction(): Nullable<string>;
        set myReaction(value: Nullable<string>);
        get featuredId(): Nullable<string>;
        set featuredId(value: Nullable<string>);
        get prId(): Nullable<string>;
        set prId(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Note.$metadata$ {
        const constructor: abstract new () => Note;
    }
    namespace Note {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class NoteList {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get createdAt(): Nullable<string>;
        set createdAt(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get userIds(): Nullable<Array<string>>;
        set userIds(value: Nullable<Array<string>>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace NoteList.$metadata$ {
        const constructor: abstract new () => NoteList;
    }
    namespace NoteList {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Notification {
        constructor();
        get id(): string;
        set id(value: string);
        get createdAt(): string;
        set createdAt(value: string);
        get type(): string;
        set type(value: string);
        get user(): Nullable<work.socialhub.kmisskey.entity.user.User>;
        set user(value: Nullable<work.socialhub.kmisskey.entity.user.User>);
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get note(): Nullable<work.socialhub.kmisskey.entity.Note>;
        set note(value: Nullable<work.socialhub.kmisskey.entity.Note>);
        get reaction(): Nullable<string>;
        set reaction(value: Nullable<string>);
        get choice(): Nullable<number>;
        set choice(value: Nullable<number>);
        get body(): Nullable<string>;
        set body(value: Nullable<string>);
        get header(): Nullable<string>;
        set header(value: Nullable<string>);
        get icon(): Nullable<string>;
        set icon(value: Nullable<string>);
        get achievement(): Nullable<string>;
        set achievement(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Notification.$metadata$ {
        const constructor: abstract new () => Notification;
    }
    namespace Notification {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Page {
        constructor();
        get id(): string;
        set id(value: string);
        get createdAt(): string;
        set createdAt(value: string);
        get updatedAt(): string;
        set updatedAt(value: string);
        get userId(): string;
        set userId(value: string);
        get user(): work.socialhub.kmisskey.entity.user.User;
        set user(value: work.socialhub.kmisskey.entity.user.User);
        get title(): string;
        set title(value: string);
        get name(): string;
        set name(value: string);
        get summary(): Nullable<string>;
        set summary(value: Nullable<string>);
        get hideTitleWhenPinned(): boolean;
        set hideTitleWhenPinned(value: boolean);
        get alignCenter(): boolean;
        set alignCenter(value: boolean);
        get font(): string;
        set font(value: string);
        get script(): string;
        set script(value: string);
        get eyeCatchingImageId(): Nullable<string>;
        set eyeCatchingImageId(value: Nullable<string>);
        get likedCount(): number;
        set likedCount(value: number);
        get isLiked(): boolean;
        set isLiked(value: boolean);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Page.$metadata$ {
        const constructor: abstract new () => Page;
    }
    namespace Page {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Policies {
        constructor();
        get gtlAvailable(): Nullable<boolean>;
        set gtlAvailable(value: Nullable<boolean>);
        get ltlAvailable(): Nullable<boolean>;
        set ltlAvailable(value: Nullable<boolean>);
        get canPublicNote(): Nullable<boolean>;
        set canPublicNote(value: Nullable<boolean>);
        get canInvite(): Nullable<boolean>;
        set canInvite(value: Nullable<boolean>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Policies.$metadata$ {
        const constructor: abstract new () => Policies;
    }
    namespace Policies {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Poll {
        constructor();
        get multiple(): boolean;
        set multiple(value: boolean);
        get expiresAt(): Nullable<string>;
        set expiresAt(value: Nullable<string>);
        get choices(): Nullable<Array<work.socialhub.kmisskey.entity.Choice>>;
        set choices(value: Nullable<Array<work.socialhub.kmisskey.entity.Choice>>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Poll.$metadata$ {
        const constructor: abstract new () => Poll;
    }
    namespace Poll {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Relation {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get hasPendingFollowRequestFromYou(): boolean;
        set hasPendingFollowRequestFromYou(value: boolean);
        get hasPendingFollowRequestToYou(): boolean;
        set hasPendingFollowRequestToYou(value: boolean);
        get isFollowing(): boolean;
        set isFollowing(value: boolean);
        get isFollowed(): boolean;
        set isFollowed(value: boolean);
        get isBlocking(): boolean;
        set isBlocking(value: boolean);
        get isBlocked(): boolean;
        set isBlocked(value: boolean);
        get isMuted(): boolean;
        set isMuted(value: boolean);
        toString(): string;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Relation.$metadata$ {
        const constructor: abstract new () => Relation;
    }
    namespace Relation {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Role {
        constructor();
        get id(): string;
        set id(value: string);
        get name(): string;
        set name(value: string);
        get color(): Nullable<string>;
        set color(value: Nullable<string>);
        get iconUrl(): Nullable<string>;
        set iconUrl(value: Nullable<string>);
        get displayOrder(): number;
        set displayOrder(value: number);
        get colorObject(): Nullable<work.socialhub.kmisskey.entity.Color>;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Role.$metadata$ {
        const constructor: abstract new () => Role;
    }
    namespace Role {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class SecurityKey {
        constructor();
        get id(): string;
        set id(value: string);
        get name(): string;
        set name(value: string);
        get lastUsed(): string;
        set lastUsed(value: string);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace SecurityKey.$metadata$ {
        const constructor: abstract new () => SecurityKey;
    }
    namespace SecurityKey {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Trend {
        constructor();
        get tag(): Nullable<string>;
        set tag(value: Nullable<string>);
        get chart(): Nullable<Array<number>>;
        set chart(value: Nullable<Array<number>>);
        get usersCount(): Nullable<number>;
        set usersCount(value: Nullable<number>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Trend.$metadata$ {
        const constructor: abstract new () => Trend;
    }
    namespace Trend {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class UserPolicies {
        constructor();
        get gtlAvailable(): Nullable<boolean>;
        set gtlAvailable(value: Nullable<boolean>);
        get ltlAvailable(): Nullable<boolean>;
        set ltlAvailable(value: Nullable<boolean>);
        get canPublicNote(): Nullable<boolean>;
        set canPublicNote(value: Nullable<boolean>);
        get canInvite(): Nullable<boolean>;
        set canInvite(value: Nullable<boolean>);
        get canManageCustomEmojis(): Nullable<boolean>;
        set canManageCustomEmojis(value: Nullable<boolean>);
        get canSearchNotes(): Nullable<boolean>;
        set canSearchNotes(value: Nullable<boolean>);
        get canHideAds(): Nullable<boolean>;
        set canHideAds(value: Nullable<boolean>);
        get driveCapacityMb(): Nullable<number>;
        set driveCapacityMb(value: Nullable<number>);
        get alwaysMarkNsfw(): Nullable<boolean>;
        set alwaysMarkNsfw(value: Nullable<boolean>);
        get pinLimit(): Nullable<number>;
        set pinLimit(value: Nullable<number>);
        get antennaLimit(): Nullable<number>;
        set antennaLimit(value: Nullable<number>);
        get wordMuteLimit(): Nullable<number>;
        set wordMuteLimit(value: Nullable<number>);
        get webhookLimit(): Nullable<number>;
        set webhookLimit(value: Nullable<number>);
        get clipLimit(): Nullable<number>;
        set clipLimit(value: Nullable<number>);
        get noteEachClipsLimit(): Nullable<number>;
        set noteEachClipsLimit(value: Nullable<number>);
        get userListLimit(): Nullable<number>;
        set userListLimit(value: Nullable<number>);
        get userEachUserListsLimit(): Nullable<number>;
        set userEachUserListsLimit(value: Nullable<number>);
        get rateLimitFactor(): Nullable<number>;
        set rateLimitFactor(value: Nullable<number>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UserPolicies.$metadata$ {
        const constructor: abstract new () => UserPolicies;
    }
    namespace UserPolicies {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Webhook {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get createdAt(): Nullable<string>;
        set createdAt(value: Nullable<string>);
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get on(): Nullable<Array<string>>;
        set on(value: Nullable<Array<string>>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get secret(): Nullable<string>;
        set secret(value: Nullable<string>);
        get active(): Nullable<boolean>;
        set active(value: Nullable<boolean>);
        get latestSentAt(): Nullable<string>;
        set latestSentAt(value: Nullable<string>);
        get latestStatus(): Nullable<number>;
        set latestStatus(value: Nullable<number>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Webhook.$metadata$ {
        const constructor: abstract new () => Webhook;
    }
    namespace Webhook {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity.share {
    class EmptyResponse {
        constructor(limit?: Nullable<work.socialhub.kmisskey.entity.share.RateLimit>);
        get limit(): Nullable<work.socialhub.kmisskey.entity.share.RateLimit>;
        set limit(value: Nullable<work.socialhub.kmisskey.entity.share.RateLimit>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace EmptyResponse.$metadata$ {
        const constructor: abstract new () => EmptyResponse;
    }
}
export declare namespace work.socialhub.kmisskey.entity.share {
    class RateLimit {
        constructor();
        get limit(): number;
        set limit(value: number);
        get remaining(): number;
        set remaining(value: number);
        get reset(): Nullable<string>;
        set reset(value: Nullable<string>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace RateLimit.$metadata$ {
        const constructor: abstract new () => RateLimit;
    }
    namespace RateLimit {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                get X_RATELIMIT_LIMIT(): string;
                get X_RATELIMIT_REMAINING(): string;
                get X_RATELIMIT_RESET(): string;
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity.share {
    class Response<T> {
        constructor(data: T, json: string, limit?: Nullable<work.socialhub.kmisskey.entity.share.RateLimit>);
        get data(): T;
        set data(value: T);
        get json(): string;
        set json(value: string);
        get limit(): Nullable<work.socialhub.kmisskey.entity.share.RateLimit>;
        set limit(value: Nullable<work.socialhub.kmisskey.entity.share.RateLimit>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Response.$metadata$ {
        const constructor: abstract new <T>() => Response<T>;
    }
}
export declare namespace work.socialhub.kmisskey.entity.user {
    class MeDetailed extends work.socialhub.kmisskey.entity.user.UserDetailedNotMe.$metadata$.constructor {
        constructor();
        get avatarId(): Nullable<string>;
        set avatarId(value: Nullable<string>);
        get bannerId(): Nullable<string>;
        set bannerId(value: Nullable<string>);
        get isModerator(): boolean;
        set isModerator(value: boolean);
        get isAdmin(): boolean;
        set isAdmin(value: boolean);
        get injectFeaturedNote(): boolean;
        set injectFeaturedNote(value: boolean);
        get receiveAnnouncementEmail(): boolean;
        set receiveAnnouncementEmail(value: boolean);
        get alwaysMarkNsfw(): boolean;
        set alwaysMarkNsfw(value: boolean);
        get autoSensitive(): boolean;
        set autoSensitive(value: boolean);
        get carefulBot(): boolean;
        set carefulBot(value: boolean);
        get autoAcceptFollowed(): boolean;
        set autoAcceptFollowed(value: boolean);
        get noCrawle(): boolean;
        set noCrawle(value: boolean);
        get preventAiLearning(): boolean;
        set preventAiLearning(value: boolean);
        get isExplorable(): boolean;
        set isExplorable(value: boolean);
        get isDeleted(): boolean;
        set isDeleted(value: boolean);
        get twoFactorBackupCodesStock(): Nullable<string>;
        set twoFactorBackupCodesStock(value: Nullable<string>);
        get hideOnlineStatus(): boolean;
        set hideOnlineStatus(value: boolean);
        get hasUnreadSpecifiedNotes(): boolean;
        set hasUnreadSpecifiedNotes(value: boolean);
        get hasUnreadMentions(): boolean;
        set hasUnreadMentions(value: boolean);
        get hasUnreadAnnouncement(): boolean;
        set hasUnreadAnnouncement(value: boolean);
        get hasUnreadAntenna(): boolean;
        set hasUnreadAntenna(value: boolean);
        get hasUnreadChannel(): boolean;
        set hasUnreadChannel(value: boolean);
        get hasUnreadNotifications(): boolean;
        set hasUnreadNotifications(value: boolean);
        get hasPendingReceivedFollowRequest(): boolean;
        set hasPendingReceivedFollowRequest(value: boolean);
        get unreadNotificationsCount(): number;
        set unreadNotificationsCount(value: number);
        get mutedWords(): Array<Array<string>>;
        set mutedWords(value: Array<Array<string>>);
        get hardMutedWords(): Array<Array<string>>;
        set hardMutedWords(value: Array<Array<string>>);
        get mutedInstances(): Array<string>;
        set mutedInstances(value: Array<string>);
        get emailNotificationTypes(): Array<string>;
        set emailNotificationTypes(value: Array<string>);
        get achievements(): Array<work.socialhub.kmisskey.entity.Achievement>;
        set achievements(value: Array<work.socialhub.kmisskey.entity.Achievement>);
        get loggedInDays(): number;
        set loggedInDays(value: number);
        get email(): Nullable<string>;
        set email(value: Nullable<string>);
        get emailVerified(): boolean;
        set emailVerified(value: boolean);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace MeDetailed.$metadata$ {
        const constructor: abstract new () => MeDetailed;
    }
    namespace MeDetailed {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity.user {
    abstract class User {
        constructor();
        get asUserLite(): Nullable<work.socialhub.kmisskey.entity.user.UserLite>;
        get asUserDetailedNotMe(): Nullable<work.socialhub.kmisskey.entity.user.UserDetailedNotMe>;
        get asMeDetailed(): Nullable<work.socialhub.kmisskey.entity.user.MeDetailed>;
        abstract get id(): string;
        abstract set id(value: string);
        abstract get name(): Nullable<string>;
        abstract set name(value: Nullable<string>);
        abstract get username(): string;
        abstract set username(value: string);
        abstract get host(): Nullable<string>;
        abstract set host(value: Nullable<string>);
        abstract get avatarUrl(): Nullable<string>;
        abstract set avatarUrl(value: Nullable<string>);
        abstract get avatarBlurhash(): Nullable<string>;
        abstract set avatarBlurhash(value: Nullable<string>);
        abstract get avatarDecorations(): Array<work.socialhub.kmisskey.entity.AvatarDecoration>;
        abstract set avatarDecorations(value: Array<work.socialhub.kmisskey.entity.AvatarDecoration>);
        abstract get isBot(): boolean;
        abstract set isBot(value: boolean);
        abstract get isCat(): boolean;
        abstract set isCat(value: boolean);
        abstract get instance(): Nullable<work.socialhub.kmisskey.entity.Instance>;
        abstract set instance(value: Nullable<work.socialhub.kmisskey.entity.Instance>);
        abstract get emojis(): Nullable<work.socialhub.kmisskey.entity.Emojis>;
        abstract set emojis(value: Nullable<work.socialhub.kmisskey.entity.Emojis>);
        abstract get onlineStatus(): Nullable<string>;
        abstract set onlineStatus(value: Nullable<string>);
        abstract get badgeRoles(): Array<work.socialhub.kmisskey.entity.BadgeRole>;
        abstract set badgeRoles(value: Array<work.socialhub.kmisskey.entity.BadgeRole>);
        abstract get roles(): Array<work.socialhub.kmisskey.entity.Role>;
        abstract set roles(value: Array<work.socialhub.kmisskey.entity.Role>);
        abstract get policies(): Nullable<work.socialhub.kmisskey.entity.UserPolicies>;
        abstract set policies(value: Nullable<work.socialhub.kmisskey.entity.UserPolicies>);
        get avatarColor(): Nullable<work.socialhub.kmisskey.entity.Color>;
        set avatarColor(value: Nullable<work.socialhub.kmisskey.entity.Color>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace User.$metadata$ {
        const constructor: abstract new () => User;
    }
    namespace User {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity.user {
    class UserDetailedNotMe extends work.socialhub.kmisskey.entity.user.UserLite.$metadata$.constructor {
        constructor();
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get uri(): Nullable<string>;
        set uri(value: Nullable<string>);
        get moveTo(): Nullable<string>;
        set moveTo(value: Nullable<string>);
        get alsoKnownAs(): Nullable<Array<string>>;
        set alsoKnownAs(value: Nullable<Array<string>>);
        get createdAt(): string;
        set createdAt(value: string);
        get updatedAt(): Nullable<string>;
        set updatedAt(value: Nullable<string>);
        get lastFetchedAt(): Nullable<string>;
        set lastFetchedAt(value: Nullable<string>);
        get bannerUrl(): Nullable<string>;
        set bannerUrl(value: Nullable<string>);
        get bannerBlurhash(): Nullable<string>;
        set bannerBlurhash(value: Nullable<string>);
        get isLocked(): boolean;
        set isLocked(value: boolean);
        get isSilenced(): boolean;
        set isSilenced(value: boolean);
        get isLimited(): boolean;
        set isLimited(value: boolean);
        get isSuspended(): boolean;
        set isSuspended(value: boolean);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get location(): Nullable<string>;
        set location(value: Nullable<string>);
        get birthday(): Nullable<string>;
        set birthday(value: Nullable<string>);
        get lang(): Nullable<string>;
        set lang(value: Nullable<string>);
        get fields(): Array<work.socialhub.kmisskey.entity.Field>;
        set fields(value: Array<work.socialhub.kmisskey.entity.Field>);
        get verifiedLinks(): Array<string>;
        set verifiedLinks(value: Array<string>);
        get followersCount(): number;
        set followersCount(value: number);
        get followingCount(): number;
        set followingCount(value: number);
        get notesCount(): number;
        set notesCount(value: number);
        get pinnedNoteIds(): Array<string>;
        set pinnedNoteIds(value: Array<string>);
        get pinnedNotes(): Array<work.socialhub.kmisskey.entity.Note>;
        set pinnedNotes(value: Array<work.socialhub.kmisskey.entity.Note>);
        get pinnedPageId(): Nullable<string>;
        set pinnedPageId(value: Nullable<string>);
        get pinnedPage(): Nullable<work.socialhub.kmisskey.entity.Page>;
        set pinnedPage(value: Nullable<work.socialhub.kmisskey.entity.Page>);
        get publicReactions(): boolean;
        set publicReactions(value: boolean);
        get followingVisibility(): Nullable<string>;
        set followingVisibility(value: Nullable<string>);
        get followersVisibility(): Nullable<string>;
        set followersVisibility(value: Nullable<string>);
        get twoFactorEnabled(): boolean;
        set twoFactorEnabled(value: boolean);
        get usePasswordLessLogin(): boolean;
        set usePasswordLessLogin(value: boolean);
        get securityKeys(): boolean;
        set securityKeys(value: boolean);
        get memo(): Nullable<string>;
        set memo(value: Nullable<string>);
        get moderationNote(): Nullable<string>;
        set moderationNote(value: Nullable<string>);
        get isFollowing(): boolean;
        set isFollowing(value: boolean);
        get isFollowed(): boolean;
        set isFollowed(value: boolean);
        get hasPendingFollowRequestFromYou(): boolean;
        set hasPendingFollowRequestFromYou(value: boolean);
        get hasPendingFollowRequestToYou(): boolean;
        set hasPendingFollowRequestToYou(value: boolean);
        get isBlocking(): boolean;
        set isBlocking(value: boolean);
        get isBlocked(): boolean;
        set isBlocked(value: boolean);
        get isMuted(): boolean;
        set isMuted(value: boolean);
        get isRenoteMuted(): boolean;
        set isRenoteMuted(value: boolean);
        get notify(): Nullable<string>;
        set notify(value: Nullable<string>);
        get withReplies(): boolean;
        set withReplies(value: boolean);
        get bannerColor(): Nullable<work.socialhub.kmisskey.entity.Color>;
        set bannerColor(value: Nullable<work.socialhub.kmisskey.entity.Color>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UserDetailedNotMe.$metadata$ {
        const constructor: abstract new () => UserDetailedNotMe;
    }
    namespace UserDetailedNotMe {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity.user {
    class UserLite extends work.socialhub.kmisskey.entity.user.User.$metadata$.constructor {
        constructor();
        get id(): string;
        set id(value: string);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get username(): string;
        set username(value: string);
        get host(): Nullable<string>;
        set host(value: Nullable<string>);
        get avatarUrl(): Nullable<string>;
        set avatarUrl(value: Nullable<string>);
        get avatarBlurhash(): Nullable<string>;
        set avatarBlurhash(value: Nullable<string>);
        get avatarDecorations(): Array<work.socialhub.kmisskey.entity.AvatarDecoration>;
        set avatarDecorations(value: Array<work.socialhub.kmisskey.entity.AvatarDecoration>);
        get isBot(): boolean;
        set isBot(value: boolean);
        get isCat(): boolean;
        set isCat(value: boolean);
        get instance(): Nullable<work.socialhub.kmisskey.entity.Instance>;
        set instance(value: Nullable<work.socialhub.kmisskey.entity.Instance>);
        get emojis(): Nullable<work.socialhub.kmisskey.entity.Emojis>;
        set emojis(value: Nullable<work.socialhub.kmisskey.entity.Emojis>);
        get onlineStatus(): Nullable<string>;
        set onlineStatus(value: Nullable<string>);
        get badgeRoles(): Array<work.socialhub.kmisskey.entity.BadgeRole>;
        set badgeRoles(value: Array<work.socialhub.kmisskey.entity.BadgeRole>);
        get roles(): Array<work.socialhub.kmisskey.entity.Role>;
        set roles(value: Array<work.socialhub.kmisskey.entity.Role>);
        get policies(): Nullable<work.socialhub.kmisskey.entity.UserPolicies>;
        set policies(value: Nullable<work.socialhub.kmisskey.entity.UserPolicies>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace UserLite.$metadata$ {
        const constructor: abstract new () => UserLite;
    }
    namespace UserLite {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kmisskey {
    abstract class KmisskeyFactory extends KtSingleton<KmisskeyFactory.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace KmisskeyFactory.$metadata$ {
        abstract class constructor {
            instance(uri: string): work.socialhub.kmisskey.Misskey;
            instanceOwnedAccessToken(uri: string, userAccessToken: string): work.socialhub.kmisskey.Misskey;
            instanceUserAccessToken(uri: string, appSecret: string, userAccessToken: string): work.socialhub.kmisskey.Misskey;
            private constructor();
        }
    }
}
export as namespace work_socialhub_kmisskey_all;