import React from "react";
import { create } from "react-test-renderer";
import { InputComponent } from '../../src/components/InputComponent/InputComponent';

describe("Input component", () => {
    test("Matches the snapshot", () => {
        const input = create(<InputComponent placeholderTxt="Name" />);
        expect(input.toJSON()).toMatchSnapshot();
    });
});