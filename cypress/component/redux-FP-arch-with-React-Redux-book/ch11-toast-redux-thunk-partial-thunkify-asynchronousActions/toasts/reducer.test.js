import reducer from "./reducer";
import * as actions from "./actions";

test("addToast", function () {
  const toasts = [{ id: 1, message: "First toast" }];

  const action = actions.addToast({ id: 2, message: "Second toast" });

  const expectOutput = [
    { id: 1, message: "First toast" },
    { id: 2, message: "Second toast" },
  ];

  expect(reducer(toasts, action)).toEqual(expectOutput);
});

test("deleteToast", function () {
  const toasts = [
    { id: 1, message: "First toast" },
    { id: 2, message: "Second toast" },
  ];

  const action = actions.deleteToast({ id: 2, message: "Second toast" });

  const expectOutput = [{ id: 1, message: "First toast" }];

  expect(reducer(toasts, action)).toEqual(expectOutput);
});
