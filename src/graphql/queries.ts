/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getChatRoomUser = /* GraphQL */ `
  query GetChatRoomUser($id: ID!) {
    getChatRoomUser(id: $id) {
      id
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
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listChatRoomUsers = /* GraphQL */ `
  query ListChatRoomUsers(
    $filter: ModelChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRoomUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        chatRoomID
        user {
          id
          name
          imageUri
          status
          createdAt
          updatedAt
          owner
        }
        chatRoom {
          id
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chatRoomUsers {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
