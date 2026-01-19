type Nullable<T> = T | null | undefined
declare function KtSingleton<T>(): T & (abstract new() => any);
export declare namespace kotlin.collections {
    interface KtList<E> /* extends kotlin.collections.Collection<E> */ {
        asJsReadonlyArrayView(): ReadonlyArray<E>;
        readonly __doNotUseOrImplementIt: {
            readonly "kotlin.collections.KtList": unique symbol;
        };
    }
    namespace KtList {
        function fromJsArray<E>(array: ReadonlyArray<E>): kotlin.collections.KtList<E>;
    }
    interface KtMap<K, V> {
        asJsReadonlyMapView(): ReadonlyMap<K, V>;
        readonly __doNotUseOrImplementIt: {
            readonly "kotlin.collections.KtMap": unique symbol;
        };
    }
    namespace KtMap {
        function fromJsMap<K, V>(map: ReadonlyMap<K, V>): kotlin.collections.KtMap<K, V>;
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
        i(request: work.socialhub.kmisskey.api.request.i.IRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.entity.user.User>>;
        iFavorites(request: work.socialhub.kmisskey.api.request.i.IFavoritesRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.api.response.i.IFavoritesResponse>>>;
        iNotifications(request: work.socialhub.kmisskey.api.request.i.INotificationsRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Notification>>>;
        iUpdate(request: work.socialhub.kmisskey.api.request.i.IUpdateRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.entity.user.User>>;
        pinNote(request: work.socialhub.kmisskey.api.request.i.IPinRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.entity.user.User>>;
        unpinNote(request: work.socialhub.kmisskey.api.request.i.IUnpinRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.entity.user.User>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.AccountsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface AnnouncementsResource {
        announcements(request: work.socialhub.kmisskey.api.request.AnnouncementsRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Announcements>>>;
        readAnnouncement(request: work.socialhub.kmisskey.api.request.ReadAnnouncementRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.AnnouncementsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface AntennasResource {
        list(request: work.socialhub.kmisskey.api.request.antennas.AntennasListRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Antenna>>>;
        notes(request: work.socialhub.kmisskey.api.request.antennas.AntennasNotesRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Note>>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.AntennasResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface ApResource {
        show(request: work.socialhub.kmisskey.api.request.ApShowRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.api.response.ApShowResponse>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.ApResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface AppResource {
        createApp(request: work.socialhub.kmisskey.api.request.CreateAppRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.api.response.CreateAppResponse>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.AppResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface AuthResource {
        sessionGenerate(request: work.socialhub.kmisskey.api.request.GenerateAuthSessionRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.api.response.GenerateAuthSessionResponse>>;
        sessionUserKey(request: work.socialhub.kmisskey.api.request.UserKeyAuthSessionRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.api.response.UserKeyAuthSessionResponse>>;
        getMiAuthUri(request: work.socialhub.kmisskey.api.request.GetMiAuthUriRequest): Promise<work.socialhub.kmisskey.entity.share.Response<string>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.AuthResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface BlocksResource {
        create(request: work.socialhub.kmisskey.api.request.blocks.BlocksCreateRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        delete(request: work.socialhub.kmisskey.api.request.blocks.BlocksDeleteRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        list(request: work.socialhub.kmisskey.api.request.blocks.BlocksListRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Block>>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.BlocksResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface ChannelsResource {
        owned(request: work.socialhub.kmisskey.api.request.channels.ChannelsOwnedRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Channel>>>;
        myFavorites(request: work.socialhub.kmisskey.api.request.channels.ChannelsMyFavoritesRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Channel>>>;
        followed(request: work.socialhub.kmisskey.api.request.channels.ChannelsFollowedRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Channel>>>;
        timeline(request: work.socialhub.kmisskey.api.request.channels.ChannelsTimelineRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Note>>>;
        show(request: work.socialhub.kmisskey.api.request.channels.ChannelsShowRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.entity.Channel>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.ChannelsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface ClipsResource {
        list(request: work.socialhub.kmisskey.api.request.clips.ClipsListRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Clip>>>;
        notes(request: work.socialhub.kmisskey.api.request.clips.ClipsNotesRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Note>>>;
        removeNote(request: work.socialhub.kmisskey.api.request.clips.ClipsRemoveNoteRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        addNote(request: work.socialhub.kmisskey.api.request.clips.ClipsAddNoteRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        deleteClip(request: work.socialhub.kmisskey.api.request.clips.ClipsDeleteRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        create(request: work.socialhub.kmisskey.api.request.clips.ClipsCreateRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.entity.Clip>>;
        show(request: work.socialhub.kmisskey.api.request.clips.ClipsShowRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.entity.Clip>>;
        update(request: work.socialhub.kmisskey.api.request.clips.ClipsUpdateRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.entity.Clip>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.ClipsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface FavoritesResource {
        create(request: work.socialhub.kmisskey.api.request.favorites.FavoritesCreateRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        delete(request: work.socialhub.kmisskey.api.request.favorites.FavoritesDeleteRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.FavoritesResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface FederationResource {
        showInstance(request: work.socialhub.kmisskey.api.request.federation.ShowInstanceRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.api.response.federation.FederationInstanceResponse>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.FederationResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface FilesResource {
        create(request: work.socialhub.kmisskey.api.request.files.FilesCreateRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.entity.File>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.FilesResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface FollowingResource {
        create(request: work.socialhub.kmisskey.api.request.following.FollowingCreateRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        delete(request: work.socialhub.kmisskey.api.request.following.FollowingDeleteRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        requestsList(request: work.socialhub.kmisskey.api.request.following.FollowingRequestsListRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.api.response.following.FollowingRequestsListResponse>>>;
        acceptRequest(request: work.socialhub.kmisskey.api.request.following.FollowingRequestsAcceptRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        rejectRequest(request: work.socialhub.kmisskey.api.request.following.FollowingRequestsRejectRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.FollowingResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface GalleriesResource {
        posts(request: work.socialhub.kmisskey.api.request.gallery.ListGalleryPostsRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.GalleryPost>>>;
        myPosts(request: work.socialhub.kmisskey.api.request.i.IListGalleryPostsRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.GalleryPost>>>;
        usersPosts(request: work.socialhub.kmisskey.api.request.users.ListUserGalleryPostsRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.GalleryPost>>>;
        show(request: work.socialhub.kmisskey.api.request.gallery.ShowGalleryPostRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.entity.GalleryPost>>;
        create(request: work.socialhub.kmisskey.api.request.gallery.CreateGalleryPostRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.entity.GalleryPost>>;
        delete(request: work.socialhub.kmisskey.api.request.gallery.DeleteGalleryPostRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        update(request: work.socialhub.kmisskey.api.request.gallery.UpdateGalleryPostRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.entity.GalleryPost>>;
        like(request: work.socialhub.kmisskey.api.request.gallery.LikeGalleryPostRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        unlike(request: work.socialhub.kmisskey.api.request.gallery.UnlikeGalleryPostRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.GalleriesResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface HashtagsResource {
        trend(request: work.socialhub.kmisskey.api.request.hashtags.HashtagsTrendRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Trend>>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.HashtagsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface ListsResource {
        list(request: work.socialhub.kmisskey.api.request.lists.UsersListsListRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.NoteList>>>;
        show(request: work.socialhub.kmisskey.api.request.lists.UsersListsShowRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.entity.NoteList>>;
        push(request: work.socialhub.kmisskey.api.request.lists.UsersListsPushRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        pull(request: work.socialhub.kmisskey.api.request.lists.UsersListsPullRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        create(request: work.socialhub.kmisskey.api.request.lists.UsersListsCreateRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.entity.NoteList>>;
        update(request: work.socialhub.kmisskey.api.request.lists.UsersListsUpdateRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.entity.NoteList>>;
        delete(request: work.socialhub.kmisskey.api.request.lists.UsersListsDeleteRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.ListsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface MessagesResource {
        history(request: work.socialhub.kmisskey.api.request.messages.MessagingHistoryRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Message>>>;
        messages(request: work.socialhub.kmisskey.api.request.messages.MessagingMessagesRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Message>>>;
        messagesCreate(request: work.socialhub.kmisskey.api.request.messages.MessagingMessagesCreateRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        messagesDelete(request: work.socialhub.kmisskey.api.request.messages.MessagingMessagesDeleteRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.MessagesResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface MetaResource {
        meta(request: work.socialhub.kmisskey.api.request.meta.MetaRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.entity.Meta>>;
        emojis(request: work.socialhub.kmisskey.api.request.meta.EmojisRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.api.response.meta.EmojisResponse>>;
        getOnlineUsersCount(): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.api.response.meta.GetOnlineUsersCountResponse>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.MetaResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface MutesResource {
        create(request: work.socialhub.kmisskey.api.request.mutes.MutesCreateRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        delete(request: work.socialhub.kmisskey.api.request.mutes.MutesDeleteRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        list(request: work.socialhub.kmisskey.api.request.mutes.MutesListRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<any/* work.socialhub.kmisskey.entity.Mute */>>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.MutesResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface NotesResource {
        users(request: work.socialhub.kmisskey.api.request.notes.UsersNotesRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Note>>>;
        notes(request: work.socialhub.kmisskey.api.request.notes.NotesRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Note>>>;
        children(request: work.socialhub.kmisskey.api.request.notes.NotesChildrenRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Note>>>;
        replies(request: work.socialhub.kmisskey.api.request.notes.NotesRepliesRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Note>>>;
        conversation(request: work.socialhub.kmisskey.api.request.notes.NotesConversationRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Note>>>;
        create(request: work.socialhub.kmisskey.api.request.notes.NotesCreateRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.api.response.notes.NotesCreateResponse>>;
        delete(request: work.socialhub.kmisskey.api.request.notes.NotesDeleteRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        mentions(request: work.socialhub.kmisskey.api.request.notes.NotesMentionsRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Note>>>;
        featured(request: work.socialhub.kmisskey.api.request.notes.NotesFeaturedRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Note>>>;
        globalTimeline(request: work.socialhub.kmisskey.api.request.notes.NotesGlobalTimelineRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Note>>>;
        hybridTimeline(request: work.socialhub.kmisskey.api.request.notes.NotesHybridTimelineRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Note>>>;
        localTimeline(request: work.socialhub.kmisskey.api.request.notes.NotesLocalTimelineRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Note>>>;
        reactions(request: work.socialhub.kmisskey.api.request.notes.NotesReactionsRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.api.response.notes.NotesReactionsResponse>>>;
        timeline(request: work.socialhub.kmisskey.api.request.notes.NotesTimelineRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Note>>>;
        show(request: work.socialhub.kmisskey.api.request.notes.NotesShowRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.entity.Note>>;
        search(request: work.socialhub.kmisskey.api.request.notes.NotesSearchRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Note>>>;
        searchByTag(request: work.socialhub.kmisskey.api.request.notes.NotesSearchByTagRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Note>>>;
        userListTimeline(request: work.socialhub.kmisskey.api.request.notes.NotesUserListTimelineRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Note>>>;
        unrenote(request: work.socialhub.kmisskey.api.request.notes.NoteUnrenoteRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        renotes(request: work.socialhub.kmisskey.api.request.notes.NotesRenotesRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Note>>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.NotesResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface OtherResource {
        serviceWorkerRegister(request: work.socialhub.kmisskey.api.request.other.ServiceWorkerRegisterRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.api.response.other.ServiceWorkerRegisterResponse>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.OtherResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface PollsResource {
        pollsVote(request: work.socialhub.kmisskey.api.request.polls.PollsVoteRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.PollsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface ReactionsResource {
        create(request: work.socialhub.kmisskey.api.request.reactions.ReactionsCreateRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        delete(request: work.socialhub.kmisskey.api.request.reactions.ReactionsDeleteRequest): Promise<work.socialhub.kmisskey.entity.share.EmptyResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.ReactionsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface UsersResource {
        followers(request: work.socialhub.kmisskey.api.request.users.UsersFollowersRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<any/* work.socialhub.kmisskey.entity.Follow */>>>;
        followings(request: work.socialhub.kmisskey.api.request.users.UsersFollowingsRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<any/* work.socialhub.kmisskey.entity.Follow */>>>;
        recommendation(request: work.socialhub.kmisskey.api.request.users.UsersRecommendationRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.user.User>>>;
        showSingle(request: work.socialhub.kmisskey.api.request.users.UsersShowSingleRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.entity.user.User>>;
        showMultiple(request: work.socialhub.kmisskey.api.request.users.UsersShowMultipleRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.user.User>>>;
        reactions(request: work.socialhub.kmisskey.api.request.users.UsersReactionsRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.api.response.notes.UsersReactionsResponse>>>;
        relation(request: work.socialhub.kmisskey.api.request.users.UsersRelationRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Relation>>>;
        search(request: work.socialhub.kmisskey.api.request.users.UsersSearchRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.user.User>>>;
        searchWithAuth(request: work.socialhub.kmisskey.api.request.users.UsersSearchWithAuthRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.user.User>>>;
        searchByUsernameAndHost(request: work.socialhub.kmisskey.api.request.users.UsersSearchByUsernameAndHostRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.user.User>>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kmisskey.api.UsersResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kmisskey.api {
    interface WebhooksResource {
        create(request: work.socialhub.kmisskey.api.request.webhooks.CreateWebhooksRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.entity.Webhook>>;
        delete(request: work.socialhub.kmisskey.api.request.webhooks.DeleteWebhooksRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.api.response.webhooks.DeleteWebhooksResponse>>;
        list(request: work.socialhub.kmisskey.api.request.webhooks.ListWebhooksRequest): Promise<work.socialhub.kmisskey.entity.share.Response<Array<work.socialhub.kmisskey.entity.Webhook>>>;
        show(request: work.socialhub.kmisskey.api.request.webhooks.ShowWebhooksRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.entity.Webhook>>;
        update(request: work.socialhub.kmisskey.api.request.webhooks.UpdateWebhooksRequest): Promise<work.socialhub.kmisskey.entity.share.Response<work.socialhub.kmisskey.api.response.webhooks.UpdateWebhooksResponse>>;
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
    namespace PollRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PollRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request {
    class AnnouncementsRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
        get withUnreads(): Nullable<boolean>;
        set withUnreads(value: Nullable<boolean>);
    }
    namespace AnnouncementsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AnnouncementsRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request {
    class ApShowRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get uri(): Nullable<string>;
        set uri(value: Nullable<string>);
    }
    namespace ApShowRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ApShowRequest;
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
    namespace CreateAppRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CreateAppRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request {
    class GenerateAuthSessionRequest {
        constructor();
        get appSecret(): Nullable<string>;
        set appSecret(value: Nullable<string>);
    }
    namespace GenerateAuthSessionRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GenerateAuthSessionRequest;
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
    namespace GetMiAuthUriRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GetMiAuthUriRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request {
    class ReadAnnouncementRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(announcementId: string);
        get announcementId(): string;
    }
    namespace ReadAnnouncementRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ReadAnnouncementRequest;
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
    namespace UserKeyAuthSessionRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UserKeyAuthSessionRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.antennas {
    class AntennasListRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
    }
    namespace AntennasListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AntennasListRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.antennas {
    class AntennasNotesRequest /* extends work.socialhub.kmisskey.api.request.protocol.FullPagingTokenRequest */ {
        constructor();
        get antennaId(): Nullable<string>;
        set antennaId(value: Nullable<string>);
    }
    namespace AntennasNotesRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AntennasNotesRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.blocks {
    class BlocksCreateRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    namespace BlocksCreateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlocksCreateRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.blocks {
    class BlocksDeleteRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    namespace BlocksDeleteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlocksDeleteRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.blocks {
    class BlocksListRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
    }
    namespace BlocksListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BlocksListRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.channels {
    class ChannelsFollowedRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
    }
    namespace ChannelsFollowedRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChannelsFollowedRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.channels {
    class ChannelsMyFavoritesRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
    }
    namespace ChannelsMyFavoritesRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChannelsMyFavoritesRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.channels {
    class ChannelsOwnedRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
    }
    namespace ChannelsOwnedRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChannelsOwnedRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.channels {
    class ChannelsShowRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get channelId(): Nullable<string>;
        set channelId(value: Nullable<string>);
    }
    namespace ChannelsShowRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChannelsShowRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.channels {
    class ChannelsTimelineRequest /* extends work.socialhub.kmisskey.api.request.protocol.FullPagingTokenRequest */ {
        constructor();
        get channelId(): Nullable<string>;
        set channelId(value: Nullable<string>);
    }
    namespace ChannelsTimelineRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChannelsTimelineRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.clips {
    class ClipsAddNoteRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(noteId: string, clipId: string);
        get noteId(): string;
        get clipId(): string;
    }
    namespace ClipsAddNoteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ClipsAddNoteRequest;
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
    namespace ClipsCreateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ClipsCreateRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.clips {
    class ClipsDeleteRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(clipId: string);
        get clipId(): string;
    }
    namespace ClipsDeleteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ClipsDeleteRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.clips {
    class ClipsListRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
    }
    namespace ClipsListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ClipsListRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.clips {
    class ClipsNotesRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
        get clipId(): Nullable<string>;
        set clipId(value: Nullable<string>);
    }
    namespace ClipsNotesRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ClipsNotesRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.clips {
    class ClipsRemoveNoteRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(noteId: string, clipId: string);
        get noteId(): string;
        get clipId(): string;
    }
    namespace ClipsRemoveNoteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ClipsRemoveNoteRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.clips {
    class ClipsShowRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(clipId: string);
        get clipId(): string;
    }
    namespace ClipsShowRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ClipsShowRequest;
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
    namespace ClipsUpdateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ClipsUpdateRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.favorites {
    class FavoritesCreateRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get noteId(): Nullable<string>;
        set noteId(value: Nullable<string>);
    }
    namespace FavoritesCreateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FavoritesCreateRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.favorites {
    class FavoritesDeleteRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get noteId(): Nullable<string>;
        set noteId(value: Nullable<string>);
    }
    namespace FavoritesDeleteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FavoritesDeleteRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.federation {
    class ShowInstanceRequest {
        constructor();
        get host(): Nullable<string>;
        set host(value: Nullable<string>);
    }
    namespace ShowInstanceRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ShowInstanceRequest;
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
    namespace FilesCreateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesCreateRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.following {
    class FollowingCreateRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    namespace FollowingCreateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FollowingCreateRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.following {
    class FollowingDeleteRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    namespace FollowingDeleteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FollowingDeleteRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.following {
    class FollowingRequestsAcceptRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    namespace FollowingRequestsAcceptRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FollowingRequestsAcceptRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.following {
    class FollowingRequestsListRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
    }
    namespace FollowingRequestsListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FollowingRequestsListRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.following {
    class FollowingRequestsRejectRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    namespace FollowingRequestsRejectRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FollowingRequestsRejectRequest;
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
    namespace CreateGalleryPostRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CreateGalleryPostRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.gallery {
    class DeleteGalleryPostRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(postId: string);
        get postId(): string;
        set postId(value: string);
    }
    namespace DeleteGalleryPostRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DeleteGalleryPostRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.gallery {
    class LikeGalleryPostRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(postId: string);
        get postId(): string;
        set postId(value: string);
    }
    namespace LikeGalleryPostRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => LikeGalleryPostRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.gallery {
    class ListGalleryPostsRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
    }
    namespace ListGalleryPostsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ListGalleryPostsRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.gallery {
    class ShowGalleryPostRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get postId(): Nullable<string>;
        set postId(value: Nullable<string>);
    }
    namespace ShowGalleryPostRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ShowGalleryPostRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.gallery {
    class UnlikeGalleryPostRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(postId: string);
        get postId(): string;
        set postId(value: string);
    }
    namespace UnlikeGalleryPostRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UnlikeGalleryPostRequest;
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
    namespace UpdateGalleryPostRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UpdateGalleryPostRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.hashtags {
    class HashtagsTrendRequest {
        constructor();
    }
    namespace HashtagsTrendRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => HashtagsTrendRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.i {
    class IFavoritesRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
    }
    namespace IFavoritesRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => IFavoritesRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.i {
    class IListGalleryPostsRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
    }
    namespace IListGalleryPostsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => IListGalleryPostsRequest;
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
    namespace INotificationsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => INotificationsRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.i {
    class IPinRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(noteId: string);
        get noteId(): string;
    }
    namespace IPinRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => IPinRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.i {
    class IRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
    }
    namespace IRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => IRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.i {
    class IUnpinRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(noteId: string);
        get noteId(): string;
    }
    namespace IUnpinRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => IUnpinRequest;
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
    namespace IUpdateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => IUpdateRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.lists {
    class UsersListsCreateRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(name: string);
        get name(): string;
        set name(value: string);
    }
    namespace UsersListsCreateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersListsCreateRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.lists {
    class UsersListsDeleteRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor(listId: string);
        get listId(): string;
        set listId(value: string);
    }
    namespace UsersListsDeleteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersListsDeleteRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.lists {
    class UsersListsListRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
    }
    namespace UsersListsListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersListsListRequest;
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
    namespace UsersListsPullRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersListsPullRequest;
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
    namespace UsersListsPushRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersListsPushRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.lists {
    class UsersListsShowRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get listId(): Nullable<string>;
        set listId(value: Nullable<string>);
    }
    namespace UsersListsShowRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersListsShowRequest;
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
    namespace UsersListsUpdateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersListsUpdateRequest;
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
    namespace MessagingHistoryRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MessagingHistoryRequest;
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
    namespace MessagingMessagesCreateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MessagingMessagesCreateRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.messages {
    class MessagingMessagesDeleteRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get messageId(): Nullable<string>;
        set messageId(value: Nullable<string>);
    }
    namespace MessagingMessagesDeleteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MessagingMessagesDeleteRequest;
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
    namespace MessagingMessagesRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MessagingMessagesRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.meta {
    class EmojisRequest {
        constructor();
    }
    namespace EmojisRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => EmojisRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.meta {
    class MetaRequest {
        constructor();
        get detail(): Nullable<boolean>;
        set detail(value: Nullable<boolean>);
    }
    namespace MetaRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MetaRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.mutes {
    class MutesCreateRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    namespace MutesCreateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MutesCreateRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.mutes {
    class MutesDeleteRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    namespace MutesDeleteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MutesDeleteRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.mutes {
    class MutesListRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
    }
    namespace MutesListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MutesListRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NoteUnrenoteRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get noteId(): Nullable<string>;
        set noteId(value: Nullable<string>);
    }
    namespace NoteUnrenoteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NoteUnrenoteRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NotesChildrenRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
        get noteId(): Nullable<string>;
        set noteId(value: Nullable<string>);
    }
    namespace NotesChildrenRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotesChildrenRequest;
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
    namespace NotesConversationRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotesConversationRequest;
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
    namespace NotesCreateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotesCreateRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NotesDeleteRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get noteId(): Nullable<string>;
        set noteId(value: Nullable<string>);
    }
    namespace NotesDeleteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotesDeleteRequest;
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
    namespace NotesFeaturedRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotesFeaturedRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NotesGlobalTimelineRequest /* extends work.socialhub.kmisskey.api.request.protocol.FullPagingTokenRequest */ {
        constructor();
        get withFiles(): Nullable<boolean>;
        set withFiles(value: Nullable<boolean>);
    }
    namespace NotesGlobalTimelineRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotesGlobalTimelineRequest;
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
    namespace NotesHybridTimelineRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotesHybridTimelineRequest;
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
    namespace NotesLocalTimelineRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotesLocalTimelineRequest;
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
    namespace NotesMentionsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotesMentionsRequest;
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
    namespace NotesReactionsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotesReactionsRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NotesRenotesRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
        get noteId(): Nullable<string>;
        set noteId(value: Nullable<string>);
    }
    namespace NotesRenotesRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotesRenotesRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NotesRepliesRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
        get noteId(): Nullable<string>;
        set noteId(value: Nullable<string>);
    }
    namespace NotesRepliesRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotesRepliesRequest;
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
    namespace NotesRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotesRequest;
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
    namespace NotesSearchByTagRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotesSearchByTagRequest;
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
    namespace NotesSearchRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotesSearchRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.notes {
    class NotesShowRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get noteId(): Nullable<string>;
        set noteId(value: Nullable<string>);
    }
    namespace NotesShowRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotesShowRequest;
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
    namespace NotesTimelineRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotesTimelineRequest;
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
    namespace NotesUserListTimelineRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotesUserListTimelineRequest;
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
    namespace UsersNotesRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersNotesRequest;
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
    namespace ServiceWorkerRegisterRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ServiceWorkerRegisterRequest;
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
    namespace PollsVoteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PollsVoteRequest;
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
    namespace ReactionsCreateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ReactionsCreateRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.reactions {
    class ReactionsDeleteRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get noteId(): Nullable<string>;
        set noteId(value: Nullable<string>);
    }
    namespace ReactionsDeleteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ReactionsDeleteRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.users {
    class ListUserGalleryPostsRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor(userId: string);
        get userId(): string;
        set userId(value: string);
    }
    namespace ListUserGalleryPostsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ListUserGalleryPostsRequest;
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
    namespace UsersFollowersRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersFollowersRequest;
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
    namespace UsersFollowingsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersFollowingsRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.users {
    class UsersReactionsRequest /* extends work.socialhub.kmisskey.api.request.protocol.PagingTokenRequest */ {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    namespace UsersReactionsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersReactionsRequest;
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
    namespace UsersRecommendationRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersRecommendationRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.users {
    class UsersRelationRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get userId(): Array<string>;
        set userId(value: Array<string>);
    }
    namespace UsersRelationRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersRelationRequest;
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
    namespace UsersSearchByUsernameAndHostRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersSearchByUsernameAndHostRequest;
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
    namespace UsersSearchRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersSearchRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.users {
    class UsersSearchWithAuthRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
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
    namespace UsersSearchWithAuthRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersSearchWithAuthRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.users {
    class UsersShowMultipleRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get userIds(): Array<string>;
        set userIds(value: Array<string>);
    }
    namespace UsersShowMultipleRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersShowMultipleRequest;
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
    namespace UsersShowSingleRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersShowSingleRequest;
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
    namespace CreateWebhooksRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CreateWebhooksRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.webhooks {
    class DeleteWebhooksRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get webhookId(): Nullable<string>;
        set webhookId(value: Nullable<string>);
    }
    namespace DeleteWebhooksRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DeleteWebhooksRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.webhooks {
    class ListWebhooksRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
    }
    namespace ListWebhooksRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ListWebhooksRequest;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.request.webhooks {
    class ShowWebhooksRequest /* extends work.socialhub.kmisskey.api.model.TokenRequest */ {
        constructor();
        get webhookId(): Nullable<string>;
        set webhookId(value: Nullable<string>);
    }
    namespace ShowWebhooksRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ShowWebhooksRequest;
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
    namespace UpdateWebhooksRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UpdateWebhooksRequest;
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
    namespace ApShowResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ApShowResponse;
        }
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
    namespace CreateAppResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CreateAppResponse;
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
    namespace GenerateAuthSessionResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GenerateAuthSessionResponse;
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
    namespace UserKeyAuthSessionResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UserKeyAuthSessionResponse;
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
    namespace FederationInstanceResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FederationInstanceResponse;
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
    namespace FollowingRequestsListResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FollowingRequestsListResponse;
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
    namespace IFavoritesResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => IFavoritesResponse;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.response.meta {
    class EmojisResponse {
        constructor();
        get emojis(): Array<work.socialhub.kmisskey.entity.Emoji>;
        set emojis(value: Array<work.socialhub.kmisskey.entity.Emoji>);
    }
    namespace EmojisResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => EmojisResponse;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.response.meta {
    class GetOnlineUsersCountResponse {
        constructor();
        get count(): Nullable<number>;
        set count(value: Nullable<number>);
    }
    namespace GetOnlineUsersCountResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GetOnlineUsersCountResponse;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.response.notes {
    class NotesCreateResponse {
        constructor();
        get createdNote(): work.socialhub.kmisskey.entity.Note;
        set createdNote(value: work.socialhub.kmisskey.entity.Note);
    }
    namespace NotesCreateResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotesCreateResponse;
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
    namespace NotesReactionsResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NotesReactionsResponse;
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
    namespace UsersReactionsResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersReactionsResponse;
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
    namespace ServiceWorkerRegisterResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ServiceWorkerRegisterResponse;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.response.webhooks {
    class DeleteWebhooksResponse {
        constructor();
    }
    namespace DeleteWebhooksResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DeleteWebhooksResponse;
        }
    }
}
export declare namespace work.socialhub.kmisskey.api.response.webhooks {
    class UpdateWebhooksResponse {
        constructor();
    }
    namespace UpdateWebhooksResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UpdateWebhooksResponse;
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Achievement {
        constructor();
        get name(): string;
        set name(value: string);
    }
    namespace Achievement {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Achievement;
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
    namespace Announcements {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Announcements;
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
    namespace Antenna {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Antenna;
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
    namespace AvatarDecoration {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AvatarDecoration;
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
    namespace BadgeRole {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BadgeRole;
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
    namespace Block {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Block;
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
    namespace Channel {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Channel;
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
    namespace Choice {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Choice;
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
    namespace Clip {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Clip;
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
    namespace Color {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Color;
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
    namespace Emoji {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Emoji;
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Emojis {
        constructor();
        get list(): Array<work.socialhub.kmisskey.entity.Emoji>;
        set list(value: Array<work.socialhub.kmisskey.entity.Emoji>);
    }
    namespace Emojis {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Emojis;
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
    namespace Field {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Field;
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
    namespace File {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => File;
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
    namespace FileProperties {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FileProperties;
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
    namespace Folder {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Folder;
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
    namespace GalleryPost {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GalleryPost;
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Group {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get createdAt(): Nullable<string>;
        set createdAt(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get ownerId(): Nullable<string>;
        set ownerId(value: Nullable<string>);
        get userIds(): Nullable<kotlin.collections.KtList<string>>;
        set userIds(value: Nullable<kotlin.collections.KtList<string>>);
    }
    namespace Group {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Group;
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
    namespace Instance {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Instance;
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    class Message {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get createdAt(): Nullable<string>;
        set createdAt(value: Nullable<string>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get user(): Nullable<work.socialhub.kmisskey.entity.user.User>;
        set user(value: Nullable<work.socialhub.kmisskey.entity.user.User>);
        get fileId(): Nullable<string>;
        set fileId(value: Nullable<string>);
        get file(): Nullable<work.socialhub.kmisskey.entity.File>;
        set file(value: Nullable<work.socialhub.kmisskey.entity.File>);
        get recipientId(): Nullable<string>;
        set recipientId(value: Nullable<string>);
        get recipient(): Nullable<work.socialhub.kmisskey.entity.user.User>;
        set recipient(value: Nullable<work.socialhub.kmisskey.entity.user.User>);
        get groupId(): Nullable<string>;
        set groupId(value: Nullable<string>);
        get group(): Nullable<work.socialhub.kmisskey.entity.Group>;
        set group(value: Nullable<work.socialhub.kmisskey.entity.Group>);
        get read(): boolean;
        set read(value: boolean);
        get reads(): Nullable<kotlin.collections.KtList<string>>;
        set reads(value: Nullable<kotlin.collections.KtList<string>>);
    }
    namespace Message {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Message;
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
    namespace Meta {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Meta;
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
    namespace MetaFeatures {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MetaFeatures;
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity {
    abstract class MutedWordItem {
        protected constructor();
    }
    namespace MutedWordItem {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MutedWordItem;
        }
        class RegexPattern extends work.socialhub.kmisskey.entity.MutedWordItem.$metadata$.constructor {
            constructor(pattern: string);
            get pattern(): string;
            copy(pattern?: string): work.socialhub.kmisskey.entity.MutedWordItem.RegexPattern;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
        }
        namespace RegexPattern {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                const constructor: abstract new () => RegexPattern;
            }
        }
        class Keywords extends work.socialhub.kmisskey.entity.MutedWordItem.$metadata$.constructor {
            constructor(words: kotlin.collections.KtList<string>);
            get words(): kotlin.collections.KtList<string>;
            copy(words?: kotlin.collections.KtList<string>): work.socialhub.kmisskey.entity.MutedWordItem.Keywords;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
        }
        namespace Keywords {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                const constructor: abstract new () => Keywords;
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
    namespace Note {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Note;
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
    namespace NoteList {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => NoteList;
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
    namespace Notification {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Notification;
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
    namespace Page {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Page;
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
    namespace Policies {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Policies;
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
    namespace Poll {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Poll;
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
    namespace Relation {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Relation;
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
    namespace Role {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Role;
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
    namespace SecurityKey {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SecurityKey;
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
    namespace Trend {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Trend;
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
    namespace UserPolicies {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UserPolicies;
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
    namespace Webhook {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Webhook;
        }
    }
}
export declare namespace work.socialhub.kmisskey.entity.share {
    class EmptyResponse {
        constructor(limit?: Nullable<work.socialhub.kmisskey.entity.share.RateLimit>);
        get limit(): Nullable<work.socialhub.kmisskey.entity.share.RateLimit>;
        set limit(value: Nullable<work.socialhub.kmisskey.entity.share.RateLimit>);
    }
    namespace EmptyResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => EmptyResponse;
        }
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
    namespace RateLimit {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RateLimit;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get X_RATELIMIT_LIMIT(): string;
                    get X_RATELIMIT_REMAINING(): string;
                    get X_RATELIMIT_RESET(): string;
                    private constructor();
                }
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
    namespace Response {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new <T>() => Response<T>;
        }
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
        get mutedWords(): kotlin.collections.KtList<work.socialhub.kmisskey.entity.MutedWordItem>;
        set mutedWords(value: kotlin.collections.KtList<work.socialhub.kmisskey.entity.MutedWordItem>);
        get hardMutedWords(): kotlin.collections.KtList<work.socialhub.kmisskey.entity.MutedWordItem>;
        set hardMutedWords(value: kotlin.collections.KtList<work.socialhub.kmisskey.entity.MutedWordItem>);
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
    namespace MeDetailed {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MeDetailed;
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
    namespace User {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => User;
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
    namespace UserDetailedNotMe {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UserDetailedNotMe;
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
    namespace UserLite {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UserLite;
        }
    }
}
export declare namespace work.socialhub.kmisskey {
    abstract class KmisskeyFactory extends KtSingleton<KmisskeyFactory.$metadata$.constructor>() {
        private constructor();
    }
    namespace KmisskeyFactory {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                instance(uri: string): work.socialhub.kmisskey.Misskey;
                instanceOwnedAccessToken(uri: string, userAccessToken: string): work.socialhub.kmisskey.Misskey;
                instanceUserAccessToken(uri: string, appSecret: string, userAccessToken: string): work.socialhub.kmisskey.Misskey;
                private constructor();
            }
        }
    }
}
export as namespace work_socialhub_kmisskey_all;