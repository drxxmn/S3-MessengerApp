export const getUser = /* GraphQL */ `
    query GetUser($id: ID!) {
        getUser(id: $id) {
            id
            name
            imageUri
            status
            chatRoomUser {
                items {
                    id
                    userID
                    chatRoomID
                    createdAt
                    updatedAt
                    owner
                    chatRoom{
                        id
                        chatRoomUsers{
                            items{
                                user{
                                    id
                                    name
                                    imageUri
                                    status
                                }
                            }
                        }
                        lastMessage {
                            id
                            content
                            updatedAt
                            user {
                                id
                                name
                            }
                        }
                    }
                }
                nextToken
            }
            createdAt
            updatedAt
            owner
        }
    }
`;

export const onCreateMessage = /* GraphQL */ `
    subscription OnCreateMessage {
        onCreateMessage {
            id
            createdAt
            content
            userID
            chatRoomID
            user {
                id
                name
                imageUri
                status
                chatRoomUser {
                    nextToken
                }
                createdAt
                updatedAt
                owner
            }
            chatRoom {
                id
                chatRoomUsers {
                    nextToken
                }
                messages {
                    nextToken
                }
                lastMessageID
                lastMessage {
                    id
                    createdAt
                    content
                    userID
                    chatRoomID
                    updatedAt
                    owner
                }
                createdAt
                updatedAt
                owner
            }
            updatedAt
            owner
        }
    }
`;
