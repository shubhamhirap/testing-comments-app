import CommentList from "components/CommentList";
import { mount } from "enzyme";
import Root from "Root";

let wrapped;

beforeEach(() => {
  const initialState = { comments: ["Comment1", "Comment2"] };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("creates one LI per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

it("shows the text for each comment", () => {
  expect(wrapped.render().text()).toContain("Comment1");
  expect(wrapped.render().text()).toContain("Comment2");
});
