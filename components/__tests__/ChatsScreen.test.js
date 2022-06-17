import React from "react";
import renderer from 'react-test-renderer';
import 'react-native';
import newMessageButton  from "../NewMessageButton";
import ChatListItem from "../ChatListItem";
import ChatsScreen from "../../screens/ChatsScreen";
import App from "../../App";
import { render, fireEvent } from "@testing-library/react-native";

describe('test true is true', () => {
    it('true is true', () => {
        expect(true).toBe(true);
    });
}
);

it(`renders new message button correctly`, () => {
    const tree = renderer.create(newMessageButton).toJSON();

    expect(tree).toMatchSnapshot();
});

/*describe('chats screen',() => {
    it('should go to chat page',() => {
            const page = render(<ChatListItem />);
            const chatButton = page.getByTestId("chatRoomButton");
    })
})*/
