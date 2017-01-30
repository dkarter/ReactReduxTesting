import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;
  beforeEach(() => {
    const props = {
      comments: ['great product', 'I did not like it'],
    };
    component = renderComponent(CommentList, null, props);
  });

  it('shows an li for each comment', () => {
    expect(component.find('li.comment').length).to.eq(2)
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('great product');
    expect(component).to.contain('I did not like it');
  });
});
